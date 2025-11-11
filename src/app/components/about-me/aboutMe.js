import MainTitle from "../common/MainTitle";
import SectionCard from "../common/SectionCard";
import ThreeCakePops from "../common/ThreeCakePops";
import TwoColumnSection from "../common/TwoColumnSection";
import styles from "./aboutMe.module.css";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <TwoColumnSection
        sectionLeft={
          <div className={styles.context}>
            <div className={styles.title}>
              <SectionCard title={"About Me"} />
              <ThreeCakePops />
            </div>

            <div className={styles.text}>
              <p>
                My cake pops are the prettiest little party favours you&apos;ve
                ever seen! But watch out—they&apos;re also delicious! I make
                these tiny, perfect delights for all your big events: birthdays,
                weddings, corporate galas, and everything in between.
              </p>
            </div>
          </div>
        }
        sectionRight={
          <div className={styles.imageWrapper}>
            <Image
              src="/./cake-pops/baby-feet.jpeg"
              alt="cake pops"
              width={3000}
              height={2000}
              className={styles.image}
            ></Image>
          </div>
        }
      ></TwoColumnSection>
    </div>
  );
}
