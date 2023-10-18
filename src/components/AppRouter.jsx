import React from 'react';
import Posts from '../pages/Posts';
import About from '../pages/About';
import Error from '../pages/Error';
import { Route, Routes, Navigate } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/post" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route path="/*" element={<Navigate to="/error" replace />} />
      </Routes>
    );
};

export default AppRouter;