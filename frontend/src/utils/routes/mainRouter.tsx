import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/Main/MainPage";
import { Gallery } from "../../pages/Gallery/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/galería",
    element: <Gallery />,
  },
]);
