import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment-jalaali';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const currentDate = moment().format('jYYYY/jMM/jDD');

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" className="header shadow-sm mb-3" light dir="rtl">
      <Container fluid>
        <div className="d-flex flex-column w-100">
          <div className="d-flex justify-content-between align-items-center px-2">
            <NavbarBrand tag={Link} to="/" className="fw-bold navbar-brand m-0">
              <FontAwesomeIcon icon={faNewspaper} className="me-2" />
              وب‌سایت خبری من
            </NavbarBrand>

            <span className="text-muted fs-6">{`${currentDate}`}</span>

            <NavbarToggler onClick={toggle} />
          </div>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mt-2 mt-md-0 justify-content-md-start justify-content-center navbar-nav" navbar>
              <NavItem>
                <NavLink tag={Link} to="/category/سیاسی">سیاسی</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/category/ورزشی">ورزشی</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/category/اقتصادی">اقتصادی</NavLink>
              </NavItem>
              {/* لینک‌های بیشتر را اینجا اضافه کن */}
            </Nav>
          </Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
