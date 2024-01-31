import "./MainPage.css";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MainTitle />
      <div
        className="image-container"
        style={{
          opacity: Math.max(0, 1 - scrollPosition / document.body.scrollHeight),
        }}
      >
        <img src="https://storage.cloud.google.com/ocdmontevideo/biblioteca-de-santa-teresa-de-jesus-0.jpg" />
      </div>
    </>
  );
};
