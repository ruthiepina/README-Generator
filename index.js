// TODO: Include packages needed for this application
// const inquirer = require("inquirer");
import inquirer from "inquirer";
// const fs = require("fs");
import fs from "fs";

let licenseTypes = [];
let licenseDescr = [];

import fetch from "node-fetch";

const response = await fetch("https://api.github.com/licenses", {
   headers: {
      Accept: "application/vnd.github+json",
      // Authorization: "Bearer <YOUR-TOKEN>",
      "X-GitHub-Api-Version": "2022-11-28",
   },
});

const data = await response.json();
console.log("file: index.js:20 ~ data:", data);

//* array1.forEach((element) => console.log(element));
data.forEach((element) => {
   licenseTypes.push({ key: element.key, name: element.name });
});
console.log("file: index.js:26 ~ licenseTypes:", licenseTypes);

// TODO: Create an array of questions for user input
const questions = [
   {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
   },
   {
      type: "input",
      name: "description",
      message: "Enter a brief project description.",
   },
   {
      type: "input",
      name: "install",
      message: "Provide installation instructions for your project.",
   },
   {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples to use. Provide screenshots if needed.",
   },
   {
      type: "input",
      name: "contributions",
      message: "Provide guidelines for collaborators to contribute to your project.",
   },
   {
      type: "input",
      name: "tests",
      message: "Provide instructions how to run tests on your project.",
   },
   {
      type: "list",
      name: "license",
      message: "Select your project license type.",
      choices: licenseTypes,
   },
];

//* Launch inquirer to go thru questions array, using promises to wait until all questions
//* are answered. Then call writeToFile function to generate readme file content and
//* write readme.md file
const main = async () => {
   const answers = await inquirer.prompt(questions);
   console.log("file: index.js:75 ~ answers:", answers);

   const response = await fetch("https://api.github.com/licenses/" + answers.license, {
      headers: {
         Accept: "application/vnd.github+json",
         // Authorization: "Bearer <YOUR-TOKEN>",
         "X-GitHub-Api-Version": "2022-11-28",
      },
   });
   const data = await response.json();
   console.log("file: index.js:85 ~ data:", data.description);

   let readme = `# ${answers.projectName}
## ${answers.license}
## Project Description
${answers.description}
## Installation
${answers.install}
## Usage
${answers.usage}
## Contributions
${answers.contributions}
## Tests
${answers.tests}
## License
${answers.license}
${data.description}
`;
   writeToFile("./README.md", readme);
};
main();

// inquirer.prompt(questions).then((answers) => {
//    let readme = `#${answers.projectName}`;
//    writeToFile("./README.md", readme);
// });

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
