import React, { useEffect } from "react";
import locationIcon from "./assest/location.png";
import emailIcon from "./assest/email.png";
import phoneIcon from "./assest/phone.png";
import shapeImg from "./assest/shape.png";

const Contact = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    const focusFunc = function () {
      let parent = this.parentNode;
      parent.classList.add("focus");
    };

    const blurFunc = function () {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return (
    <div className="contactContainer">
      <span className="bigCircle"></span>
      <img src={shapeImg} className="square" alt="" />
      <div className="contactFormWrapper">
        <div className="contactInfo">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src={locationIcon} className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src={emailIcon} className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src={phoneIcon} className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="socialMedia">
            <p>Connect with us :</p>
            <div className="socialIcons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="inputContainer">
              <input type="text" name="name" className="input" />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className="inputContainer">
              <input type="email" name="email" className="input" />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="inputContainer">
              <input type="tel" name="phone" className="input" />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="inputContainer textarea">
              <textarea name="message" className="input"></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="contbtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
