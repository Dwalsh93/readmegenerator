// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// const { writeFile, copyFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project? (Required)',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('You must enter a project title!');
                        return false;
                    }

                }
            },
        ])
}


            // TODO: Create a function to write README file
            // function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
questions();