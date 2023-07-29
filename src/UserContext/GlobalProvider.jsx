import React, { useState } from "react";
import UseContextapi from "./UseContextapi";

const GlobalProvider = ({children}) => {



   const [user, setUser] = useState([])


   const logOutFn = () => {
      setUser([])
      
      
   }


    return (
       <UseContextapi.Provider value={{user, setUser, logOutFn }}>
            {children}
       </UseContextapi.Provider>
    )
}

export default GlobalProvider;