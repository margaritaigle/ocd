import { useEffect, useState } from "react";
import { OcdApi } from "../../utils/api/ocdApi";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./Gallery.css";
import { MainTitle } from "../../components/MainTitle/MainTitle";

export const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  async function getImages() {
    try {
      const { data } = (await OcdApi.getImages()) as any;
      setImages(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="gallery-container">
      <MainTitle withBorder />
      <div className="caroussel-container">
        <Flicking autoResize align="center" bound circular>
          {/* <iframe
          src="https://www.youtube.com/embed/pmxxgaPIlMA?si=Qr6z8DMTxZYmklpb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        /> */}
          {images.map((image) => (
            <img className="caroussel-image" key={image} src={image} />
          ))}
        </Flicking>
      </div>
    </div>
  );
};
