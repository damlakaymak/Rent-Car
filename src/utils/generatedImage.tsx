import { color } from "framer-motion";
import { CarType } from "../types";
import { colors } from "./constans";

const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split("/")[0]);
  url.searchParams.append("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.append("angle", angle);
  }

 const i =Math.round(Math.random() * colors.length)
  url.searchParams.append("paintId", colors[i]);
  console.log(url);
  return url.href;
};

export default generateImage;
