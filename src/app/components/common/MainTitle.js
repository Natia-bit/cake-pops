import styles from "./MainTitle.module.css";

export default function MainTitle({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
}
