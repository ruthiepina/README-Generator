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

   const appIntro = `
---------------------------------------------
   Welcome to the README.md file generator
---------------------------------------------


Instructions:


1. Understand what each prompt is asking you.
2. Some prompts - Installation, Usage, Contributors, and Testing - will open your system default editor. *IMPORTANT*: When the editor opens, it opens behind the terminal. Make sure that you navigate to it to make it visible.
   
   a. Inside your editor you can add paragraphs, links, etc.
   b. Just follow standard markdown syntax (you can visit https://www.markdownguide.org/basic-syntax/) for lists, bullets, bold, italic, links, etc.
   c. If you need to add a header, start at the ### level.
   d. When you finish, save the default file and close your editor.

Your answer will be then automatically received by the application.


Enjoy it!

`;

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
      //    type: "editor",
      //    name: "install",
      //    message: "Provide installation instructions for your project.",
      // },
      // {
      //    type: "editor",
      //    name: "usage",
      //    message: "Provide instructions and examples to use. Provide screenshots if needed.",
      // },
      // {
      //    type: "editor",
      //    name: "contributions",
      //    message: "Provide guidelines for collaborators to contribute to your project.",
      // },
      // {
      //    type: "editor",
      //    name: "tests",
      //    message: "Provide instructions how to run tests on your project.",
      // },
      {
         type: "list",
         name: "license",
         message: "Select your project license type.",
         choices: licenseNames,
      },
      // {
      //    type: "input",
      //    name: "creator",
      //    message: "Enter your name: (Required)",
      // },
      // {
      //    type: "input",
      //    name: "gitHubUser",
      //    message: "Enter your GitHub username: (Required)",
      // },
      // {
      //    type: "input",
      //    name: "email",
      //    message: "Enter a valid email address: (Required)",
      // },
   ];

   console.log(appIntro);
   const answers = await inquirer.prompt(questions);
   return { answers, licenseTypes };
};
