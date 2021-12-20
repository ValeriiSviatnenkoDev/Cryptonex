import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = (props) => {
    const [showSearch, setShowSearch] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return(
        <MainContext.Provider value={{showSearch, setShowSearch, showSettings, setShowSettings}}>
            {props.children}
        </MainContext.Provider>
    )
}