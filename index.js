import { inquirerPrompts } from "./utils/inquirerPrompts.js";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import { writeToFile } from "./utils/writeFile.js";

const fileName = "./README.md";
const headers = {
   Accept: "application/vnd.github+json",
   "X-GitHub-Api-Version": "2022-11-28",
};
const gitHubAPI = "https://api.github.com/licenses";

const init = async () => {
   const { answers, licenseTypes } = await inquirerPrompts(gitHubAPI, headers);

   const fileData = await generateMarkdown(gitHubAPI, headers, answers, licenseTypes);

   writeToFile(fileName, fileData);
};

init();
