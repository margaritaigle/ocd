import { Carousel } from "../../components/Carousel/Carousel";
import { OCDImages } from "./assets";
import "./Gallery.css";

export const Gallery = () => {
  return (
    <div className="gallery-container">
      <Carousel images={OCDImages} />
    </div>
  );
};
