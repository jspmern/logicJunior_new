import React from "react";
import IQGames from "./IQGames/IQGames";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url('/assets/images/footer-bg.png')" }}
    >
      <div className="footer-top section">
        <div className="container grid-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div className="footer-brand" style={{width:"350px"}}>
            <Link to="/" className="logo">
              {/* <img
                src="/assets/images/logo.svg"
                width="162"
                height="50"
                alt="Logic Junior logo"
              /> */}
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
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <ul className="footer-list" style={{ minWidth: '160px' }}>
              <li>
                <p className="footer-list-title">Online Platform</p>
              </li>
              <li>
                <Link to="/about" className="footer-link">About</Link>
              </li>
              <li>
                <Link to="/courses" className="footer-link">Courses</Link>
              </li>
            </ul>
            <ul className="footer-list" style={{ minWidth: '160px' }}>
              <li>
                <p className="footer-list-title">Links</p>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
              <li>
                <Link to="/testseries" className="footer-link" style={{ color: "#2ec4b6", textDecoration: "none", fontSize: "1.15rem", marginBottom: "0.7rem", display: "block", position: "relative", fontWeight: "600" }}>
                  Test Series
                  <span style={{
                    position: "absolute",
                    left: 0,
                    bottom: -2,
                    width: "100%",
                    height: "3px",
                    background: "linear-gradient(90deg,#2ec4b6,#377dff)",
                    borderRadius: "2px",
                    animation: "footer-underline 1.2s infinite alternate"
                  }}></span>
                </Link>
              </li>
            </ul>
            <ul className="footer-list" style={{ minWidth: '160px' }}>
              <li>
                <p className="footer-list-title">Games</p>
              </li>
              <li>
                <Link to="/games/puzzle" className="footer-link" style={{ color: "#ee0979", fontWeight: "bold" }}>
                  Sliding Puzzle
                </Link>
              </li>
            </ul>
          </div>
          <style>{`
            @keyframes footer-underline {
              0% { width: 0; opacity: 0.5; }
              100% { width: 100%; opacity: 1; }
            }
          `}</style>
          <div className="footer-list" style={{position:"relative",top:"-30px"}}>
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
              <li>
                <a href="https://www.linkedin.com/company/logic-junior/" className="social-link" target="_blank" rel="noopener noreferrer" >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://wa.me/918539008051" className="social-link" target="_blank" rel="noopener noreferrer"  >
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div> {/* Close flex container */}
      </div> {/* Close .footer-top section */}
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
