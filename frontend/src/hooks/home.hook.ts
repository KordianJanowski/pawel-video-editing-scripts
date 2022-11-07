import { useMutation, useQuery } from '@apollo/client';
import  { useEffect, useState } from 'react';
import { GET_SCRIPTS } from '../api/queries';
import { Iscript, IscriptQueryData } from '../types/interfaces';
import { useScriptsContext } from '../contexts';
import { DELETE_SCRIPT } from '../api/mutations';

const useHome = () => {
  const { data, loading } = useQuery(GET_SCRIPTS)
  const [displayScriptAddModal, setDisplayScriptAddModal] = useState<boolean>(false)
  const [displayConfirmDeleteModal, setDisplayConfirmDeleteModal] = useState<boolean>(false)
  const [scriptIdToDelete, setScriptIdToDelete] = useState<string>('')
  const { setScripts } = useScriptsContext()
  const [deleteScriptMutation] = useMutation(DELETE_SCRIPT)

  useEffect(() => {
    if(loading) return

    const scriptsAttributesValue:Iscript[] = data.scripts.data.map((script:IscriptQueryData) => {
      return {
        ...script.attributes,
        id: script.id
      }
    })
    setScripts(scriptsAttributesValue)
  }, [loading]);

  const deleteScript = (scriptId:string) => {
    if(!scriptId || scriptId.trim() === '') return
    deleteScriptMutation({
      variables: {
        scriptId: scriptId
      }
    })
    setScripts(scripts => scripts.filter(script => script.id !== scriptId))
  }

  return {
    loading,
    displayScriptAddModal,
    setDisplayScriptAddModal,
    setDisplayConfirmDeleteModal,
    displayConfirmDeleteModal,
    deleteScript,
    scriptIdToDelete,
    setScriptIdToDelete
  }
}

export default useHome;