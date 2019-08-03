import React, {useContext} from 'react';
import Button from "./Button";
import {AppContext} from './App';

//Notes
// Use 'useContext' if outside JSX
// Use 'AppContext.Consumer' if inside JSX


const SignUpButton = (prop) => {
// useContext will give the values from context

    const [state, setState] = useContext(AppContext);

    const openWindow = () => {
        setState({signUpForm: true});
    }

    //AppContext.Consumer will give you values from context in JSX
    return (

        <AppContext.Consumer>
            {
                (value) => <Button clickFunction={openWindow} className="link">{prop.children}</Button>
            }
        </AppContext.Consumer>

    )};

export default SignUpButton;