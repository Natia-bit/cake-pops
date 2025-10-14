import PriceList from "../common/priceList";
import SectionCard from "../common/SectionCard";

const standardPrice = [
  { name: "Small", qt: 15, standard: 225, deluxe: 300 },
  { name: "Medium", qt: 25, standard: 225, deluxe: 300 },
  { name: "Large", qt: 50, standard: 225, deluxe: 300 },
];

export default function Products() {
  return (
    <div>
      <SectionCard title={"Products"}>
        <button>Dowload Menu</button>
      </SectionCard>

      <p>
        All Vanilla Cake Pops have a chocolate coating, which you can fully
        customize! Choose your coating color, add shimmer and sprinkles in the
        colors you want, or let us create a design based on your event&apos;s
        theme.
      </p>

      <PriceList title={"Standard"} data={standardPrice}></PriceList>

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
    </div>
  );
}
