import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login(props) {
  const navigate = useNavigate();
  const [loginForm, setloginForm] = useState({
    username: "",
    password: ""
  })

  function logMeIn(event) {
    axios({
      method: "POST",
      url: "/token",
      data: {
        username: loginForm.username,
        password: loginForm.password
      }
    })
      .then((response) => {
        props.setToken(response.data.access_token)
        navigate("/profile")
        window.location.reload()
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })

    setloginForm(({
      username: "",
      password: ""
    }))

    event.preventDefault()
  }

  function handleChange(event) {
    const { value, name } = event.target
    setloginForm(prevNote => ({
      ...prevNote, [name]: value
    })
    )
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.container}>
        <input onChange={handleChange}
          type="username"
          text={loginForm.username}
          name="username"
          placeholder="Username"
          value={loginForm.username} />
        <input onChange={handleChange}
          type="password"
          text={loginForm.password}
          name="password"
          placeholder="Password"
          value={loginForm.password} />
        <button className={styles.button_highlight} onClick={logMeIn}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
