import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const categories = ['سیاسی', 'اقتصادی', 'ورزشی', 'فرهنگی', 'فناوری'];

const CategoryMenu = () => {
  return (
    <Nav className="category-menu mb-4 justify-content-center" pills>
      {categories.map((cat) => (
        <NavItem key={cat}>
          <NavLink tag={Link} to={`/category/${cat}`} className="text-dark">
            {cat}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default CategoryMenu;
