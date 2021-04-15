// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateBadge = require('./utils/generateMarkdown');
// const { inherits } = require('node:util');

// TODO: Create an array of questions for user input
const questions = [
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
        message: 'Select license for your project',
        choices: ['MIT','BSD 3','APACHE 2.0', 'GPL 3.0', 'none'],
        name: 'license'
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
  ]
  
  init = () =>{
    inquirer
    .prompt(questions)
    .then((response) =>{
    fs.writeFile('README.md', generateMarkdown.generateMarkdown(response), (err)=>
        err ? console.log(err) : console.log('success!'))
  })
}
  
init()