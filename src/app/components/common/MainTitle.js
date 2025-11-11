import styles from "./MainTitle.module.css";
import ThreeCakePops from "./ThreeCakePops";

export default function MainTitle({ title }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <ThreeCakePops />
    </div>
  );
}
