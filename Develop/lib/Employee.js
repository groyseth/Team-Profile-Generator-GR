// remove dis form gitignore
//make the directory structor
// use 
//use promts for user input 
// * `name`

//  `id`

//  `email`

//  `getName()`

//  `getId()`

//  `getEmail()`

//  `getRole()`&mdash;returns `'Employee'`

const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name = () => {inquirer
        .prompt([
            {
                type: "input",
                message: "Whats your name?",
                name: "yourName",
                
            }])
            .then((answers) => {
                console.log(answers);
            })
        this.id = id;
        this.email = email;

    }
}
    getName = () => {
        // inquirer
        //     .prompt([
        //         {
        //             type: "input",
        //             message: "Whats your name?",
        //             name: "yourName",
                    
        //         }])
        //         .then((answers) => {
        //             console.log(answers);
        return this.name;
    // })
}
    getId = () => {
        return this.id;
    }
    getEmail = () => {
        return this.email;
    }
    getRole = () => {

        return "Employee";
    }
}







module.exports = Employee;