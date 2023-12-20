import { createBadge } from "./createBadge.js";

export const generateMarkdown = async (gitHubAPI, headers, answers, licenseTypes) => {
   const myLicense = licenseTypes.filter((element) => element.name == answers.license);
   const response = await fetch(gitHubAPI + "/" + myLicense[0].key, { headers });
   const data = await response.json();
   const svg = createBadge(myLicense[0].key);

   let readme = `# ${answers.projectName} ![](assets/images/badge.svg)
## Project Description
${answers.description}
## Table of Contents
-  [Installation](#installation)
-  [Usage](#usage)
-  [Contributions](#contributions)
-  [Tests](#tests)
-  [License](#license)
-  [Questions](#questions)
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
## Questions
README Generator created by ${answers.creator} with GitHub account [${answers.gitHubUser}](https://github.com/${answers.gitHubUser}).
For any additional questions or comments, please send a message to the following address:
Email Address: <${answers.email}>
`;
   return readme;
};
