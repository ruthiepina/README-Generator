import { makeBadge, ValidationError } from "badge-maker";
import { writeToFile } from "./writeToFile.js";
export const createBadge = (message) => {
   const format = {
      label: "license",
      message: message.toUpperCase(),
      labelColor: "lightgrey",
      color: "red",
      style: "plastic",
   };
   writeToFile("./assets/images/badge.svg", makeBadge(format));
   return;
};
