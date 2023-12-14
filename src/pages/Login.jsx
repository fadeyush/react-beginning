import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

const Login = () => {
    return (
        <div>
            <h1>Авторизация</h1>
            <MyInput type='text' placeholder='Введите логин'></MyInput>
            <MyInput type='password' placeholder='Введите пароль'></MyInput>
            <MyButton>Войти</MyButton>
        </div>
    );
};

export default Login;