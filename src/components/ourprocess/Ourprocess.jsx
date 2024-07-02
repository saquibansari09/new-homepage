"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./ourprocess.module.css";
import ScrollAnimation from "../scrollanimation/ScrollAnimation";

const processSteps = [
  {
    title: "1. Planning",
    description:
      "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
  },
  {
    title: "2. Design",
    description:
      "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
  },
  {
    title: "3. Development",
    description:
      "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
  },
  {
    title: "4. Marketing",
    description:
      "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
  },
];

const OurProcess = () => {
  return (
    <div className={styles.container}>
      <ScrollAnimation
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Adjusted duration to 0.5 seconds
        }}
      >
        <h1 className={styles.title}>OUR PROCESS</h1>
        <p className={styles.intro}>
          Over the years we ve evolved a tested method for attaining success for
          each one of our clients.
        </p>
      </ScrollAnimation>
      <div className={styles.processList}>
        {processSteps.map((step, index) => (
          <ScrollAnimation
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.2, duration: 0.5 }, // Adjusted duration to 0.5 seconds
              },
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              className={styles.card}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <h2 className={styles.cardTitle}>{step.title}</h2>
              </div>
              <p className={styles.cardDescription}>{step.description}</p>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
