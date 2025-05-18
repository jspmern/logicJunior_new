import React from "react";
function Hero() {
  return (
    <section
      className="section hero has-bg-image"
      id="home"
      aria-label="home"
      style={{ backgroundImage: "url('/assets/images/hero-bg.svg')" }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 section-title">
            Let's  Create Future Ready Kids With <span className="span">Logic Junior</span>
          </h1>

          <p className="hero-text">
            Discover thousands of fun and interactive learning activities to
            support your child&#39;s growth and learning process.
          </p>

          <a href="#" className="btn has-before fade-in-delay-2">
            <span className="span">Find courses</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>
        </div>

        <figure className="hero-banner">
          <div
            className="img-holder one zoom-in-delay-1 fade-in"
            style={{ "--width": 270, "--height": 300 }}
          >
            <img
              src="/assets/images/hero-banner-1.jpg"
              width="270"
              height="300"
              alt="hero banner"
              className="img-cover"
            />
          </div>

          <div
            className="img-holder two zoom-in-delay-2 fade-in"
            style={{ "--width": 240, "--height": 370 }}
          >
            <img
              src="/assets/images/hero-banner-2.jpg"
              width="240"
              height="370"
              alt="hero banner"
              className="img-cover"
            />
          </div>

          <img
            src="/assets/images/hero-shape-1.svg"
            width="380"
            height="190"
            alt=""
            className="shape hero-shape-1 fade-in-delay-3 "
            style={{ animation: "bounce 2.5s infinite" }}
          />

          <img
            src="/assets/images/hero-shape-2.png"
            width="622"
            height="551"
            alt=""
            className="shape hero-shape-2 fade-in-delay-4"
          />
        </figure>
      </div>
    </section>

  );
}

export default Hero;
