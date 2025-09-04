import Image from "next/image";
import styles from "./SocialMediaCard.module.css";

export default function SocialMediaCard({
  staticIcon,
  animatedIcon,
  imageWidth = 30,
  imageHeight = 30,
  link = "",
}) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialCard}
      >
        <div className={styles.iconWrapper}>
          <Image
            src={staticIcon}
            alt="social static icon"
            width={imageWidth}
            height={imageHeight}
            className={styles.staticIcon}
          />
          <Image
            src={animatedIcon}
            alt="social animated icon"
            width={imageWidth}
            height={imageHeight}
            className={styles.animatedIcon}
          />
        </div>
      </a>
    </div>
  );
}
