// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// const { writeFile, copyFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
//begin readme title input
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('You must enter a project title!');
                        return false;
                    }

                }
            },

            //end readme title input
            //begin description input
            {
                type: "input",
                name: "description",
                message: "Use this section to describe your project:",

            },

            //end description input
            //begin table of contents
            //end table of contents
            //begin usage input

            {
                type: "input",
                name: "usage",
                message: "Provide instructions and examples for use. Include screenshots as needed.",
            },

            //end usage input
            //begin credits

            {
                type: "input",
                name: "credits",
                message: "List your collaborators, if any, with links to their GitHub profiles."
            },

            //end credits
            //begin license
            {
                type: "checkbox",
                name: "license",
                message: "Choose the appropriate license for this project: ",
                choices: ["ISC", "MIT", "Mozilla", "Open"],
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("You must enter the license of your project.");
                    }
                    return true;
                },
            },
            
            //end license
            //begin extra content


        ]).then(answers => writeToFile('./README.md', generateMarkdown(answers)));

}



// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fileName = 'README.md';
    fs.writeFile(fileName, data, (err) => {
                //if error
                if (err) {
                    return console.log(err);
                }
                //if file made
                console.log("Congratulations you made it!");
            });
        };

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
questions();