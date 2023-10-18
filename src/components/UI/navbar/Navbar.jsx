import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className='navbar__wrapper'>
            <Link to='/about'>Главная страница</Link>    
            <Link to='/post'>Посты</Link>
        </div>
      </div>
    );
};

export default Navbar;