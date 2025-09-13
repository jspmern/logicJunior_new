import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url('/assets/images/footer-bg.png')" }}
    >
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img
                src="/assets/images/logo-light.svg"
                width="162"
                height="50"
                alt="Logic Junior logo"
              />
            </Link>
            <p className="footer-brand-text">
              Discover thousands of fun and interactive learning activities to support your child's growth and learning process.
            </p>
            <div className="wrapper">
              <span className="span">Add:</span>
              <address className="address">Bengaluru</address>
            </div>
            <div className="wrapper">
              <span className="span">Call:</span>
              <a href="tel:+918539008051" className="footer-link">
                +91 8539008051
              </a>
            </div>
            <div className="wrapper">
              <span className="span">Email:</span>
              <a href="mailto:info@eduweb.com" className="footer-link">
                info@eduweb.com
              </a>
            </div>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Online Platform</p>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/courses" className="footer-link">
                Courses
              </Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Links</p>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="footer-link">
                Blog
              </Link>
            </li>
          </ul>
          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>
            <ul className="social-list" style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <li>
                <a href="https://www.facebook.com/people/Logic-Junior/61558860847856/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/logic__junior/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p className="copyright" style={{ textAlign: "center", width: "100%" }}>
            Copyright {new Date().getFullYear()} All Rights Reserved by{' '}
            <Link to="/" className="copyright-link">
              logic__junior
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
