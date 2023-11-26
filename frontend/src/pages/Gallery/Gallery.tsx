import { Carousel } from "../../components/Carousel/Carousel";
import { OCDImages } from "./assets";
import "./Gallery.css";

export const Gallery = () => {
  return (
    <>
      <div className="gallery-container">
        <section className="phrase-container">
          <p className="phrase">
            “Cuando se ama, todo es alegria; la cruz no pesa; el martirio no se
            siente; se vive más en el cielo que en la tierra”
          </p>
          <p className="author">Santa Teresa de los Andes</p>
        </section>
        <Carousel images={OCDImages} />
      </div>
    </>
  );
};
