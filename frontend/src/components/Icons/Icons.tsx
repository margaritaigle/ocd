import { ButtonHTMLAttributes } from "react";
import CarmeliteCrossImg from "../../pages/assets/home/CARMELO-logo-scaled-removebg-preview.png";

export const LeftArrow = (props: ButtonHTMLAttributes<any>) => (
  <button {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 112" fill="none">
      <g filter="url(#filter0_d_55_151)">
        <path d="M54 2L6 52L54 102" stroke="black" strokeLinecap="round" />
      </g>
    </svg>
  </button>
);

export const RightArrow = (props: ButtonHTMLAttributes<any>) => (
  <button {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 112" fill="none">
      <g filter="url(#filter0_d_55_152)">
        <path d="M6.00001 102L54 52L6 2" stroke="black" strokeLinecap="round" />
      </g>
    </svg>
  </button>
);

export const CarmeliteCross = (props: any) => (
  <img {...props} src={CarmeliteCrossImg} />
);
