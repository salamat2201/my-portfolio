import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Meirman Sarsenbay
        </NavLink>
        <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/#about">
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/#skills">
                Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/#services">
                Services
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/#qualification">
                Qualification
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/#testimonials">
                Testimonials
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/#contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
