import styles from "./PriceCard.module.css";
import PriceList from "./common/PriceList";

export default function PriceCard({ title, data }) {
  return (
    <div className={styles.cardContainer}>
      <h2>{title}</h2>

      <PriceList title={"Standard"} data={data}></PriceList>
    </div>
  );
}
