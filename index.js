// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import fetch from "node-fetch";
import { createBadge } from "./utils/createBadge.js";

let licenseTypes = [];
let licenseNames = [];

const headers = {
   Accept: "application/vnd.github+json",
   "X-GitHub-Api-Version": "2022-11-28",
};
const gitHubAPI = "https://api.github.com/licenses";

const response = await fetch(gitHubAPI, { headers });
const data = await response.json();

data.forEach((element) => {
   licenseTypes.push({ key: element.key, name: element.name });
   licenseNames.push(element.name);
});

const questions = [
   // {
   //    type: "input",
   //    name: "projectName",
   //    message: "What is your project name?",
   // },
   // {
   //    type: "input",
   //    name: "description",
   //    message: "Enter a brief project description.",
   // },
   // {
   //    type: "input",
   //    name: "install",
   //    message: "Provide installation instructions for your project.",
   // },
   // {
   //    type: "input",
   //    name: "usage",
   //    message: "Provide instructions and examples to use. Provide screenshots if needed.",
   // },
   // {
   //    type: "input",
   //    name: "contributions",
   //    message: "Provide guidelines for collaborators to contribute to your project.",
   // },
   // {
   //    type: "input",
   //    name: "tests",
   //    message: "Provide instructions how to run tests on your project.",
   // },
   {
      type: "list",
      name: "license",
      message: "Select your project license type.",
      choices: licenseNames,
   },
];

//* Launch inquirer to go thru questions array, using promises to wait until all questions
//* are answered. Then call writeToFile function to generate readme file content and
//* write readme.md file
const main = async () => {
   const answers = await inquirer.prompt(questions);

   let myLicense = licenseTypes.filter((element) => element.name == answers.license);

   const response = await fetch(gitHubAPI + "/" + myLicense[0].key, { headers });
   const data = await response.json();

   const svg = createBadge(myLicense[0].key);

   let readme = `# ${answers.projectName} ${svg}
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
