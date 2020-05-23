require ('dotenv').config();
const inquirer = require("inquirer");
const cTable = require('console.table');
//mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     :  process.env.userDB,
  password :  process.env.passDB,
  database : 'employeeTrack_DB'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
// connection.end();

const questionsBegin = function () {
    //what would user like to do next?
   inquirer.prompt ({
    type: "list",
    name: "nextStep",
    message:"Wwhat would you like to do?",
    choices: [
        "View All Employees by Department",
        "View All Employees by Manager",
        "View All Roles",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Add Role",
        "Remove Role"
    ],
    })
    .then(response => {
         switch(response.nextStep) {
            // simple view items 
            case 'View All Employees by Department' : viewByDept(); break;
            case 'View All Employees by Manager' : viewByManager(); break;
            case 'View All Roles' : viewAllRoles(); break;
        };
    });
};

function viewByDept();

function viewByManager();

function viewAllRoles();









    //When select "view all employees by Department", display *
    // {
    // type: "input",
    // name: "email",
    // message:"What is the employee's email?"
    // },
    // //When Select "view all employees by Manager", display all employees with a manager
    // {
    // type: "input",
    // name: "id",
    // message:"What is the employee's id number?"
    // },
    // //When select Add Employee ***Go through next set of questions***
    // //Ask following:
    // //first_name
    // //last_name
    // //title
    // //department
    // //salary
    // //Who is their manager
    // {
    // type: "input",
    // name: "officeNumber",
    // message:"What is the manager's office phone number?",
    // when: (response) => response.role === 'Manager'
    // },
    // //When user selects "Remove employee", provide list of all employees into a 
    // //list/choices array to select from
    // //When user selects the employee name, displays "Employee has been removed"
    // {
    // type: "input",
    // name: "github",
    // message:"What is the engineer's github name?",
    // when: (response) => response.role === 'Engineer'
    // },
    // //When user selects Update Employee role, provide list of all employees into a 
    // //list/choices array to select from
    // //When user selects employee role to update, prompts the user "What is their new role?"
    // //Once new role has been inputed, provide prompt "employee's role has been updated"
    // {
    // type: "input",
    // name: "school",
    // message:"What is the intern's school?",
    // when: (response) => response.role === 'Intern'
    // },
    // //When user selects Update Employee Manager, provide list of all current employees into a 
    // //list/choices array to select from
    // //When user selects employee role to update, prompts the user "Who is their new manager?"
    // //Once new role has been inputed, provide prompt "employee's manager has been updated"
    // {
    // type: "confirm",
    // name: "addEmployee",
    // message:"Do you need to add another employee?"
    // },
    //When user Selects "Add Role", prompts user to imput a new role
    //display "New role has been added"




    //When user selects "remove role", provides list of current roles into a 
    //list/choices array to select from
    //when user selects role to remove, displays "Role has successfully been removed"

