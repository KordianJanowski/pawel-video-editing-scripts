import { useMutation } from "@apollo/client";
import { ADD_SCRIPT } from "../api/mutations";
import { useScriptsContext } from "../contexts";
import { Iscript } from "../types/interfaces";

interface Iprops {
  setDisplayScriptAddModal: React.Dispatch<React.SetStateAction<boolean>>
}

const useAddScriptModal = ({ setDisplayScriptAddModal }:Iprops) => {
  const [addScriptMutation] = useMutation(ADD_SCRIPT)
  const { setScripts } = useScriptsContext()

  const initialValues:Iscript = {
    code: '',
    title: ''
  }

  const addScript = async (values:Iscript) => {
    await addScriptMutation({
      variables: {
        scriptTitle: values.title,
        scriptCode: values.code
      }
    }).then(res => {
      const addedScript:Iscript = res.data.createScript.data.attributes
      console.log(addedScript)

      setScripts(scripts => [...scripts, addedScript])
      setDisplayScriptAddModal(false)
    })
  }

  return {
    initialValues,
    addScript
  }
}

export default useAddScriptModal;