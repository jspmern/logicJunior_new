import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.section
      className="section hero hero-fullscreen has-bg-image hero-bg-top"
      id="home"
      aria-label="home"
      style={{ backgroundImage: "url('/assets/images/hero-bg.svg')" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <div className="hero-content">
          <motion.h1
            className="h1 section-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's  Create Future Ready Kids With <span className="span">Logic Junior</span>
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover thousands of fun and interactive learning activities to
            support your child&#39;s growth and learning process. Activating left and right
            brain power for smarter learning
          </motion.p>

          <motion.a
            href="#"
            className="btn has-before fade-in-delay-2"
            whileHover={{ scale: 1.07, boxShadow: "0 4px 24px rgba(46,196,182,0.18)" }}
            whileTap={{ scale: 0.96, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="span">Find courses</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </motion.a>
        </div>

        <figure className="hero-banner">
          <motion.div
            className="img-holder one zoom-in-delay-1 fade-in"
            style={{ "--width": 270, "--height": 300 }}
            initial={{ opacity: 0, scale: 0.8, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/images/hero-banner-1.png"
              width="270"
              height="300"
              alt="hero banner"
              className="img-cover"
            />
          </motion.div>

          <motion.div
            className="img-holder two zoom-in-delay-2 fade-in"
            style={{ "--width": 240, "--height": 370 }}
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/images/hero-banner-2.png"
              width="240"
              height="370"
              alt="hero banner"
              className="img-cover"
            />
          </motion.div>

          <motion.img
            src="/assets/images/hero-shape-1.svg"
            width="380"
            height="190"
            alt=""
            className="shape hero-shape-1 fade-in-delay-3 "
            style={{ animation: "bounce 2.5s infinite" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.img
            src="/assets/images/hero-shape-2.png"
            width="622"
            height="551"
            alt=""
            className="shape hero-shape-2 fade-in-delay-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </figure>
      </div>
    </motion.section>

  );
}

export default Hero;
