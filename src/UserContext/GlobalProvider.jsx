import React, { useState } from "react";
import UseContextapi from "./UseContextapi";

const GlobalProvider = (props) => {



   const [user, setUser] = useState([])


   const logOutFn = () => {
      setUser([])
      
      
   }


    return (
       <UseContextapi.Provider value={{user, setUser, logOutFn }}>
            {props.children}
       </UseContextapi.Provider>
    )
}

export default GlobalProvider;