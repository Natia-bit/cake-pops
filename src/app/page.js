import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "./components/about-me/aboutMe";
import Products from "./components/products/products";
import Product from "./components/products/Product";
import Gallery from "./components/gallery/Gallery";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AboutMe id="about-me" />
        <Products id="products" />
        <Product id="product" />
        <Gallery id="gallery" />
      </main>
    </div>
  );
}
