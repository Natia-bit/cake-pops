import styles from "./TwoColumnSection.module.css";

export default function TwoColumnSection({
  sectionLeft,
  sectionRight,
  reverse = false,
}) {
  return (
    <section
      className={`${styles.twoColumnSection} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.left}>{sectionLeft}</div>
      <div className={styles.right}>{sectionRight}</div>
    </section>
  );
}
