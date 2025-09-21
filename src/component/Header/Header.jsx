import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigate = useNavigate();
  const [showMarquee, setShowMarquee] = React.useState(true);
  return (
    <header className={`header ${isMenuOpen ? "nav-open" : ""}`} data-header style={{padding: "0.5rem 0 0.5rem 0"}}>
      {showMarquee && (
        <div style={{ width: "100%", background: "linear-gradient(90deg,#2ec4b6 0%,#377dff 100%)", color: "#fff", padding: "0.7rem 0", fontWeight: 600, fontSize: "1.15rem", letterSpacing: "1px", overflow: "hidden", position: "relative", zIndex: 101 }}>
          <div style={{ display: "flex", alignItems: "center", width: "100%", whiteSpace: "nowrap", animation: "marquee 32s linear infinite" }}>
            <span style={{ marginRight: "2.5rem", fontSize: "1.2rem", fontWeight: 700, color: "#ffd580" }}>Industry Ready</span>
            <span style={{ marginRight: "2.5rem" }}>🚀 Logic Junior Test Series Now Live!</span>
            <span style={{ marginRight: "2.5rem" }}>💡 Upskill with Real-World Practice Sets</span>
            <span style={{ marginRight: "2.5rem" }}>🎓 Trusted by Top Educators</span>
            <span style={{ marginRight: "2.5rem" }}>📈 Track Your Progress Instantly</span>
          </div>
          <button
            style={{
              position: "absolute",
              right: 24,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 42,
              height: 42,
              fontWeight: 700,
              fontSize: "2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.2s"
            }}
            aria-label="Dismiss industry updates"
            title="Dismiss industry updates"
            onClick={() => {
              setShowMarquee(false);
            }}
            onMouseOver={e => {
              e.currentTarget.style.color = "#111";
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = "#fff";
            }}
          >
            <span style={{fontWeight:700, fontSize:"2rem", lineHeight:"1"}} aria-hidden="true">×</span>
          </button>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}</style>
        </div>
      )}
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Link to="/" className="logo">
            <motion.img
              src="/assets/images/logo.svg"
              width="162"
              height="50"
              alt="EduWeb logo"
              whileHover={{ scale: 1.08, rotate: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </Link>
        </motion.div>

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
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/courses", label: "Courses" },
              // { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((item, idx) => (
              <motion.li
                className="navbar-item"
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                whileHover={{ scale: 1.08, x: 8, color: "#2ec4b6" }}
              >
                <Link
                  to={item.to}
                  className="navbar-link"
                  style={{ fontSize: '1.35rem', padding: '0.7rem 1.2rem' }}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <motion.button
            className="btn has-before"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.08, backgroundColor: "#2ec4b6", color: "#fff" }}
            whileTap={{ scale: 0.96, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="span">Book a FREE DEMO</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </motion.button>
          <motion.button
            className="header-action-btn"
            aria-label="open menu"
            onClick={toggleMenu}
            whileHover={{ scale: 1.15, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.93, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ion-icon
              name={isMenuOpen ? "close-outline" : "menu-outline"}
              aria-hidden="true"
            ></ion-icon>
          </motion.button>
        </div>
        {isMenuOpen && (
          <div className="overlay" onClick={toggleMenu} data-overlay></div>
        )}
      </div>
    </header>
  );
}

export default Header;
