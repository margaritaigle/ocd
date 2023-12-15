import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Gallery } from "../../pages/Gallery/Gallery";
import { MainPage } from "../../pages/Main/MainPage";
import { Root } from "./Root";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="galería" element={<Gallery />} />
    </Route>
  )
);
