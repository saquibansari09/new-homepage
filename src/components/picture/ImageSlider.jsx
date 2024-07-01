"use client";

import React from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  // Array of image filenames
  const imageFilenames = [
    "client-1.png",
    "client-2.png",
    "client-3.png",
    "client-4.png",
    "client-5.png",
    "client-6.png",
  ];

  return (
    <div className={styles.sliderContainer}>
      {imageFilenames.map((filename, index) => (
        <Image
          key={index}
          alt={`Client ${index + 1}`}
          src={`/${filename}`}
          width={80}
          height={80}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
