"use client";

import { useState } from "react";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ imageData }) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={styles.galleryContainer}>
      {imageData.map((src, index) => (
        <div
          key={index}
          className={`${styles.option} ${
            activeIndex === index ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${src})` }}
          onClick={() => setActiveIndex(index)}
        >
          <div className={styles.shadow}></div>
        </div>
      ))}
    </div>
  );
}
