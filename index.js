// TODO: Include packages needed for this application
import fetch from "node-fetch";
import { inquirerPrompts } from "./utils/inquirerPrompts.js";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import { writeToFile } from "./utils/writeFile.js";

const headers = {
   Accept: "application/vnd.github+json",
   "X-GitHub-Api-Version": "2022-11-28",
};
const gitHubAPI = "https://api.github.com/licenses";

const main = async () => {
   const { answers, licenseTypes } = await inquirerPrompts(gitHubAPI, headers);

   const fileData = await generateMarkdown(gitHubAPI, headers, answers, licenseTypes);

   const fileName = "./README.md";
   writeToFile(fileName, fileData);
};
main();

// TODO: Create a function to initialize app
function init() {}

init();
