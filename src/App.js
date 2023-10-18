import React from 'react';
import Posts from './pages/Posts';
import About from './pages/About';

import "../src/styles/App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
