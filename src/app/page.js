import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "./components/about-me/AboutMe";
import Products from "./components/products/Products";
import Product from "./components/products/Product";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AboutMe />
        <Products />
        <Product />
      </main>
    </div>
  );
}
