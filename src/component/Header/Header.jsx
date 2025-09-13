import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigate = useNavigate();
  return (
    <header className={`header ${isMenuOpen ? "nav-open" : ""}`} data-header>
      <div className="container">
        <Link to="/" className="logo">
          <img
            src="/assets/images/logo.svg"
            width="162"
            height="50"
            alt="EduWeb logo"
          />
        </Link>

        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar>
          <div className="wrapper">
            <Link to="/" className="logo">
              <img
                src="/assets/images/logo.svg"
                width="162"
                height="50"
                alt="EduWeb logo"
              />
            </Link>
            <button
              className="nav-close-btn"
              aria-label="close menu"
              onClick={toggleMenu}
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link" style={{fontSize: '1.35rem', padding: '0.7rem 1.2rem'}} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link" style={{fontSize: '1.35rem', padding: '0.7rem 1.2rem'}} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/courses" className="navbar-link" style={{fontSize: '1.35rem', padding: '0.7rem 1.2rem'}} onClick={toggleMenu}>
                Courses
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/blog" className="navbar-link" style={{fontSize: '1.35rem', padding: '0.7rem 1.2rem'}} onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link" style={{fontSize: '1.35rem', padding: '0.7rem 1.2rem'}} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button
            className="btn has-before"
            onClick={() => navigate("/contact")}
          >
            <span className="span">Book a FREE DEMO</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </button>
          <button
            className="header-action-btn"
            aria-label="open menu"
            onClick={toggleMenu}
          >
            <ion-icon
              name={isMenuOpen ? "close-outline" : "menu-outline"}
              aria-hidden="true"
            ></ion-icon>
          </button>
        </div>
        {isMenuOpen && (
          <div className="overlay" onClick={toggleMenu} data-overlay></div>
        )}
      </div>
    </header>
  );
}

export default Header;
