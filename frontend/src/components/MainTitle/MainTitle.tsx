import "./MainTitle.css";
import { CarmeliteCross } from "../Icons/Icons";

export const MainTitle = ({ withBorder }: { withBorder?: boolean }) => {
  return (
    <div className={`main-title ${withBorder ? "border-bottom" : ""}`}>
      <CarmeliteCross />
      <div>
        <h1>CARMELITAS DESCALZAS</h1>
        <h4>
          Carmelo Nuestra Señora del Silencio y la Esperanza <br />
          Montevideo, Uruguay
        </h4>
      </div>
    </div>
  );
};
