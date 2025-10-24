import styles from "./PriceCard.module.css";
import PriceList from "./common/PriceList";
import CakePop from "../../../public/cake-pops-outlines/cakePop1.svg";

export default function PriceCard({ title, data }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.banner}></div>
      <h2>{title}</h2>

      <PriceList title={"Standard"} data={data}></PriceList>
    </div>
  );
}
