import React from "react";
import SignUpButton from './SignUpButton';
import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton';



const NavBar = () => {

    const loggedIn = localStorage.getItem('userToken');

    return (
        <div className="NavBar navbar navbar-light bg-light static-top">
            <div className="nav-links container">
                <Link className="logo" to="/"><h2>Knight's Visage</h2></Link>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/feeds">Feeds</Link>
                {!loggedIn && <SignUpButton>Enter the Dragon's Cave</SignUpButton>}
                { loggedIn && <LogOutButton className ="btn btn-primary">Log Out</LogOutButton>}
            </div>
        </div>
    )
};

export default NavBar;
