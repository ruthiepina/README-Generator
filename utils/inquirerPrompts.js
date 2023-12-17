import inquirer from "inquirer";

let licenseTypes = [];
let licenseNames = [];

export const inquirerPrompts = async (gitHubAPI, headers) => {
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

   const answers = await inquirer.prompt(questions);
   return { answers, licenseTypes };
};
