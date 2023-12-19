import fs from "fs";

export function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, "utf8", (err) => {
      if (err) {
         console.log("Error writing the file.", err);
      } else {
         console.log("File has been written.");
      }
   });
   return;
}
