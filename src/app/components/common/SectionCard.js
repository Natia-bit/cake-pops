import MainTitle from "./MainTitle";
import styles from "./SocialMediaCard.module.css";
import Image from "next/image";

export default function SectionCard({ title, children }) {
  return (
    <div className={styles.sectionContainer}>
      <MainTitle className={styles.title} title={title} />
      <div className={styles.text}>{children}</div>
    </div>
  );
}
