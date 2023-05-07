// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions for installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project?',
        choices: ["MIT", "ISC", "GNU GPLv3", "None"]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are contribution guidelines for your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What email address would you like to be reached out to with questions?'
    },

];

// TODO: Create a function to write README file
function writeTheFile(fileName, data) {
    return fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log('Successfully created README!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeTheFile("README.md", generateMarkdown(data));
})
};

// Function call to initialize app
init();
