import React, { useState } from 'react';
import "../src/styles/App.css";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './components/UI/context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{
      isAuth, 
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider> 
  );
}

export default App;
