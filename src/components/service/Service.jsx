import React from "react";
import styles from "./service.module.css";
import {
  FaRegCalendarAlt,
  FaPaintBrush,
  FaCode,
  FaBullhorn,
} from "react-icons/fa";

const processSteps = [
  {
    title: "Planning",
    description:
      "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
    icon: <FaRegCalendarAlt />,
  },

  {
    title: "Design",
    description:
      "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Development",
    description:
      "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    icon: <FaCode />,
  },

  {
    title: "Marketing",
    description:
      "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    icon: <FaBullhorn />,
  },
];

const Service = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SERVICES</h1>
      <p className={styles.intro}>
        Over the years we’ve evolved a tested method for attaining achievement
        for each one of our clients.
      </p>
      <div className={styles.processList}>
        {processSteps.map((step, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{step.icon}</div>
            <h2 className={styles.cardTitle}>{step.title}</h2>
            <p className={styles.cardDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
