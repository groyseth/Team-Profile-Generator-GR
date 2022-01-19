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

        return 100;
    }
}

module.exports = Manager;