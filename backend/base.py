import json
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, \
    unset_jwt_cookies, jwt_required, JWTManager
from db import save_user, get_user


api = Flask(__name__)

api.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(api)


@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=5))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response


@api.route('/token', methods=["POST"])
def create_token():
    username = request.json.get("username")
    password = request.json.get("password", None)
    user = get_user(username)
    if user and user.check_password(password):
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token)
    return {"msg": "Wrong username or password"}, 401

@api.route('/register', methods=["POST"])
def register():
    username = request.json.get("username")
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email is None or password is None:
        return {"msg": "Missing email or password"}, 401
    save_user(username, email, password)
    return {"msg": "User registered"}

@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


@api.route('/profile')
@jwt_required()
def my_profile():
    response_body = {
        "name": "Jesse Doka",
        "about": "Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body
