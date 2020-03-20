import React from 'react';
import './Login.css';
import {Button} from 'react-bootstrap';
const Login = () => {
    return (
        <div>
            <div className="login_container">
            <h1>Spotify Profile</h1>
           <a href="http://localhost:8888"> <Button size="lg" variant="success">login with Spotify</Button></a>
            </div>
        </div>
    );
};

export default Login;