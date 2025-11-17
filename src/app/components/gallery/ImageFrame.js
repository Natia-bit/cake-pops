import styles from "./ImageFrame.module.css";
import Image from "next/image";

export default function ImageFrame({ data }) {
  return (
    <section className={styles.container}>
      {data.map((src, index) => (
        <div className={styles.imageItem} key={index}>
          <Image
            src={src}
            alt="Image"
            // width={300}
            // height={400}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </section>
  );
}
