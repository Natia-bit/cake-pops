import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "./components/about-me/aboutMe";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="about-me">
          <AboutMe></AboutMe>
        </section>
      </main>
    </div>
  );
}
