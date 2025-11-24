import MainTitle from "../common/MainTitle";
import ImageGallery from "../ImageGallery";
import styles from "./Gallery.module.css";
import ImageFrame from "./ImageFrame";

export default function Gallery({ id }) {
  const data = [
    "/cake-pops/flowers.jpg",
    "/cake-pops/springtime-one.png",
    "/cake-pops/baby-feet-2.jpeg",
    "/cake-pops/green-dino.jpg",
    "/cake-pops/blue-and-orange-flowers.png",
    "/cake-pops/unicorn.jpg",
    "/cake-pops/unicorns-packed.jpg",
    "/cake-pops/unicorn3.jpg",
    "/cake-pops/spiderman-pops.jpg",
    "/cake-pops/spider-man.jpeg",
    "/cake-pops/flower.jpeg",
    "/cake-pops/hello kittie.jpeg",
    "/cake-pops/school.jpeg",
    "/cake-pops/baby-gender.jpg",
    "/cake-pops/polka dot.png",
    "/cake-pops/teeth.jpeg",
  ];

  return (
    <section id={id} className={styles.container}>
      <MainTitle title={"Gallery"} />
      <ImageFrame data={data} />
    </section>
  );
}
