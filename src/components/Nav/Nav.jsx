import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import logo from "../../assets/SKILLNET LOGO 13.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="Nav">
        <img className="NavLogo" src={logo} alt="" />
        <div className="menu-icon">
          <Hamburger size={22} rounded toggled={isOpen} toggle={setIsOpen} />
        </div>
        <ul className={`Navul ${isOpen ? "active" : ""}`}>
          <li>
            <Link className="Nav-hover" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="Nav-hover" to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link className="Nav-hover" to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link className="Nav-hover" to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
