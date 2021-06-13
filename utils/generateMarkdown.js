// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
  function generateMarkdown(answers) {
    return `
    # ${answers.title}
      
   
    ## Description
    ${answers.description}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Installation
    ${answers.install}
    ## Usage
    ${answers.usage}
    ## Credits
    ${answers.contributing}
    ## Tests
    ${answers.tests}
    ## Questions
    Email me with any questions: ${answers.questions}
    
    Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
    ## License
    [![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-${answers.color}.svg)](http://opensource.org/licenses/${answers.license})
    ## Contributing
    ${answers.contributing} 
    `;
  
  }
  
  module.exports = generateMarkdown;
