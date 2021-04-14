// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateBadge = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please give a description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What must be installed to run your project?:',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Enter any usage instructions',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Credit all contributing parties here',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter tests here',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Select liscence for your project',
        choices: ['MIT','BSD 3','APACHE 2.0', 'GPL 3.0', 'None at all'],
        name: 'liscence'
    },
    {
        type: 'input',
        message: 'Enter your gitHub username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email'
    }
  ])
  .then((response) =>{
    const filename = `${response.title.toLowerCase().split(' ').join('')}.md`;

    questions.push(response)

    fs.writeFile(filename, myReadme(response), (err)=>
        err ? console.log(err) : console.log('success!')
    )
  })

  const myReadme = function(data){
      return(`# ${data.title}

## Description

${data.description}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Liscence](#liscence)
- [Questions](#questions)

## Installation

${data.install}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Liscence

${data.liscence}

## Questions

Email: ${data.email}

Github: https://www.github.com/${data.username}
      `)
  }