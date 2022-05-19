import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout(props) {
    const navigate = useNavigate();

    function logMeOut() {
        axios({
            method: "POST",
            url: "/logout",
        })
            .then((response) => {
                props.token()
                navigate("/login")
                window.location.reload()
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }

    return (
        <header className="App-header">
            <button onClick={logMeOut}>
                Logout
            </button>
        </header>
    )
}

export default Logout;
