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
    salary DECIMAL (8,2),
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (deparment_id) REFERENCES department(id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT,
    manager_name VARCHAR (30) NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    PRIMARY KEY (id)
);