import React from 'react';
import PasswordAuth from '../password-auth';
import { useAuthorizationContext } from '../../contexts';


interface IProps {
  children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
  const { isAuthorized } = useAuthorizationContext()

  return (
    <>
      {
        isAuthorized ?
          <div className='flex flex-col min-h-screen text-white bg-gray-800'>
            {children}
          </div>
        :
          <PasswordAuth />
      }
    </>
  )
}

export default Layout;