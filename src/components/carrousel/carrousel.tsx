import styles from "./carrousel.module.scss";
import CarrouselCard from "./carrouselCard";

export default function Carrousel() {
  const images = [
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1681742262/wwvprdwxtbswm31inkdx.jpg",
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1681742277/u6y8lwmoxwwn2rezuuxh.jpg",
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
