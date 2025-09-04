import SocialMediaCard from "../common/SocialMediaCard";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.heading}>
        <p>Find me!</p>
      </div>

      <div className={styles.socialMedia}>
        <SocialMediaCard
          staticIcon="/social-media/whatsapp.png"
          animatedIcon="/social-media/whatsapp-color.png"
          link="https://wa.me/+27737953918?text=Hi%20there,%20I'm%20interested%20in%20your%20services."
        ></SocialMediaCard>

        <SocialMediaCard
          staticIcon="/social-media/instagram.png"
          animatedIcon="/social-media/instagram-color.png"
          link="https://www.instagram.com/leanneamyokelly/?igsh=bXpwaXM1cmZ2NW4y&utm_source=qr#"
        ></SocialMediaCard>

        <SocialMediaCard
          staticIcon="/social-media/gmail.png"
          animatedIcon="/social-media/gmail-color.png"
          link="mailto:natia.natisvili@gmail.com"
        ></SocialMediaCard>
      </div>
      <div className={styles.citing}>
        <p>
          Designed by:
          <a
            href="https://natia-natisvili.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Natia Natisvili
          </a>
        </p>
      </div>
    </footer>
  );
}
