import React from "react";
import { createContext, useState } from "react";


export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
 
  
  return (
    <UserContext.Provider
      value={{
       isLogged, 
       setIsLogged
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;