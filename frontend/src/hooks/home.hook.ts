import { useQuery } from '@apollo/client';
import  { useEffect, useState } from 'react';
import { GET_SCRIPTS } from '../api/queries';
import { Iscript, IscriptAttributes } from '../types/interfaces';

const useHome = () => {
  const { data, loading } = useQuery(GET_SCRIPTS)
  const [scripts, setScripts] = useState<Iscript[]>([]);
  const [displayScriptAddModal, setDisplayScriptAddModal] = useState<boolean>(false)

  useEffect(() => {
    if(loading) return

    const scriptsAttributesValue:Iscript[] = data.scripts.data.map((script:IscriptAttributes) => {
      return script.attributes
    })
    setScripts(scriptsAttributesValue)
  }, [loading]);

  return {
    scripts,
    loading,
    displayScriptAddModal,
    setDisplayScriptAddModal
  }
}

export default useHome;