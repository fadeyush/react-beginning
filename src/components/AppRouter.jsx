import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRouter, publicRouter } from '../router/routs';
import { AuthContext } from './UI/context';
import MyLoader from './UI/loader/MyLoader';

const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);
    console.debug(isLoading)

    if (isLoading) {
        return <MyLoader/>
    }

    return (
        isAuth
        ?
        <Routes>
            {privateRouter.map(route =>
                <Route
                    key={route.path}
                    element={<route.element/>}
                    path={route.path}
                    exact={route.exact}
                />
            )}
            <Route path="/*" element={<Navigate to="/posts" replace />} />
        </Routes>
        :
        <Routes>
            {publicRouter.map(route =>
                <Route
                    key={route.path}
                    element={<route.element/>}
                    path={route.path}
                    exact={route.exact}
                />
            )}
            <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default AppRouter;