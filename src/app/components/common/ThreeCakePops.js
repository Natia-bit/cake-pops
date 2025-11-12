import Image from "next/image";

export default function ThreeCakePops() {
  return (
    <div>
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
