// packages needed for this application
const fs = require('fs');
const util = require('util');
var inquirer = require('inquirer');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
            choices: ['MIT', 'APACHE_2.0', 'BSD_3', 'BSD_2', 'Other', 'None']
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

function renderLicense(license) {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-lightblue.svg)`
}

// function to write README file
function writeReadMe (data) {
return `
# ${data.title}

## Description:
${data.description}

## Table of Contents:
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)

### License:
${renderLicense(data.license)}

### Installation:
Open the terminal/console and run the following to install the necessary dependencies:
${data.installations}

### Usage:
${data.usage}

### Tests:
To run a test, open the terminal/console and run the following:
${data.tests}

### Contributing:
${data.contribute}

### Questions:
If you have any questions feel free to contact me, ${data.author}, on GitHub at: (https://github.com/${data.username})
or email me at: ${data.email}
`
}

// initialize app
questions().then((data) => writeFileAsync('./dist/README.md', writeReadMe(data)))
    .then(() => console.log('New README.md written successfully'))
    .catch((err) => console.log(err));
