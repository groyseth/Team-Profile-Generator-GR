const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
// const stuff  = require ('./Manager')
console.log(Manager(getRole))

// name, employee ID, email address, and office number
// console.log(Manager);
// function init(){
    // option to add an engineer or an intern or to finish building my team
// console.log(managers);
// const managers = new Manager(managerName, managerID, email, managerOfficeNum )
function init(){
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the manager name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the manager employee ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "What is the manager email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager office number?",
            name: "managerOfficeNum"
        }, 
    ])
}

init();
// function maning(){

// }
// .then(({managerName, managerID, email, managerOfficeNum}) => {
   
//     console.log(manager);
//     // console.log(managerName);
//     return manager
// })

const manager = new Manager(managerName, managerID, email,  managerOfficeNum)

