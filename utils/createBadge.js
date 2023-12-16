import { makeBadge, ValidationError } from "badge-maker";

const createBadge = (message) => {
   const format = {
      label: "license",
      message: message.toUpperCase(),
      labelColor: "lightgrey",
      color: "red",
      style: "plastic",
   };
   return makeBadge(format);
};

export { createBadge };
