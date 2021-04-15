// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }else{
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return `- [${license}](#${license})`
  }else{
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none'){
    return `##License
    [${license}](https://opensource.org/licenses/${license})`
  }else{
    return ``
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data =>{
  return(`# ${data.title}
${generateBadge.renderLicenseBadge(data.license)} 

## Description

${data.description}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${generateBadge.renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation

${data.install}

## Contributing

${data.contributing}

## Tests

${data.tests}

${generateBadge.renderLicenseSection(data.license)}

## Questions

Email: ${data.email}

Github: https://www.github.com/${data.username}
  `)
}
module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}