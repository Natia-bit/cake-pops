import Image from "next/image";

export default function ThreeCakePops({ marginTop = 2, marginBottom = 4 }) {
  return (
    <div
      style={{
        marginTop: `${marginTop}rem`,
        marginBottom: `${marginBottom}rem`,
      }}
    >
      <Image
        src="./cake-pops-outlines/cakePop1.svg"
        alt="Cake Pop"
        width={80}
        height={80}
      />
      <Image
        src="./cake-pops-outlines/cakePop2.svg"
        alt="Cake Pop"
        width={80}
        height={80}
      />
      <Image
        src="./cake-pops-outlines/cakePop3.svg"
        alt="Cake Pop"
        width={80}
        height={80}
      />
    </div>
  );
}
