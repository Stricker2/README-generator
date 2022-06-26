// TODO: Include packages needed for this application
var inquirer = require('inquirer');
console.log(inquirer)

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is the title of your project?'
        },

        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project:'
        },

        {
            type:'input',
            name: 'installations',
            message: 'Please describe how to install dependencies:'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'What information is pertinent for the user to know while using this project?'
        },

        {
            type: 'input',
            name: 'tests',
            message: 'How do you run tests for this project?'
        },

        {
            type: 'input',
            name: 'contribute',
            message: 'How can someone contribute to this project?'
        },

        {
            type: 'list',
            name: 'license',
            message: 'What license does your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'BSD 2', 'GPL', 'LGPL', 'None']
        },

        {
            type: 'input',
            name: 'author',
            message: "What is the author's name?"
        },

        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ]);
}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
