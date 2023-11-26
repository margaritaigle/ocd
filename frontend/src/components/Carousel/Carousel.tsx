import { useState } from "react";
import { LeftArrow, RightArrow } from "../Icons/Icons";
import "./Carousel.css";

enum ACTIONS {
  LEFT_ARROW = "LEFT_ARROW",
  RIGHT_ARROW = "RIGHT_ARROW",
}

export const Carousel = ({ images }: { images: Array<string> }) => {
  const [reorderedImages, setReorderedImages] = useState(images);
  const handleClick = (action: ACTIONS) => {
    const reorderedImagesCopy: string[] = [...reorderedImages];
    switch (action) {
      case ACTIONS.LEFT_ARROW:
        const lastImage = reorderedImagesCopy.pop() as string;
        reorderedImagesCopy.unshift(lastImage);
        setReorderedImages(reorderedImagesCopy);
        break;

      case ACTIONS.RIGHT_ARROW:
        const firstImage = reorderedImagesCopy.shift() as string;
        reorderedImagesCopy.push(firstImage);
        setReorderedImages(reorderedImagesCopy);
        break;
    }
  };
  return (
    <div className="carousel-container">
      <LeftArrow
        onClick={() => handleClick(ACTIONS.LEFT_ARROW)}
        className="left-arrow"
      />
      {reorderedImages.slice(0, 3).map((image) => (
        <img key={image} src={image} />
      ))}
      <RightArrow
        onClick={() => handleClick(ACTIONS.RIGHT_ARROW)}
        className="right-arrow"
      />
    </div>
  );
};
