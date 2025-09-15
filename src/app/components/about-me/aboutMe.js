import MainTitle from "../common/MainTitle";
import SectionCard from "../common/SectionCard";
import styles from "./aboutMe.module.css";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <SectionCard title={"About Me"} />
      <Image
        src="./cake-pops/cakePop1.svg"
        alt="Cake Pop"
        width={65}
        height={65}
      />
      <Image
        src="./cake-pops/cakePop2.svg"
        alt="Cake Pop"
        width={65}
        height={65}
      />
      <Image
        src="./cake-pops/cakePop3.svg"
        alt="Cake Pop"
        width={65}
        height={65}
      />
      <div>
        <p>Hi I am Leanne,</p>
        <p>
          God First | Wife to Matt O&apos;Kelly | Mother to Ava and Blair 💗
        </p>
      </div>
    </div>
  );
}
