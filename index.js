// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
            if (contributingInput) {
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
    {
        type: 'list',
        name: 'license',
        message: 'What license is your application covered under?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 
            'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'None']
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
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    })
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const promptUser = () => {
    return inquirer.prompt(questions);
};

promptUser().then(userInput => {
    return generateMarkdown(userInput);
}).then(markdown => {
    writeToFile("./dist/README.md", markdown);
});
