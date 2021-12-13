import React, { createContext, useState } from "react";

export const StartContext = createContext();

export const StartProvider = (props) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignInGoogle, setShowSignInGoogle] = useState(false);

    return(
        <StartContext.Provider value={{showSignIn, setShowSignIn, showSignUp, setShowSignUp, setShowSignInGoogle}}>
            {props.children}
        </StartContext.Provider>
    )
}