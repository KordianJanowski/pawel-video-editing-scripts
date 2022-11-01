import { useQuery } from '@apollo/client';
import  { useEffect, useState } from 'react';
import { GET_SCRIPTS } from '../api/queries';
import { Iscript, IscriptAttributes } from '../types/interfaces';
import { useScriptsContext } from '../contexts';

const useHome = () => {
  const { data, loading } = useQuery(GET_SCRIPTS)
  const [displayScriptAddModal, setDisplayScriptAddModal] = useState<boolean>(false)
  const { setScripts } = useScriptsContext()

  useEffect(() => {
    if(loading) return

    const scriptsAttributesValue:Iscript[] = data.scripts.data.map((script:IscriptAttributes) => {
      return script.attributes
    })
    setScripts(scriptsAttributesValue)
  }, [loading]);

  return {
    loading,
    displayScriptAddModal,
    setDisplayScriptAddModal
  }
}

export default useHome;