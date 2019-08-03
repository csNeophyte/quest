import React, {useContext} from 'react';
import Button from "./Button";
import {AppContext} from './App';

//Notes
// Use 'useContext' if outside JSX
// Use 'AppContext.Consumer' if inside JSX


const LogOutButton = (prop) => {
// useContext will give the values from context

    const logOutUser = () => {
        localStorage.clear()

    }


    //AppContext.Consumer will give you values from context in JSX
    return (

        <AppContext.Consumer>
            {
                (value) => <Button clickFunction={logOutUser} className="link">{prop.children}</Button>
            }
        </AppContext.Consumer>

    )};

export default LogOutButton;