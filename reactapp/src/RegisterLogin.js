
import React from 'react';
import SignUpWindow from './SignUpWindow';
import LoginWindow from './LoginWindow';

const RegisterLogin = () => {
    return (
        <div className="RegisterLogin">
            <div className="container">
                <h2>Register</h2>
                <SignUpWindow />
                <hr />
                <h2>Login</h2>
                <LoginWindow />
            </div>
        </div>
    )
}

export default RegisterLogin;
