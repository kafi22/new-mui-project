import React from "react";
import UseContextapi from "./UseContextapi";

const GlobalProvider = (props) => {


    const user = 'kafi ahmed'


    return (
       <UseContextapi.Provider value={{user}}>
            {props.children}
       </UseContextapi.Provider>
    )
}

export default GlobalProvider;