import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
function App() {
  const [Toggle, showMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Meirman Sarsenbay
          </a>
          <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link className="nav__link active-link" to="/">
                  <i className="uil uil-estate nav__icon"></i> Home
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/about">
                  <i className="uil uil-user nav__icon"> </i>About
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/skills">
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/services">
                  <i className="uil uil-briefcase-alt nav__icon"> </i>Services
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  <i className="uil uil-scenery nav__icon"> </i> Portfolio
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/">
                  <i className="uil uil-message nav__icon"> </i> Contact
                </Link>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu((prev) => !prev)}
            >
              {" "}
            </i>
          </div>
          <div
            className="nav__toggle"
            onClick={() => showMenu((prev) => !prev)}
          >
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
      </main>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </>
  );
}

export default App;
