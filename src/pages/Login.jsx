import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../components/UI/context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true)
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Введите логин'></MyInput>
                <MyInput type='password' placeholder='Введите пароль'></MyInput>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;