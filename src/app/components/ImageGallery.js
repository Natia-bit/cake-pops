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
  const [activeIndex, setActiveIndex] = useState(0);

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

{
  /* <Image
src="/./cake-pops/flower.jpeg"
alt="picture"
width={420}
height={600}
></Image>
<Image
src="/./cake-pops/blue-and-orange-flowers.png"
alt="picture"
width={420}
height={600}
></Image>
<Image
src="/./cake-pops/springtime-one.png"
alt="picture"
width={420}
height={600}
></Image>
<Image
src="/./cake-pops/polka-dot.png"
alt="picture"
width={480}
height={600}
></Image> */
}
