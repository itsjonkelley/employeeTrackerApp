INSERT INTO department (name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_name)
VALUES
('John', 'Doe', 1, Ashley Rodriguez),
('Mike', 'Chan', 2, Ashley Rodriguez),
('Ashley', 'Rodriquez', 3, Ashley Rodriguez),
('Kevin', 'Tupik', 4, Ashley Rodriguez),
('Malia', 'Brown', 5, Ashley Rodriguez),
('Sarah', 'Lourd', 6, Ashley Rodriguez),
('Tom', 'Allen', 7, Ashley Rodriguez);
