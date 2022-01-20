const inquirer = require('inquirer');

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole = () => {

        return "Manager";
    }
    getOfficeNumber = () => {
        // inquirer
        //     .prompt([
        //         {
        //             type: "input",
        //             message: "What is the manager name?",
        //             name: "managerName"
        //         }
        
        //     ])}
       
        return this.officeNumber;
        
    }
}
module.exports = Manager;
// module.exports = getOfficeNumber();