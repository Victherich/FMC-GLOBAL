import React, { createContext, useState } from "react";


export const Context = createContext();


const ContextProvider = ({children})=>{
    const test = true;
   const [ openPendingModal, setOpenPendingModal] = useState(false)

    return(
        <Context.Provider value={{test, openPendingModal, setOpenPendingModal}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider