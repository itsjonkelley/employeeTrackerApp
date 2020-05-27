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
      "View All Employees",
      "Add Employee",
      "Remove Employee",
      "View All Roles",
      "Add Role",
      "Remove Role",
      "View All Departments",
      "Add Department",
      "Remove Department",
      "View All Employees by Department",
      "View All Employees by Manager",
      "Update Employee Role",
      "Update Employee Manager"
    ],
    })
    .then(response => {
      init(response.nextStep);
    });
};


async function init(choice){
  let response;
  switch(choice) {
  //EMPLOYEES: VIEW, ADD, REMOVE
      case 'View All Employees' : viewAllEmp(); break; //MINIMUM - done
      case 'Add Employee' : {
          response = await addEmp();
          console.log(response.firstName);
          console.log(response.lastName);
          console.log(response.roleId);
          console.log(response.manager);
          let sqlEmp = `INSERT INTO employees (first_name, last_name, role_id, manager_name)
                        VALUES ('${response.firstName}', '${response.lastName}', '${response.roleId}', '${response.manager}');`
          connection.query(sqlEmp, function (err, result) {
            if (err) throw err;
            console.log("New Employee Added!");
          });   
          break;} //MINIMUM
      case 'Remove Employee' : removeEmp(); break; //BONUS
  //ROLES: VIEW, ADD, REMOVE
      case 'View All Roles' : viewAllRoles(); break; //MINIMUM - done
      case 'Add Role' : {
          response = await addRole();
          break;} //MINIMUM
      case 'Remove Role' : removeRole(); break; //BONUS
  //DEPARTMENTS: VIEW, ADD, REMOVE
      case 'View All Departments' : viewAllDept(); break; //MINIMUM - done
      case 'Add Department' : {
          response = await addDept();
          break;}  //MINIMUM
      case 'Remove Department' : removeDept(); break; //BONUS
      //views by criteria
      case 'View All Employees by Department' : viewEmpByDept(); break; //BONUS - done
      case 'View All Employees by Manager' : viewByManager(); break; //BONUS
      //UPDATES
      case 'Update Employee Role' : updateEmpRole(); break; //MINIMUM
      case 'Update Employee Manager' : updateEmpMan(); break; //BONUS
  };

}



//View functions:
//VIEW ALL EMPLOYEES FXN*****
function viewAllEmp() {
  var query = connection.query("SELECT first_name AS 'First Name', last_name AS 'Last Name' FROM employeeTrack_db.employees", function(err, res) {
    if (err) throw err;
    console.log("");
    console.table(res);
});
questionsBegin();
};

//VIEW ALL EMPLOYEES FXN*****
function viewAllRoles() {
  var query = connection.query("SELECT title AS 'Role Title' FROM employeeTrack_db.roles", function(err, res) {
    if (err) throw err;
    console.log("");
    console.table(res);
});
questionsBegin();
};

//VIEW ALL DEPARTMENTS FXN*****
function viewAllDept() {
  var query = connection.query("SELECT name AS 'Department Title' FROM employeeTrack_db.department", function(err, res) {
    if (err) throw err;
    console.log("");
    console.table(res);
});
questionsBegin();
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
 async function addEmp() {
    return inquirer.prompt ([{
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
    message:"What is the employee's manager ID?"    
    }]);
  };

// let query2 = connection.connect(
//   "INSERT INTO employees SET ?",
//   {
//       first_name: first_name,
//       last_name: last_name,
//       role_id: role_id,
//       manager_id: manager_id
//   },
//   function (err, res) {
//       if (err) throw err;
//       // console.log(divider.repeat(120));
//       // console.log(res.affectedRows + " new Employee inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//   }
// );




//     //When user selects "Remove employee", provide list of all employees into a 
//     //list/choices array to select from
//     //When user selects the employee name, displays "Employee has been removed"
// //function removeEmp();
// function removeEmp();



//When user Selects "Add Role", prompts user to imput a new role
//display "New role has been added"
//function addRole();
async function addRole() {
  return inquirer.prompt ([{
        type: "input",
        name: "title",
        message:"What is the title of the role?"
    },
    {
        type: "input",
        name: "salary",
        message:"What is the salary of the role?"    
    },
    {
        type: "input",
        name: "deptId",
        message:"What is the department ID for the role?"    
    },
  ]);
};

// //When user selects "remove role", provides list of current roles into a 
// //list/choices array to select from
// //when user selects role to remove, displays "Role has successfully been removed"
// //function removeRole();
// function removeRole();


//When user Selects "Add Dept", prompts user to imput a new dept
//display "New dept has been added"
//function addRole();
function addDept() {
  return inquirer.prompt ([{
        type: "input",
        name: "deptName",
        message:"What is the name of the new department?"
    },
    {
        type: "input",
        name: "deptId",
        message:"What is the department ID for the role?"    
    },
  ]);
};

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



    // // When select "view all employees by Department", display *
    function viewEmpByDept() {
      var query = connection.query("select first_name AS 'First Name', last_name AS 'Last Name', name AS 'Department' FROM employeeTrack_db.employees, employeeTrack_db.department, employeeTrack_db.roles WHERE employeeTrack_db.roles.department_id = employeeTrack_db.department.id AND employeeTrack_db.roles.id = employeeTrack_db.employees.role_id", function(err, res) {
        if (err) throw err;
        console.log("");
        console.table(res);
    })
    questionsBegin();
    };

      

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
    // When user Selects "Add Role", prompts user to imput a new role
    // display "New role has been added"




    //When user selects "remove role", provides list of current roles into a 
    //list/choices array to select from
    //when user selects role to remove, displays "Role has successfully been removed"