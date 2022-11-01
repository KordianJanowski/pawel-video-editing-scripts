import { useAuthorizationContext } from '../contexts';
import { IpasswordForm } from '../types/interfaces';

const usePasswordAuth = () => {
  const { setIsAuthorized } = useAuthorizationContext()
  const initialValues: IpasswordForm = {
    password: ''
  };

  const handleSubmit = (values:IpasswordForm) => {
    if(values.password === '1') setIsAuthorized(true)
  }

  return {
    initialValues,
    handleSubmit
  }
}

export default usePasswordAuth;