import { makeBadge, ValidationError } from "badge-maker";

const createBadge = (key) => {
   const format = {
      label: "license",
      message: key.toUpperCase(),
      labelColor: "lightgrey",
      color: "red",
      style: "plastic",
   };
   return makeBadge(format);
};

export { createBadge };
