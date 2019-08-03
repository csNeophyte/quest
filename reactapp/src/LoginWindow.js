import React, { useContext, useState } from 'react';
import { AppContext } from './App';

const LoginWindow = () => {

    let email;
    let password;

    const [localState, setLocalState] = useState({
        successMessage: false,
        errorMessage: false
    })
    const [state, setState] = useContext(AppContext);

    const loginUser = () => {

        let formData = {


            email: email.value,
            password: password.value,

        };
        fetch(
            // URL
            'http://localhost:5000/auth/login',
            // Data
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        )
            .then(async res => {
                if(res.status == "400") {
                    //Handle the error
                    setLocalState({...localState, successMessage: false, errorMessage: true})
                } else {
                    //Parse json data
                   let userInfo = await res.json();
                   console.log(userInfo)


                    localStorage.setItem('userToken', userInfo.token)

                    //Show success message
                    setLocalState({...localState, successMessage: true, errorMessage: false})
                    //Close the sign up window when logged in
                    setState({...state, signUpForm: false})
                }
            })

            .catch(err => {
                console.log('err', err);
            })
    }
    const closeLogin = () => {
        setState({ signUpForm: false })
    }
    return(<div className="SignUpWindow">
        <div className="container">


            <label>Email</label>
            <input ref={comp=> email = comp} type="text" className="form-control" />

            <label>Password</label>
            <input ref={comp=> password = comp} type="password" className="form-control" />


            <button onClick={loginUser} className="btn btn-primary">Login</button>
            <button onClick={closeLogin} className="btn btn-danger">Cancel</button>
            {
                localState.successMessage &&
                <div className="alert alert-success">
                    You've entered righteously
                </div>
            }
            {
                localState.errorMessage &&
                <div className="alert alert-danger">
                    Your keys are erroneous!
                </div>
            }
        </div>
    </div>)
}
export default LoginWindow;