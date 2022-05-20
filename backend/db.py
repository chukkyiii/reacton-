from config import client
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash
from user import User

user_db = client.get_database('User')
users_collection = user_db.get_collection('users')


def save_user(username: str, email: str, password: str):
    password_hash = generate_password_hash(password)
    users_collection.insert_one({
        '_id': username,
        'email': email,
        'password': password_hash
    })


def get_user(username):
    user_data = users_collection.find_one({
        '_id': username
    })
    if user_data:
        return User(user_data['_id'], user_data['email'], user_data['password'])
    else:
        None


def timeformat(time):
    now = datetime.now()
    time_delta = (now - time)
    sec_diff = time_delta.total_seconds()
    return sec_diff/60**2


if __name__ == "__main__":
    save_user('test', 'test@icloud.com', 'test')
