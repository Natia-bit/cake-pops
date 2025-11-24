import MainTitle from "../common/MainTitle";
import TwoColumnSection from "../common/TwoColumnSection";
import styles from "./Contact.module.css";

export default function Contact({ id }) {
  return (
    <section id={id}>
      <TwoColumnSection
        sectionLeft={<MainTitle title={"Contact"} />}
      ></TwoColumnSection>
    </section>
  );
}
