-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

CREATE DATABASE School;

USE School;

CREATE TABLE Class (
    id int AUTO_INCREMENT,
    PRIMARY KEY (id), 
    name varchar(255),
    begins DATE,
    ends DATE
);

CREATE TABLE Student (
    id int AUTO_INCREMENT,
    PRIMARY KEY (id),
    name varchar(200),
    email varchar(120),
    phone varchar(20),
    class_id int,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);

CREATE INDEX name
ON Student (name);

ALTER TABLE Class
ADD status ENUM('not-started', 'ongoing', 'finished');
