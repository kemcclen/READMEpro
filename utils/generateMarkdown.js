// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
};

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "None") {
    return ` ## License:
The project is under the license: ${license} `;
  }
  return "";
};

// function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}
  
## Description: 
   ${data.description}

## Table of Contents: 
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
   
## Installation: 
   ${data.installation}
  
## Usage: 
   ${data.usage}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}
  
## Contributions: 
   ${data.contribution}
   
## Testing: 
   ${data.test}
   
## Contact: 
   ${data.questions}`;
};

module.exports = generateMarkdown;
