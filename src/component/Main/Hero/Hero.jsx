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

          <a href="#" className="btn has-before">
            <span className="span">Find courses</span>
            {/* Replace with your icon component as needed */}
            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
            {/* Or, if using React icons: <IonIcon icon={arrowForwardOutline} aria-hidden="true" /> */}
          </a>
        </div>

        <figure className="hero-banner">
          <div
            className="img-holder one"
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
            className="img-holder two"
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
            className="shape hero-shape-1"
          />

          <img
            src="/assets/images/hero-shape-2.png"
            width="622"
            height="551"
            alt=""
            className="shape hero-shape-2"
          />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
