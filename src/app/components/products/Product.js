import styles from "./Product.module.css";

import SectionCard from "../common/SectionCard";
import ThreeCakePops from "../common/ThreeCakePops";
import PriceCard from "../PriceCard";
import MainTitle from "../common/MainTitle";

const standardPrice = [
  { name: "Small", qt: 15, standard: 225, deluxe: 300 },
  { name: "Medium", qt: 25, standard: 350, deluxe: 475 },
  { name: "Large", qt: 50, standard: 650, deluxe: 900 },
];

const fancyPrice = [
  { name: "Small", qt: 15, standard: 300, deluxe: 375 },
  { name: "Medium", qt: 25, standard: 475, deluxe: 600 },
  { name: "Large", qt: 50, standard: 900, deluxe: 1150 },
];

export default function Product() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainTitle title={"Products"} />
      </div>

      <div className={styles.priceWapper}>
        <PriceCard
          title={"Standard"}
          data={standardPrice}
          imageUrl={"/products/d-l-samuels-RgaIk9gGa8c-unsplash.jpg"}
          imageAlt={"Standard Banner"}
        ></PriceCard>
        <PriceCard
          title={"Fancy"}
          data={fancyPrice}
          imageUrl={"/products/tai-s-captures-Dl09VLx2JqM-unsplash.jpg"}
          imageAlt={"Fancy Banner"}
        ></PriceCard>
      </div>

      <div className={styles.contextWrapper}>
        <div className={styles.text}>
          <p>
            All Vanilla Cake Pops have a chocolate coating, which you can fully
            customize! Choose your coating color, add shimmer and sprinkles in
            the colors you want. With the Fancy option you can choose a
            decoravtive desing, based on your event&apos;s theme.
          </p>

          <p>
            <span>*</span> The Deluxe option includes packaging, featuring
            individual cake pops that are wrapped and have a sticker
          </p>
          <p>
            If your order exceeds 50 cake pops, I&apos;d be happy to create a
            custom quote for you. Please contact me to get started!
          </p>
          <p>
            I love custom projects! If you have a specific idea or a design in
            mind, reach out and let&apos;s collaborate to create something
            unique
          </p>
        </div>

        <button>Dowload price list</button>
      </div>
    </div>
  );
}
