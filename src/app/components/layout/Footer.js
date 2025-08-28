import SocialMediaCard from "../common/SocialMediaCard";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>Reach us!</p>

      <div className={styles.socialMedia}>
        <SocialMediaCard
          staticIcon="/social-media/whatsapp.png"
          animatedIcon="/social-media/whatsapp.gif"
          link="https://wa.me/+27737953918?text=Hi%20there,%20I'm%20interested%20in%20your%20services."
        ></SocialMediaCard>

        <SocialMediaCard
          staticIcon="/social-media/whatsapp.png"
          animatedIcon="/social-media/whatsapp.gif"
          link="https://wa.me/+27737953918?text=Hi%20there,%20I'm%20interested%20in%20your%20services."
        ></SocialMediaCard>
        <p>insta</p>
        <p>whatsapp</p>
        <p>email</p>
      </div>
    </footer>
  );
}
