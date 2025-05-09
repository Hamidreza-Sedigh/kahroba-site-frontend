import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import NewsDetailPage from '../pages/NewsDetailPage'; 
import CategoryPage from '../pages/CategoryPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />


    </Routes>
  );
};

export default AppRoutes;
