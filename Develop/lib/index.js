const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const generateTeam = require('../src/page-template');
var employeeArray = [];


managerQuestions();
function managerQuestions() {
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
            {
                type: "list",
                message: "Would you like to add an intern, engineer or to finish building my team?",
                choices: ["intern", "engineer", "finish building my team"],
                name: "anotherManager"
            },
        ])

        .then((managerInfo) => {

            const manager = new Manager(managerInfo.managerName, managerInfo.managerID, managerInfo.email, managerInfo.managerOfficeNum);
            employeeArray.push(manager);
            
            if (managerInfo.anotherManager === "engineer") {
                engineerQuestions();
            }
            if(managerInfo.anotherManager === "intern"){
                internQuestions();
            }
            if(managerInfo.anotherManager === "finish building my team"){
                finishedBuild();
            }

        })
}
// engineer’s name, ID, email, and GitHub username
function engineerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineers name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is the engineers id?",
                name: "engineerID"
            },
            {
                type: "input",
                message: "What is the engineers email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the engineers Github username?",
                name: "engineerGithub"
            },
            {
                type: "list",
                message: "Would you like to add an intern, engineer or to finish building my team?",
                choices: ["intern", "engineer", "finish building my team"],
                name: "employeeOption"
            },
        ])
        .then((engineerInfo) => {

            const engineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerID, engineerInfo.engineerEmail, engineerInfo.engineerGithub);
            employeeArray.push(engineer);

            if (engineerInfo.employeeOption === "engineer") {
                engineerQuestions();
            }
            if(engineerInfo.employeeOption === "intern"){
                internQuestions();
            }
            if(engineerInfo.employeeOption === "finish building my team"){
                finishedBuild();
            }

        })
}

function internQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the interns name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is the interns id?",
                name: "internID"
            },
            {
                type: "input",
                message: "What is the interns email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is the interns school?",
                name: "internSchool"
            },
            {
                type: "list",
                message: "Would you like to add an intern, engineer or to finish building my team?",
                choices: ["intern", "engineer", "finish building my team"],
                name: "internOption"
            },
        ])
        // name, ID, email, and school
        .then((internInfo) => {

            const intern = new Intern(internInfo.internName, internInfo.internID, internInfo.internEmail, internInfo.internSchool);
            employeeArray.push(intern);

            
            if (internInfo.internOption === "engineer") {
                engineerQuestions();
            }
            if(internInfo.internOption === "intern"){
                internQuestions();
            }
            if(internInfo.internOption === "finish building my team"){
                finishedBuild();
                // return;
            }
      
        })
}



function finishedBuild (){
    // console.log(answers);
    var htmlStr = makeToFile(employeeArray);
    console.log(htmlStr);
     fs.writeFile('../dist/team.html', htmlStr, (err)=> {
         if(err){
             console.log(err);
         }
         console.log("successful");
     })
 }


 function makeToFile(data) {
   return generateTeam(data)
 }
