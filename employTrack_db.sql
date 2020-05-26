DROP DATABASE IF EXISTS employeeTrack_db;
CREATE DATABASE employeeTrack_db;
USE employeeTrack_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary INT,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES manager(id),
    PRIMARY KEY (id)
);

SELECT * FROM department;

select first_name AS 'First Name', last_name AS 'Last Name', name AS 'Department' FROM employeeTrack_db.employees, employeeTrack_db.department WHERE roles.department_id = department.id;

AND employeeTrack_db.roles.id = roles.id;

INSERT INTO employees(first_name,last_namee,role_id) VALUES ('jack','wallen',1);