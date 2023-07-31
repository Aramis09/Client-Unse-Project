import styles from "./carrousel.module.scss";
import CarrouselCard from "./carrouselCard";

export default function Carrousel() {
  const images = [
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1689200965/sample.jpg",
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1689178389/IMG_6928_i0vvvd.jpg",
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1689173737/dadAndBrother_fduowp.jpg",
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1689177607/IMG_4605_htqllc.jpg",
  ];
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <CarrouselCard
          image={image}
          index={index}
          length={images.length}
          key={Math.random()}
        />
      ))}
    </div>
  );
}
