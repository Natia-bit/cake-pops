import ImageGallery from "../ImageGallery";
import styles from "./Gallery.module.css";
import ImageFrame from "./ImageFrame";

export default function Gallery({ id }) {
  const data = [
    "/cake-pops/flowers.jpg",
    "/cake-pops/springtime-one.png",
    "/cake-pops/green-dino.jpg",
    "/cake-pops/unicorn.jpg",
    "/cake-pops/unicorns-packed.jpg",
    "/cake-pops/unicorn3.jpg",
    "/cake-pops/spiderman-pops.jpg",
    "/cake-pops/flower.jpeg",
    "/cake-pops/blue-and-orange-flowers.png",
    "/cake-pops/baby-gender.jpg",
    "/cake-pops/polka dot.png",
  ];

  return (
    <section id={id} className="container">
      {/* <ImageGallery imageData={data} /> */}
      <ImageFrame data={data} />
    </section>
  );
}
