"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero-img.png";
import Button from "@/components/Button/Button";
import Service from "@/components/service/Service";
import OurProcess from "@/components/ourprocess/Ourprocess";
import Feature from "@/components/Feature/feature";
import Contact from "@/components/contact/Contact";
import ImageSlider from "@/components/picture/ImageSlider";
import About from "./about/page";
import { FaArrowUpLong } from "react-icons/fa6";

const h1Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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

const imageBounceVariants = {
  bounce: {
    y: [0, -20, 0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 5,
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  },
};

export default function Home() {
  const controls = useAnimation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    async function sequence() {
      await controls.start("visible");
      controls.start("bounce");
    }
    sequence();

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <motion.h1
            className={styles.title}
            initial="hidden"
            animate="visible"
            variants={h1Variants}
          >
            Grow your business with Akeshya
          </motion.h1>
          <motion.p
            className={styles.desc}
            initial="hidden"
            animate="visible"
            variants={pVariants}
          >
            We are a team of talented website designers, developers & digital
            marketeers
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <Button url="/about" text="Get Started" />
          </motion.div>
        </div>

        <motion.div
          className={styles.item}
          initial="hidden"
          animate={controls}
          variants={imageSlideInVariants}
        >
          <motion.div variants={imageBounceVariants}>
            <Image src={Hero} alt="Hero Image" className={styles.img} />
          </motion.div>
        </motion.div>
      </div>
      <ImageSlider />
      <About />
      <Service />
      <OurProcess />
      <Feature />
      <Contact />
      {showScrollButton && (
        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
          <FaArrowUpLong />
        </button>
      )}
    </>
  );
}
