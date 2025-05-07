import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* در آینده: <Route path="/news/:id" element={<NewsDetailPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
