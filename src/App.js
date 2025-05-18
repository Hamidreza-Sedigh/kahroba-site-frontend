import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
