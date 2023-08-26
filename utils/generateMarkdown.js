// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = `https://img.shields.io/badge/License-${license}-red`;
  const newBadge = badge.split(' ').join('%20');

  return newBadge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let finalbadge = renderLicenseBadge(data.License);
  return `# ${data.Title}
## Description

  ${data.Description}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Dependencies](#dependencies)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Questions](#questions)
  
## Dependencies

  ${data.Dependencies}
    
## Installation
    
  [Repository](${data.Repo})
    
## Usage
    
  [Pages](${data.pages})
    
## Credits
    
  ${data.Credits}
    
## License
    
  This project is licensed under the No License License - see the LICENSE file for details 
    
  ![badge]( ${finalbadge})
    
## Contribution
    
  ${data.Title}
    
## Questions

  Contact me for any questions with the following:
  - [Github](${data.Github})
  - [${data.Email}]

`;
}

module.exports = {
  generateMarkdown,
}