// TODO: Include packages needed for this application
const inquirer = require("inquirer");

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
