// TODO: Include packages needed for this application
// import inquirer from "inquirer";
import fs from "fs";
import fetch from "node-fetch";
import { createBadge } from "./utils/createBadge.js";
import { inquirerPrompts } from "./utils/inquirerPrompts.js";


const headers = {
   Accept: "application/vnd.github+json",
   "X-GitHub-Api-Version": "2022-11-28",
};
const gitHubAPI = "https://api.github.com/licenses";

const main = async () => {
   const { answers, licenseTypes } = await inquirerPrompts(gitHubAPI, headers);
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
