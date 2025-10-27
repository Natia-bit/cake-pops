import styles from "./PriceCard.module.css";
import PriceList from "./common/PriceList";
import CakePop from "../../../public/cake-pops-outlines/cakePop1.svg";
import Image from "next/image";

export default function PriceCard({ title, data, imageUrl, imageAlt }) {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.banner}>
        <Image
          src={imageUrl}
          alt={imageAlt || `${title} banner`}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      {/* <h2 className={styles.title}>{title}</h2> */}

      <PriceList data={data} className={styles.dataTable}></PriceList>
    </div>
  );
}
