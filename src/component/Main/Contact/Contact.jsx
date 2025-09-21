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
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

/**
 * Contact component
 * - Social links and contact details updated to match footer:
 *   facebook:  https://www.facebook.com/people/Logic-Junior/61558860847856/
 *   instagram: https://www.instagram.com/logic__junior/
 *   linkedin:  https://www.linkedin.com/company/logic-junior/
 *   whatsapp:  https://wa.me/918539008051
 *
 * Keep axios POST endpoint as you had it (https://logic-junior-email.onrender.com/api/contact)
 */

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
      await axios.post(
        "https://logic-junior-email.onrender.com/api/contact",
        formData
      );
      toast.success("Message sent successfully! 🎉", { autoClose: 3000 });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. ❌", { autoClose: 3000 });
    }
  };

  // Footer / social links (kept DRY here)
  const SOCIAL = {
    facebook:
      "https://www.facebook.com/people/Logic-Junior/61558860847856/",
    instagram: "https://www.instagram.com/logic__junior/",
    linkedin: "https://www.linkedin.com/company/logic-junior/",
    whatsapp: "https://wa.me/918539008051",
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
              Discover thousands of fun and interactive learning activities to
              support your child's growth and learning process.
            </p>

            <div className={styles.info}>
              <div className={styles.information}>
                <img src={locationIcon} className={styles.icon} alt="location" />
                <p>Bengaluru</p>
              </div>
              <div className={styles.information}>
                <img src={emailIcon} className={styles.icon} alt="email" />
                <p>
                  <a
                    href="mailto:info@eduweb.com"
                    className={styles.inlineLink}
                    aria-label="send email to info@eduweb.com"
                  >
                    info@eduweb.com
                  </a>
                </p>
              </div>
              <div className={styles.information}>
                <img src={phoneIcon} className={styles.icon} alt="phone" />
                <p>
                  <a
                    href="tel:+918539008051"
                    className={styles.inlineLink}
                    aria-label="call +91 8539008051"
                  >
                    +91 8539008051
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.socialMedia}>
              <p>Connect with us :</p>
              <div className={styles.socialIcons}>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Logic Junior on Facebook"
                >
                  <FaFacebookF />
                </a>
                {/* kept Twitter icon for visual parity, but link currently omitted.
                    If you want to include a twitter link add it to SOCIAL and update here */}
                {/* <a href="#"><FaTwitter /></a> */}
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Logic Junior on Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Logic Junior on LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Logic Junior on WhatsApp"
                >
                  <FaWhatsapp />
                </a>
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
                  aria-label="Name"
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
                  aria-label="Email"
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
                    "aria-label": "Phone",
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
                  aria-label="Message"
                ></textarea>
                {errors.message && (
                  <p className={styles.error}>{errors.message}</p>
                )}
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
