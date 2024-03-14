import { ocdInstance } from "./axios";

export class OcdApi {
  static getImages() {
    return ocdInstance.get("/images");
  }
}
