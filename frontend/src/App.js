import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
    Reactbox,
    Navigation,
    About,
    Login,
    Profile,
    useToken
} from "./components"

export default function App() {
    const { token, setToken } = useToken();
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Reactbox />} />
                <Route path="/about" element={<About />} />
                {
                    !token && token !== "" && token !== undefined ?
                    <Route path="/login" element={<Login setToken={setToken} />} /> :
                    <Route exact path="/profile" element={<Profile token={token} setToken={setToken} />} />
                }
            </Routes>
        </Router>
    )
}



