// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    "What is the name of your File name ?", 
    "Description of your project",
    "What are your dependencies ?",
    "Your repository link ?",
    "Your pages link ?",
    "Who are the authors ?",
    "What license are you using ?",
    "Who contributed to your project ?",
    "GitHub profile",
    "Your email"
];
const promptUser = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: questions[0],
    },
    {
        type: 'input',
        name: 'Description',
        message: questions[1],
      },
      {
        type: 'checkbox',
        name: 'Dependencies',
        message: questions[2],
        choices: ["macOS", "Windows 10", "Linux"]
      },
      {
        type: 'input',
        name: 'Repo',
        message: questions[3],
      },
      {
      type: 'input',
      name: 'Pages',
      message: questions[4],
    },
    {
        type: 'input',
        name: 'Credits',
        message: questions[5],
      },
      {
        type: 'list',
        name: 'License',
        message: questions[6],
        choices: [
            "Apache v2.0",
            "GNU v3.0",
            "MIT",
            "BSD 2 Clause",
            "BSD 3 Clause",
            "Boost Software v1.0",
            "Creative Commons Zero v1.0",
            "Eclipse Public v2.0",
            "GNU v3.0",
            "GNU v2.0",
            "No Lincesnse"
        ]
      },
      {
        type: 'input',
        name: 'Contributers',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'Github',
        message: questions[8],
      },
      {
        type: 'input',
        name: 'Email',
        message: questions[9],
      },
  ]);
};
// TODO: Create a function to write README file
function writeToFile(readmefile, data) {
    readmefile = generate.generateMarkdown(data);

    return readmefile;
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then (answers => {
            let readmefile = "";
            readmefile = writeToFile(readmefile, answers);
            fs.writeFile('Test.md', readmefile, err => 
            err? console.log(err): console.log("README generated"));
        });
    
};

// Function call to initialize app
init();
