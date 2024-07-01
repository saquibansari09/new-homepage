import React from "react";
import styles from "./feature.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { PiStrategyDuotone } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { RiContactsBook3Line } from "react-icons/ri";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { GrFormSchedule } from "react-icons/gr";
import { FaAdversal } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { GiMusicSpell } from "react-icons/gi";
import { FaRegCalendarAlt, FaCode } from "react-icons/fa";

const processSteps = [
  {
    title: "Web design",
    icon: <FaRegCalendarAlt className={styles.firstIcon} />,
  },
  {
    title: "Development",
    icon: <FaCode className={styles.secondIcon} />,
  },
  {
    title: "Branding",
    icon: <MdOutlineBrandingWatermark className={styles.threeIcon} />,
  },
  {
    title: "Media buying",
    icon: <GiMusicSpell className={styles.fourIcon} />,
  },

  {
    title: "Search engine",
    icon: <IoSearchOutline className={styles.fiveIcon} />,
  },
  {
    title: "Branding strategy",
    icon: <PiStrategyDuotone className={styles.sixIcon} />,
  },
  {
    title: "Local search marketing",
    icon: <IoLocationSharp className={styles.sevenIcon} />,
  },
  {
    title: "Lead Tracking & Management",
    icon: <VscGraph className={styles.eightIcon} />,
  },
  {
    title: "Contact management",
    icon: <RiContactsBook3Line className={styles.nineIcon} />,
  },
  {
    title: "Media management",
    icon: <RiNeteaseCloudMusicLine className={styles.tenIcon} />,
  },
  {
    title: "Social scheduling",
    icon: <GrFormSchedule className={styles.elevenIcon} />,
  },
  {
    title: "Ad retargeting",
    icon: <FaAdversal className={styles.twelveIcon} />,
  },
  // Add more steps as needed
];

const OurProcess = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OUR CORE FEATURES</h1>
      <p className={styles.intro}>
        Akeshya is a forward-thinking and intelligent design firm that is
        technically and creatively capable of transforming your brand into its
        best digital self. Our approach to design and development results in
        compelling, engaging branding and immersive digital experiences that
        provide a value for money.
      </p>
      <div className={styles.processList}>
        {processSteps.map((step, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>{step.icon}</div>
              <h2 className={styles.cardTitle}>{step.title}</h2>
            </div>
            <p className={styles.cardText}>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
