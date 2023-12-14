// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
   {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
   },
];

inquirer.prompt(questions).then((response) => {
   console.log("file: index.js:16 ~ response:", response);
});

let readmeData = `HI RUTHIE`;

writeToFile("./README.md", readmeData);

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, "utf8", (err) => {
      if (err) {
         console.log("Error writing the file.", err);
      } else {
         console.log("File has been written.");
      }
   });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
