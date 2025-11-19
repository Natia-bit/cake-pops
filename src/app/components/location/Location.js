import styles from "./Location.module.css";
import MainTitle from "../common/MainTitle";

export default function Location({ id }) {
  return (
    <section id={id} className={styles.container}>
      <MainTitle title={"Location"} />

      <div className={styles.text}>
        <p>Collection from Muizenberg.</p>
        <p>Delivery options available in Cape Town.</p>
      </div>
    </section>
  );
}
