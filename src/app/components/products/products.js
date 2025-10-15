import PriceList from "../common/PriceList";
import SectionCard from "../common/SectionCard";
import ThreeCakePops from "../common/ThreeCakePops";

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

export default function Products() {
  return (
    <div>
      <SectionCard title={"Products"}></SectionCard>
      <ThreeCakePops></ThreeCakePops>

      <p>
        All Vanilla Cake Pops have a chocolate coating, which you can fully
        customize! Choose your coating color, add shimmer and sprinkles in the
        colors you want. With the Fancy option you can choose a decoravtive
        desing, based on your event&apos;s theme.
      </p>

      <PriceList title={"Standard"} data={standardPrice}></PriceList>
      <PriceList title={"Fancy"} data={standardPrice}></PriceList>

      <p>
        <span>*</span> The Deluxe option includes packaging, featuring
        individual cake pops that are wrapped and have a sticker
      </p>
      <p>
        If your order exceeds 50 cake pops, I&apos;d be happy to create a custom
        quote for you. Please contact me to get started!
      </p>
      <p>
        I love custom projects! If you have a specific idea or a design in mind,
        reach out and let&apos;s collaborate to create something unique
      </p>

      <button>Dowload price list</button>
    </div>
  );
}
