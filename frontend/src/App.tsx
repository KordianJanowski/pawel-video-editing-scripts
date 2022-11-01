import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages';
import { Layout } from './components';
import { AuthorizationContextProvider } from './contexts/AuthorizationContext';
import { AuthorizationScriptsContext } from './contexts/ScriptsContext';

const App: React.FC = () => {

  return (
    <AuthorizationContextProvider>
      <AuthorizationScriptsContext>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </AuthorizationScriptsContext>
    </AuthorizationContextProvider>
  )
}

export default App;