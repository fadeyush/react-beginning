import React from 'react';
import Posts from './pages/Posts';
import About from './pages/About';

import "../src/styles/App.css";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <div className='navbar'>
        <div className='navbar__wrapper'>
            <Link to='/about'>Главная страница</Link>    
            <Link to='/post'>Посты</Link>
        </div>
      </div>
      <Routes>
        <Route path="/post" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
