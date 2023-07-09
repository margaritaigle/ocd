import { DownOutlined } from "@ant-design/icons";
import "./Header.css";
import shield from "./assets/escudo.png";
import { NavegationBar } from "../NavegationBar/NavegationBar";
import { useState } from "react";

export const Header = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  return (
    <header>
      <div className="header-content">
        <button className="menu" onClick={() => setIsNavBarOpen(!isNavBarOpen)}>
          <DownOutlined className={isNavBarOpen ? "rotate180" : ""} />
        </button>
        <div className="title">
          <img className="shield" src={shield} />
          <h1>Carmelitas Descalzas Uruguay</h1>
        </div>
      </div>

      <NavegationBar hide={isNavBarOpen} />
    </header>
  );
};
