// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please describe your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installing your project (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please give instructions on how to install your project!');
                return false;
            }
        }
    },
    // split this question into several questions when I have a better idea of how this section will be generated
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for using your project (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please give instructions and examples for using your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide instructions for contributing to your project (Required. You can say you are not looking for contributers)',
        validate: contributingInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please give instructions on how to contribute to your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for running tests for your application (Required)',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please give instructions for running tests on your application!');
                return false;
            }
        }
    },
    // change this to a type that only allows one selection
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license is your application covered under?',
        choices: ['Placeholder', 'What is a license', "I don't like this question"]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // perhaps make this question not required.
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const promptUser = () => {
    return inquirer.prompt(questions);
};

promptUser().then(userInput => {
    console.log(userInput);
});
