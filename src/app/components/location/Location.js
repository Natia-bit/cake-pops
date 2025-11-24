import styles from "./Location.module.css";
import MainTitle from "../common/MainTitle";
import TwoColumnSection from "../common/TwoColumnSection";
import Image from "next/image";

export default function Location({ id }) {
  return (
    <section id={id} className={styles.container}>
      <TwoColumnSection
        sectionLeft={
          <div>
            <MainTitle title={"Location"} />

            <div className={styles.text}>
              <p>Collection from Muizenberg.</p>
              <p>Delivery options available in Cape Town.</p>
            </div>
          </div>
        }
        sectionRight={
          <div className={styles.imageWrapper}>
            <Image
              src="/./cake-pops/bluey-and-bingo.jpeg"
              alt="cake pops"
              width={600}
              height={400}
              className={styles.image}
            ></Image>
          </div>
        }
      />
    </section>
  );
}
