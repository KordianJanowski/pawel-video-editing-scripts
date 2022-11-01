import React, { Dispatch , SetStateAction, createContext, useContext, useState } from "react";
import { Iscript } from "../types/interfaces";

interface IscriptsContext {
  scripts: Iscript[],
  setScripts: Dispatch<SetStateAction<Iscript[]>>;
}

export const ScriptsContext = createContext<IscriptsContext>({
  scripts: [],
  setScripts: () => {}
})

export const useScriptsContext = () => {
  return useContext(ScriptsContext)
}

interface Iprops {
  children: React.ReactNode
}

export const AuthorizationScriptsContext = ({ children }:Iprops) => {
  const [scripts, setScripts] = useState<Iscript[]>([]);

  return (
    <ScriptsContext.Provider value={{
      scripts,
      setScripts
    }}>
      {children}
    </ScriptsContext.Provider>
  )
}