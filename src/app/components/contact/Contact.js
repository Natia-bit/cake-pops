import MainTitle from "../common/MainTitle";
import TwoColumnSection from "../common/TwoColumnSection";
import SocialMediaCard from "../common/SocialMediaCard";
import styles from "./Contact.module.css";
import Image from "next/image";

export default function Contact({ id }) {
  return (
    <section id={id} className={styles.container}>
      <TwoColumnSection
        sectionLeft={
          <div className={styles.imageWrapper}>
            <Image
              src="/./cake-pops/springtime.png"
              alt="cake pops"
              width={800}
              height={400}
              className={styles.image}
            ></Image>
          </div>
        }
        sectionRight={
          <div>
            <MainTitle title={"Contact"} />
            <div className={styles.socialMediaContainer}>
              <div className={styles.socialMediaWrapper}>
                <SocialMediaCard
                  staticIcon="/social-media/whatsapp.png"
                  animatedIcon="/social-media/whatsapp-color.png"
                  link="https://wa.me/+27823137261?text=Hi%20there,%20I'm%20interested%20in%20your%20services."
                ></SocialMediaCard>
                <label>Contact me on WhatsApp.</label>
              </div>

              <div className={styles.socialMediaWrapper}>
                <SocialMediaCard
                  staticIcon="/social-media/instagram.png"
                  animatedIcon="/social-media/instagram-color.png"
                  link="https://www.instagram.com/leanneamyokelly/?igsh=bXpwaXM1cmZ2NW4y&utm_source=qr#"
                ></SocialMediaCard>
                <label>Have a pick and follow me on Instagram.</label>
              </div>

              <div className={styles.socialMediaWrapper}>
                <SocialMediaCard
                  staticIcon="/social-media/gmail.png"
                  animatedIcon="/social-media/gmail-color.png"
                  link="mailto:leanneamyokelly@gmail.com"
                ></SocialMediaCard>
                <label>Email me on leanneamyokelly@gmail.com.</label>
              </div>
            </div>
          </div>
        }
      ></TwoColumnSection>
    </section>
  );
}
