import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment-jalaali';

const currentDate = moment().format('jYYYY/jMM/jDD');

const Header = () => {
  return (
    <Navbar color="light" light expand="md" className="shadow-sm mb-4" dir="rtl">
      <Container fluid>
        <NavbarBrand tag={Link} to="/" className="fw-bold fs-4">
          وب‌سایت خبری من
        </NavbarBrand>

        <Nav className="me-4" navbar>
          <NavItem>
            <NavLink tag={Link} to="/category/سیاسی">سیاسی</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/category/ورزشی">ورزشی</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/category/اقتصادی">اقتصادی</NavLink>
          </NavItem>
        </Nav>

        <span className="text-muted fs-6 mt-1">{`تاریخ امروز: ${currentDate}`}</span>

      </Container>
    </Navbar>
  );
};

export default Header;
