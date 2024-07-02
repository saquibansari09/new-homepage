"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import ScrollAnimation from "../scrollanimation/ScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the form
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      // Set errors
      setErrors(validationErrors);
    }
  };

  return (
    <ScrollAnimation
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.title}>CONTACT US</h1>
        <div className={styles.content}>
          <div className={styles.column}>
            <h2>Akeshya</h2>
            <p>
              Designers, developers & marketeers capable of delivering solutions
              according to your needs,
            </p>
          </div>
          <div className={styles.column}>
            <div className={styles.iconText}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p>
                26-2-789, 7th street, Jyothi Nagar,
                <br /> Nellore, Andhra Pradesh 524004
              </p>
            </div>
            <div className={styles.iconText}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <p>Email: info@akeshya.com</p>
            </div>
            <div className={styles.iconText}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <p>Phone: +91 94942 40922</p>
            </div>
          </div>
          <div className={styles.column}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className={styles.input}
                value={formData.subject}
                onChange={handleChange}
                required
              />
              {errors.subject && (
                <p className={styles.error}>{errors.subject}</p>
              )}
              <textarea
                className={styles.textArea}
                name="message"
                placeholder="Message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
              <button className={styles.button}>Send Message</button>
            </form>
          </div>
        </div>
      </motion.div>
    </ScrollAnimation>
  );
};

export default Contact;
