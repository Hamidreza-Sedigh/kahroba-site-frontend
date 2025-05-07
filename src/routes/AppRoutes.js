import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import NewsDetailPage from '../pages/NewsDetailPage'; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} /> {/* ← مسیر داینامیک */}

    </Routes>
  );
};

export default AppRoutes;
