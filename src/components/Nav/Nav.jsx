import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from '../../assets/SKILLNET LOGO 13.png'

const Nav = () => {
  return (
    <div>
       <nav className="Nav">
      <img className="NavLogo" src={logo} alt="" />
      <ul className="Navul">
        <li>
          <Link className="Nav-hover" to="/">Home</Link>
        </li>
        <li>
          <Link className="Nav-hover" to="/about">About</Link>
        </li>
        <li className="Dropdown">
          <span className="Nav-hover">Services</span>
          <ul className="Dropdown-content">
            <li>
              <Link to="/engineering">Engineering</Link>
            </li>
            <li>
              <Link to="/logistics">Logistics</Link>
            </li>
            <li>
              <Link to="/tech">Tech</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="Nav-hover" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Nav;
