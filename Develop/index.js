// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    //Title of Project
    {
        type: 'input',
        name: 'project_title',
        message: 'What is the Title of your Project?',
    },
    //Description
    {
        type: 'input',
        name: 'project_description',
        message: 'Please describe your project, i.e. what was the motivation, why did you build it, what, if any, problems does it solve, what did you learn?',
    },
    //Table of Contents -> generated in write file
    //Instalation
    {
        type: 'list',
        name: 'instalation_require',
        message: 'Does your project require specific instalation steps?',
        choices: ['yes', 'no'],
    },
    {
        type: 'input',
        name: 'instal_command',
        message: 'What commands does your project require to be run?',
        default: 'npm i',
        when(answers){
            return answers.instalation_require === 'yes'
        }
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for using your application.'
    },
    {
        type: 'list',
        name: 'usage_pic_choice',
        message: 'Do you want to include images?',
        choices: ['yes', 'no'],
    },
    {
        type: "input",
        name: "usage_img_link",
        message: "Provide a relative path link to your image", 
        when(answers){
            return answers.usage_pic_choice === 'yes'
        }
    },
    {
        type: 'list',
        name: 'usage_pic2_choice',
        message: 'Do you want to include another image?',
        choices: ['yes', 'no'],
        when(answers){
            return answers.usage_pic_choice === 'yes'
        }
    },
    {
        type: "input",
        name: "usage_img2_link",
        message: "Provide a relative path link to your image", 
        when(answers){
            return answers.usage_pic2_choice === 'yes'
        }
    },
    {
        type: 'list',
        name: 'usage_pic3_choice',
        message: 'Do you want to include another image?',
        choices: ['yes', 'no'],
        when(answers){
            return answers.usage_pic2_choice === 'yes'
        }
    },
    {
        type: "input",
        name: "usage_img2_link",
        message: "Provide a relative path link to your image", 
        when(answers){
            return answers.usage_pic3_choice === 'yes'
        }
    },
    //License
    //Contributing
    //Tests
    //Questions (FAQ?)
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers);
    });
};

// Function call to initialize app
init();
