import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./contact.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import locationIcon from "./assest/location.png";
import emailIcon from "./assest/email.png";
import phoneIcon from "./assest/phone.png";
import shapeImg from "./assest/shape.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (fieldValues = formData) => {
    const newErrors = {};

    if (!fieldValues.name.trim()) newErrors.name = "Name is required";
    if (!fieldValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!fieldValues.phone.trim()) newErrors.phone = "Phone is required";
    if (!fieldValues.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Live remove error
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    // Remove phone error live
    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      toast.success("Message sent successfully! 🎉", { autoClose: 3000 });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. ❌", { autoClose: 3000 });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.contactContainer}>
        <span className={styles.bigCircle}></span>
        <img src={shapeImg} className={styles.square} alt="" />
        <div className={styles.contactFormWrapper}>
          <div className={styles.contactInfo}>
            <h3 className={styles.title}>Let's get in touch</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className={styles.info}>
              <div className={styles.information}>
                <img src={locationIcon} className={styles.icon} alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className={styles.information}>
                <img src={emailIcon} className={styles.icon} alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className={styles.information}>
                <img src={phoneIcon} className={styles.icon} alt="" />
                <p>123-456-789</p>
              </div>
            </div>

            <div className={styles.socialMedia}>
              <p>Connect with us :</p>
              <div className={styles.socialIcons}>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <span className={`${styles.circle} ${styles.one}`}></span>
            <span className={`${styles.circle} ${styles.two}`}></span>

            <form autoComplete="off" onSubmit={handleSubmit}>
              <h3 className={styles.title}>Contact us</h3>

              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="name"
                  className={`${styles.input} ${styles.whitePlaceholder}`}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  style={{ fontSize: "16px" }}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </div>

              <div className={styles.inputContainer}>
                <input
                  type="email"
                  name="email"
                  className={`${styles.input} ${styles.whitePlaceholder}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  style={{ fontSize: "16px" }}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>

              <div className={styles.inputContainer}>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputClass={`${styles.input} ${styles.phoneInput} ${styles.whitePlaceholder}`}
                  buttonClass={styles.noFlag}
                  enableSearch
                  inputProps={{
                    name: "phone",
                    style: { fontSize: "16px", color: "#fff" },
                  }}
                  placeholder="Phone"
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
              </div>

              <div className={`${styles.inputContainer} ${styles.textarea}`}>
                <textarea
                  name="message"
                  className={`${styles.input} ${styles.whitePlaceholder}`}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  style={{ fontSize: "16px" }}
                ></textarea>
                {errors.message && <p className={styles.error}>{errors.message}</p>}
              </div>

              <input type="submit" value="Send" className={styles.contbtn} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
