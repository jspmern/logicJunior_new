import React from "react";
import { getExperienceHandler } from "../../../utils";

function About() {
  let JounaryStart="2020"
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <div
            className="img-holder"
            style={{ "--width": 520, "--height": 370 }}
          >
            <img
              src="/assets/images/about_me.png"
              width="520"
              height="370"
              loading="lazy"
              alt="about banner"
              className="img-cover"
            />
          </div>

          <img
            src="/assets/images/about-shape-1.svg"
            width="360"
            height="420"
            loading="lazy"
            alt=""
            className="shape about-shape-1"
          />

          <img
            src="/assets/images/about-shape-2.svg"
            width="371"
            height="220"
            loading="lazy"
            alt=""
            className="shape about-shape-2"
          />

          <img
            src="/assets/images/about-shape-3.png"
            width="722"
            height="528"
            loading="lazy"
            alt=""
            className="shape about-shape-3"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>

          <h2 className="h2 section-title">
            Over {getExperienceHandler(JounaryStart)} Years in <span className="span">Child-Centered Learning</span>  & Brain Development
          </h2>

          <p className="section-text">
           Transforming how children learn through psychology-backed, interactive methods. Specializing in IQ-building, logical reasoning, and critical thinking for students worldwide.


          </p>

          <ul className="about-list">
            <li className="about-item" style={{marginBottom:0}}>
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Expert Educator & Child Psychologist</span>
            </li>
              <li style={{marginLeft:"35px"}}>
               Blends education with child psychology to create personalized, effective learning experiences.
            </li>
            <li className="about-item" style={{marginBottom:0}}>
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Global Online Learning</span>
            </li>
            <li style={{marginLeft:"35px"}}>
              Over 5000+ students trained from the UK, USA, Australia, China, and more — both online and offline.
            </li>
           <li className="about-item" style={{marginBottom:0}}>
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Skill-Based Growth</span>
            </li>
              <li style={{marginLeft:"35px"}}>
             Workshops and programs designed to boost brain power, prepare for exams like the 11+, and build lifelong problem-solving skills.
            </li>
          </ul>

          <img
            src="/assets/images/about-shape-4.svg"
            width="100"
            height="100"
            loading="lazy"
            alt=""
            className="shape about-shape-4"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
