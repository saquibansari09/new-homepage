// components/About.js

import React from "react";
import styles from "./about.module.css";
import Button from "@/components/Button/Button";
import CountUp from "react-countup";
import Image from "next/image";
import { FaSmile, FaProjectDiagram, FaClock, FaCoffee } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import ScrollAnimation from "../scrollanimation/ScrollAnimation";

const h1Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const pVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
};

const imageSlideInVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, type: "spring" } },
};

const counterVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, type: "spring" } },
};

const About = () => {
  return (
    <div className={styles.container}>
      <ScrollAnimation>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={h1Variants}
          className={styles.title}
        >
          About Us
        </motion.h1>
      </ScrollAnimation>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pVariants}
        className={styles.textContainer}
      >
        <div className={styles.item}>
          <div className={styles.desc}>
            <ScrollAnimation variants={pVariants}>
              <div>
                <p style={{ marginBottom: "20px" }}>
                  We are Akeshya, a firm that specializes in web design and
                  marketing. We help transform ideas into reality with a team of
                  passionate graphic designers, web developers, and seasoned
                  marketing advisors.
                </p>
                <p className="iconText" style={{ marginBottom: "10px" }}>
                  <IoCheckmarkDoneOutline />
                  We started with a simple idea: do what is best for the client.
                </p>
                <p className="iconText" style={{ marginBottom: "10px" }}>
                  <IoCheckmarkDoneOutline />
                  We started with a simple idea: do what is best for the client.
                </p>
                <p className="iconText" style={{ marginBottom: "10px" }}>
                  <IoCheckmarkDoneOutline />
                  We started with a simple idea: do what is best for the client.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation variants={pVariants}>
              <div>
                <p>
                  We re professional, but we re also friendly, and we ll always
                  pay attention to your concerns. We expect to work with
                  innovative people that have an open mind and are dedicated to
                  making every idea a reality. We want to hear from you if you
                  re interested in SEO, have Web Development ideas, or require a
                  graphic designer who can match your goals.
                </p>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  className={styles.item}
                >
                  <Button url="/services" text="Learn More" />
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </motion.div>
      <div className={styles.extraContainer}>
        <ScrollAnimation variants={imageSlideInVariants}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageSlideInVariants}
            className={styles.imageContainer}
          >
            <Image
              width={700}
              height={700}
              src="/counts-img.svg"
              alt="About Us"
              className={styles.image}
            />
          </motion.div>
        </ScrollAnimation>
        <ScrollAnimation variants={counterVariants}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={counterVariants}
            className={styles.counterContainer}
          >
            <div className={styles.counter}>
              <div className={styles.counterItem}>
                <FaProjectDiagram className={styles.icon} />
                <div>
                  <CountUp
                    className={styles.countUp}
                    end={3835039}
                    duration={5}
                  />
                  <p>
                    <strong>Organic Reach </strong> (Global)
                  </p>
                </div>
              </div>
              <div className={styles.counterItem}>
                <FaSmile className={styles.icon} />
                <div>
                  <CountUp className={styles.countUp} end={85} duration={5} />
                  <p>Campaigns</p>
                </div>
              </div>
            </div>
            <div className={styles.counter}>
              <div className={styles.counterItem}>
                <FaClock className={styles.icon} />
                <div>
                  <CountUp
                    className={styles.countUp}
                    end={14081}
                    duration={5}
                  />
                  <p>
                    <strong>Watch Hours </strong>
                  </p>
                </div>
              </div>
              <div className={styles.counterItem}>
                <FaCoffee className={styles.icon} />
                <div>
                  <CountUp className={styles.countUp} end={17} duration={5} />
                  <p>
                    <strong>Excellent CTR % </strong>(Asia)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;
