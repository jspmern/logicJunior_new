import React, { useState } from "react";
import "./Header.css"; // Ensure you have the matching CSS

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isMenuOpen ? "nav-open" : ""}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          <img
            src="/assets/images/logo.svg"
            width="162"
            height="50"
            alt="EduWeb logo"
          />
        </a>

        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar>
          <div className="wrapper">
            <a href="#" className="logo">
              <img
                src="/assets/images/logo.svg"
                width="162"
                height="50"
                alt="EduWeb logo"
              />
            </a>

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
              <a href="#home" className="navbar-link" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#courses" className="navbar-link" onClick={toggleMenu}>
                Courses
              </a>
            </li>
            <li className="navbar-item">
              <a href="#blog" className="navbar-link" onClick={toggleMenu}>
                Blog
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#" className="btn has-before">
            <span className="span">Book a FREE DEMO</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>

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
