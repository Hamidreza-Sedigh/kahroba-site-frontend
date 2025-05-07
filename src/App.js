import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar color="dark" dark expand="md" className="mb-4">
        <NavbarBrand href="/">وب‌سایت خبری من</NavbarBrand>
      </Navbar>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
