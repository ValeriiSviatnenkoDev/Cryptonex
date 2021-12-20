import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
    const [showCards, setShowCards] = useState(false);
    const [showAction, setShowAction] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    return(
        <ProfileContext.Provider value={{showCards, setShowCards, showAction, setShowAction, showOptions, setShowOptions}}>
            {props.children}
        </ProfileContext.Provider>
    )
}