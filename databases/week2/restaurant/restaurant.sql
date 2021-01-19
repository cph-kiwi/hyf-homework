-- Using an entity relationship diagram, design the data model for an application of your choice. This can be anything, previous students have used a small business (with staff, offices, and job titles), a library (with books, genres, racks, members, and a borrowing log), or a farm (with animals, barns, and farmers).

-- Your application must include at least one many-to-many relationship and any supporting tables (linking tables) that are needed. The entity relationship diagram must describe what tables you will need, the columns in these tables, which column is the primary key, and the relationships between tables.

-- Next, using the entity relationship diagram as a starting point, write all the necessary CREATE TABLE statements to create all tables and relationships (foreign key constraints) for this data model.

-- Submit an image or PDF of your entity relationship diagram, and a .sql file with the CREATE TABLE statements.


CREATE DATABASE Restaurant;

USE Restaurant;

CREATE TABLE Customer (
    id  INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(120) NOT NULL,
    last_name VARCHAR(120) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(120) UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE Employee (
    id  INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(120) NOT NULL,
    last_name VARCHAR(120) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(120) UNIQUE,
    position ENUM('owner', 'manager', 'waiter', 'bar-staff', 'chef', 'kitchen-hand', 'cleaner'),
    hire_date DATE,
    salary INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Payment (
    id INT NOT NULL AUTO_INCREMENT,
    amount INT NOT NULL,
    receipt_number INT NOT NULL,
    employee_id INT,
    customer_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id) REFERENCES Employee(id),
    FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

CREATE TABLE Occupancy (
    id INT NOT NULL AUTO_INCREMENT,
    number_of_guests INT,
    table_number ENUM('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'),
    event_date TIMESTAMP,
    employee_id INT,
    customer_id INT,
    payment_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id) REFERENCES Employee(id),
    FOREIGN KEY (customer_id) REFERENCES Customer(id),
    FOREIGN KEY (payment_id) REFERENCES Payment(id)
);

ALTER TABLE Payment
ADD occupancy_id INT;

ALTER TABLE Payment
ADD CONSTRAINT FOREIGN KEY (occupancy_id) REFERENCES Occupancy(id);

