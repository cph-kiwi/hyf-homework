-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

CREATE DATABASE School;

CREATE TABLE Class (
    id  INTEGER PRIMARY KEY, 
    name varchar(255),
    begins DATE,
    ends DATE
);

CREATE TABLE Student (
    id INTEGER PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    phone INTEGER,
    class_id INTEGER,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);

CREATE INDEX name
ON Student (name);

ALTER TABLE Class
ADD status ENUM('not-started', 'ongoing', 'finished');
