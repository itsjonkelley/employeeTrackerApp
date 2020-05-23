require ('dotenv').config();
const inquirer = require("inquirer");
const cTable = require('console.table');
const PORT = process.env.PORT || 3306;
//mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  process.env.PORT,
  user     :  process.env.userDB,
  password :  process.env.passDB,
  database : 'employeeTrack_DB'
});
 

 
connection.connect(function(err) {
    if (err) throw err;
    questionsBegin();
  });



 
// connection.end();

const questionsBegin = function () {
    //what would user like to do next?
   inquirer.prompt ({
    type: "list",
    name: "nextStep",
    message:"What would you like to do?",
    choices: [
        "View All Employees by Department",
        "View All Employees by Manager",
        "View All Roles",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Add Role",
        "Remove Role",
        "Add Department",
        "Remove Department"
    ],
    })
    .then(response => {
         switch(response.nextStep) {
            case 'View All Employees by Department' : viewByDept(); break;
            case 'View All Employees by Manager' : viewByManager(); break;
            case 'View All Roles' : viewAllRoles(); break;
            case 'Add Employee' : addEmp(); break;
            case 'Remove Employee' : removeEmp(); break;
            case 'Add Role' : addRole(); break;
            case 'Remove Role' : removeRole(); break;
            case 'Add Department' : addDept(); break;
            case 'Remove Department' : removeDept(); break;
            case 'Update Employee Role' : updateEmpRole(); break;
            case 'Update Employee Manager' : updateEmpMan(); break;
        };
    });
};

//When select "view all employees by Department", display *
// function viewByDept();
// function viewByDept();

// //When Select "view all employees by Manager", display all employees with a manager
// // function viewByManager();
// function viewByManager();

// // function viewAllRoles();
// function viewAllRoles();

//When select Add Employee ***Go through next set of questions***

//Ask following:
    //first_name
    //last_name
    //roleID
    //Who is their manager
//function addEmp();
function addEmp() {
    inquirer.prompt ([{
    type: "input",
    name: "firstName",
    message:"What is the employee's first name?"
    },
    {
    type: "input",
    name: "lastName",
    message:"What is the employee's last name?"    
    },
    {
    type: "input",
    name: "roleId",
    message:"What is the employee's role ID?"    
    },
    {
    type: "input",
    name: "manager",
    message:"Who is the employee's manager?"    
    }]);
};

let response = inquirer.prompt();
console.log ("hi dean...line 109", response.lastName);

async function init(){
    // let newEmployee = [response.lastName, ];
    console.table(response);
}

//     //When user selects "Remove employee", provide list of all employees into a 
//     //list/choices array to select from
//     //When user selects the employee name, displays "Employee has been removed"
// //function removeEmp();
// function removeEmp();



// //When user Selects "Add Role", prompts user to imput a new role
// //display "New role has been added"
// //function addRole();
// function addRole() {
//     inquirer.prompt ({
//         type: "input",
//         name: "title",
//         message:"What is the title of the role?"
//     },
//     {
//         type: "input",
//         name: "salary",
//         message:"What is the salary of the role?"    
//     },
//     {
//         type: "input",
//         name: "deptId",
//         message:"What is the department ID for the role?"    
//     },
//     );
// };

// //When user selects "remove role", provides list of current roles into a 
// //list/choices array to select from
// //when user selects role to remove, displays "Role has successfully been removed"
// //function removeRole();
// function removeRole();


// //When user Selects "Add Dept", prompts user to imput a new dept
// //display "New dept has been added"
// //function addRole();
// function addDept() {
//     inquirer.prompt ({
//         type: "input",
//         name: "deptName",
//         message:"What is the name of the new department?"
//     },
//     {
//         type: "input",
//         name: "deptId",
//         message:"What is the department ID for the role?"    
//     },
//     );
// };

// //When user selects "remove role", provides list of current roles into a 
// //list/choices array to select from
// //when user selects role to remove, displays "Role has successfully been removed"
// //function removeRole();
// function removeDept();


// //When user selects Update Employee role, provide list of all employees into a 
//     //list/choices array to select from
//     //When user selects employee role to update, prompts the user "What is their new role?"
//     //Once new role has been inputed, provide display "employee's role has been updated"
// //function updateEmpRole();
// function updateEmpRole();

// //When user selects Update Employee Manager, provide list of all current employees into a 
//     // //list/choices array to select from
//     // //When user selects employee role to update, prompts the user "Who is their new manager?"
//     // //Once new role has been inputed, display "employee's manager has been updated"
// //function updateEmpMan();
// function updateEmpMan();



//     //When select "view all employees by Department", display *
//     // {
//     // type: "input",
//     // name: "email",
//     // message:"What is the employee's email?"
//     // },
//     // //When Select "view all employees by Manager", display all employees with a manager
//     // {
//     // type: "input",
//     // name: "id",
//     // message:"What is the employee's id number?"
//     // },
//     // //When select Add Employee ***Go through next set of questions***
//     // //Ask following:
//     // //first_name
//     // //last_name
//     // //title
//     // //department
//     // //salary
//     // //Who is their manager
//     // {
//     // type: "input",
//     // name: "officeNumber",
//     // message:"What is the manager's office phone number?",
//     // when: (response) => response.role === 'Manager'
//     // },
//     // //When user selects "Remove employee", provide list of all employees into a 
//     // //list/choices array to select from
//     // //When user selects the employee name, displays "Employee has been removed"
//     // {
//     // type: "input",
//     // name: "github",
//     // message:"What is the engineer's github name?",
//     // when: (response) => response.role === 'Engineer'
//     // },
//     // //When user selects Update Employee role, provide list of all employees into a 
//     // //list/choices array to select from
//     // //When user selects employee role to update, prompts the user "What is their new role?"
//     // //Once new role has been inputed, provide prompt "employee's role has been updated"
//     // {
//     // type: "input",
//     // name: "school",
//     // message:"What is the intern's school?",
//     // when: (response) => response.role === 'Intern'
//     // },
//     // //When user selects Update Employee Manager, provide list of all current employees into a 
//     // //list/choices array to select from
//     // //When user selects employee role to update, prompts the user "Who is their new manager?"
//     // //Once new role has been inputed, provide prompt "employee's manager has been updated"
//     // {
//     // type: "confirm",
//     // name: "addEmployee",
//     // message:"Do you need to add another employee?"
//     // },
//     //When user Selects "Add Role", prompts user to imput a new role
//     //display "New role has been added"




    //When user selects "remove role", provides list of current roles into a 
    //list/choices array to select from
    //when user selects role to remove, displays "Role has successfully been removed"

