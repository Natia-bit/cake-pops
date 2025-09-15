import MainTitle from "./MainTitle";
import styles from "./SocialMediaCard.module.css";

export default function SectionCard({ title, children }) {
  return (
    <div>
      <MainTitle title={title} />
      <div className={styles.text}>{children}</div>
    </div>
  );
}
