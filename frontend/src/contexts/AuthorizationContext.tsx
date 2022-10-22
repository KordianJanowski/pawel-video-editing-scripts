import React, { Context, createContext, useContext, useState } from "react";

// interface IauthorizationContext {
//   isAuthorized: boolean,
// }

export const AuthorizationContext = createContext({
  isAuthorized: false,
  setIsAuthorized: (newValue:boolean) => console.log(newValue)
})

export const useAuthorizationContext = () => {
  return useContext(AuthorizationContext)
}

interface Iprops {
  children: React.ReactNode
}

export const AuthorizationContextProvider = ({ children }:Iprops) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)

  return (
    <AuthorizationContext.Provider value={{
      isAuthorized,
      setIsAuthorized
    }}>
      {children}
    </AuthorizationContext.Provider>
  )
}