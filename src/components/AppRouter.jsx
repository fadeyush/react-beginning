import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { router } from '../router/routs';

const AppRouter = () => {
    return (
        <Routes>
            {router.map(route =>
                <Route
                    key={route.path}
                    element={<route.element/>}
                    path={route.path}
                    exact={route.exact}
                />
            )}
            <Route path="/*" element={<Navigate to="/posts" replace />} />
      </Routes>
    );
};

export default AppRouter;