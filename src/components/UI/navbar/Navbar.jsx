import React from 'react';
import cl from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={cl.navbar}>
        <div className={cl.navbar__wrapper}>
            <Link to='/about'>Главная страница</Link>    
            <Link to='/posts'>Посты</Link>
        </div>
      </div>
    );
};

export default Navbar;