const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please write a small description of your project:',
            name: 'description',
        },
        {
            type: 'checkbox',
            message: 'Which license is applicable to your project?',
            choices: ['MIT', 'Apache-2.0', 'GPLv3', 'BSD-3-Clause', ' '],
            name: 'license',
        },
        {
            type: 'input',
            message: 'How can users install dependencies?',
            name: 'installation',
            default: 'npm i',
        },
        {
            type: 'input',
            message: 'What command should users run to run tests?',
            name: 'tests',
            default: 'npm run test',
        },
        {
            type: 'input',
            message: 'What command should users run to use your project?',
            name: 'instructions',
            default: 'node index.js',
        },
    ]);
};

const writeToFile = (filename, res) => {
    promptUser()
        .then(res => {
            let license = `${res.license}`
            filename = `${res.name.toLowerCase().split(' ').join('')}.md`
            fs.writeFile(filename, generateMarkdown.generateMarkdown(res), err => err ? console.error(err) : console.log('Success!'))
        })
}

const init = () => {
    console.log('Ignition...');
    writeToFile(); 
};

init();