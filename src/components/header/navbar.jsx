
import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="items">
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog" >Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact" >Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
