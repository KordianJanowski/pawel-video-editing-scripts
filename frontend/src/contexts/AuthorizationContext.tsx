import React, { Dispatch , SetStateAction, createContext, useContext, useState } from "react";

interface IauthorizationContext {
  isAuthorized: boolean,
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
}

export const AuthorizationContext = createContext<IauthorizationContext>({
  isAuthorized: false,
  setIsAuthorized: () => false
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