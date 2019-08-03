import React, {useContext} from 'react';
import NavBar from './NavBar';
import RegisterLogin from "./RegisterLogin";
import {AppContext} from "./App";

const About = () => {

    const [state, setState] = useContext(AppContext);

    return (
        <div className="About">
            <NavBar/>
            <div className="container">
                <h1>Hail the Gods Above and Below</h1>
                <p>All magicke floweth from the wings of fae...</p>
            </div>

            {state.signUpForm && <RegisterLogin />}

        </div>
    )
}

export default About;