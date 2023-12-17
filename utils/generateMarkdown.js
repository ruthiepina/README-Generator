import { createBadge } from "./createBadge.js";

export const generateMarkdown = async (gitHubAPI, headers, answers, licenseTypes) => {
   const myLicense = licenseTypes.filter((element) => element.name == answers.license);
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
   return readme;
};
