import React from 'react';
import Navbar from '../navbar';
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
          <div>
            <Navbar />
            {children}
          </div>
        :
        <PasswordAuth />
      }
    </>
  )
}

export default Layout;