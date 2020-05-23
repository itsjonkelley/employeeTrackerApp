DROP DATABASE IF EXISTS employeeTrack_db;
CREATE DATABASE employeeTrack_db;
USE employeeTrack_db;

CREATE TABLE department (
    id INT NOT NULL,
    name varchar (30),
    primary key (id)
);

CREATE TABLE roles (
    id INT NOT NULL,
    title varchar (30),
    salary DECIMAL (8,2),
    departme
    primary key (id)
);

CREATE TABLE employees (
    id INT NOT NULL,
    first_name varchar (30),
    last_name varchar (30),
    FOREIGN KEY 
    primary key (id)
);