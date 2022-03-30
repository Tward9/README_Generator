// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');
const renderLicenseLink = require('./utils/generateMarkdown');
const renderLicenseSection = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    //Email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    //GitHub Username
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
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
    //links jump to correct section

    //Installation
    {
        type: 'list',
        name: 'installation_require',
        message: 'Does your project require specific installation steps?',
        choices: ['yes', 'no'],
    },
    {
        type: 'input',
        name: 'install_command',
        message: 'What commands does your project require to be run?',
        default: 'npm i',
        when(answers){
            return answers.installation_require === 'yes'
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
    {
        type: 'list',
        name: 'license_need_choice',
        message: 'Does your application require a License?',
        choices: ['yes', 'no'],
    },
    {
        type: "list",
        name: "license_choice",
        message: "What License is required?",
        choices: [
            new inquirer.Separator(" = Licenses = "),
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense',
        ], 
        when(answers){
            return answers.license_need_choice === 'yes'
        }
    },
    //Contributing
    {
        type: "input",
        name: "contribution",
        message: "Is there anything the user should know about contributing to the repo or application", 
    },
    //Tests
    {
        type: "list",
        name: "test_choice",
        message: "Are the any tests of the application?",
        choices: ['yes', 'no'], 
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the tests that can be run?',
        when(answers){
            return answers.test_choice === 'yes'
        }
    },
    //Questions (instructions for how to reach creator)
    
];
// TODO: Create a function to write README file
function writeToFile(filename, answers) {
    const readme = generateMarkdown(answers);
    renderLicenseBadge(answers);
    renderLicenseLink(answers);
    const license = renderLicenseSection(answers);
}
//todo: create readme draft to fill with answers
// set up license info
//run fs.writeFile inside

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers);
        filename = `${answers.project_title}.README.md`;
        writeToFile(filename, answers);
    });

};

// Function call to initialize app
init();
