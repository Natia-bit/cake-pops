import MainTitle from "../common/MainTitle";
import SectionCard from "../common/SectionCard";
import styles from "./aboutMe.module.css";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <SectionCard title={"About Me"} />
      <div className={styles.cakeIcons}>
        <Image
          src="./cake-pops/cakePop1.svg"
          alt="Cake Pop"
          width={50}
          height={50}
        />
        <Image
          src="./cake-pops/cakePop2.svg"
          alt="Cake Pop"
          width={50}
          height={50}
        />
        <Image
          src="./cake-pops/cakePop3.svg"
          alt="Cake Pop"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.text}>
        <p>Hi I am Leanne,</p>
        <p>
          My cake pops are the prettiest little party favours you&apos;ve ever
          seen! But watch out—they&apos;re also delicious! I make these tiny,
          perfect delights for all your big events: birthdays, weddings,
          corporate galas, and everything in between.
        </p>
      </div>
    </div>
  );
}
