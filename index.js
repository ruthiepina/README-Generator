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

//* Launch inquirer to go thru questions array, using promises to wait until all questions
//* are answered. Then call writeToFile function to generate readme file content and 
//* write readme.md file
inquirer.prompt(questions).then((answers) => {
   let readme = `#${answers.projectName}`;
   writeToFile("./README.md", readme);
});

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
