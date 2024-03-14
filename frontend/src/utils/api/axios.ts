import axios from "axios";

export const ocdInstance = axios.create({
  baseURL: "https://ocd-be.uc.r.appspot.com",
});
