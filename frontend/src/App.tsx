import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages';
import { Layout } from './components';
import { AuthorizationContextProvider } from './contexts/AuthorizationContext';

const App: React.FC = () => {

  return (
    <AuthorizationContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </AuthorizationContextProvider>
  )
}

export default App;