import React, { useContext } from 'react';
import cl from './Navbar.module.css';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../context';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = event => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className={cl.navbar}>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
        <div className={cl.navbar__wrapper}>
            <Link to='/about'>Главная страница</Link>    
            <Link to='/posts'>Посты</Link>
        </div>
      </div>
    );
};

export default Navbar;