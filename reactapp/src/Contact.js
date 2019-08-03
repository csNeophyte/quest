import React, {useContext} from 'react';
import NavBar from './NavBar';
import RegisterLogin from "./RegisterLogin";
import {AppContext} from "./App";

const Contact = () => {

    const [state, setState] = useContext(AppContext);

    return (
        <div className="Contact">
            <NavBar/>
            <div className="container">
                <h1> Use the Old Ways to Reach the Gods</h1>
                <p>Summon a westerly wind using your weapon of choice, invoke the name of Iris and Hermes and speak to them as it blows past you. Zephyrus, God of the West Wind and husband of Iris will hear and make sure that Olympus gets word.</p>

            </div>
            {state.signUpForm && <RegisterLogin />}
        </div>
    )
}

export default Contact;