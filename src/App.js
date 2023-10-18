import React from 'react';
import Posts from './pages/Posts';
import About from './pages/About';

import "../src/styles/App.css";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/post" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Navigate to="/post" replace />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
