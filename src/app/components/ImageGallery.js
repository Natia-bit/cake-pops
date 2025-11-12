"use client";

import { useState } from "react";
import styles from "./ImageGallery.module.css";

const images = [
  "/cake-pops/flower.jpeg",
  "/cake-pops/blue-and-orange-flowers.png",
  "/cake-pops/springtime-one.png",
  "/cake-pops/polka-dot.png",
];

export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={styles.galleryContainer}>
      {images.map((src, index) => (
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
