-- Create all the sql for creating the data model

CREATE DATABASE MealSharing;

USE MealSharing;

CREATE TABLE Meal (
id INT AUTO_INCREMENT,
title VARCHAR(200),
description TEXT,
location VARCHAR(200),
`when` DATETIME,
max_reservations INT,
price INT,
created_date DATE,
PRIMARY KEY (id)
);

CREATE TABLE Reservation (
id INT AUTO_INCREMENT,
number_of_guests INT NOT NULL,
meal_id INT,
created_date DATE,
contact_phonenumber VARCHAR(20) NOT NULL,
contact_name VARCHAR(200) NOT NULL,
contact_email VARCHAR(100),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

CREATE TABLE Review (
id INT AUTO_INCREMENT,
title VARCHAR(200),
description TEXT,
meal_id INT,
stars INT,
created_date DATE,
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

-- Create these queries:

-- Meal queries

SELECT *
FROM Meal;

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Mexican Fiesta", "A relaxed yet sprightly dining experience, where tacos and guacamole share attention with lip-smacking margaritas", "Rødovre", "2021-01-30 19:00:00", 10, 150, "2021-01-20");

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Full English Breakfast", "A full English breakfast starting with a bloody mary, followed by sausages, bacon, hashbrowns, baked-beans, fried eggs, mushrooms, tomatoes and toast with coffee or tea and orange juice", "Hvidovre", "2021-01-30 10:00:00", 8, 200, "2021-01-20");

SELECT *
FROM Meal
WHERE id=1;

UPDATE Meal
SET max_reservations = 8
WHERE id=1;

DELETE FROM Meal
WHERE id=1;

-- Reservation queries

SELECT *
FROM Reservation;

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 2, "2021-01-25", "45 45 30 30", "Andreas Møller", "andreas.moller@gmail.com");

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 2, "2021-01-26", "46 46 31 31", "Freyja Jackson", "freyja.jackson@gmail.com");

SELECT *
FROM Reservation
WHERE id=1;

UPDATE Reservation
SET number_of_guests = 4
WHERE id=2;

DELETE FROM Reservation
WHERE id=1;

-- Review queries

SELECT *
FROM Review;

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ("Delightful", "We had a charming time with the host, and the food was delicious", 2, 4, "2021-02-02");

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ("Shame about the other guests", "While the food and drinks were tasty, we found the other guests to be a little too quite. We had hoped for more conversation.", 2, 3, "2021-02-01");

SELECT *
FROM Review
WHERE id=2;

UPDATE Review
SET stars = 5
WHERE id=1;

DELETE FROM Review
WHERE id=2;

-- Additional queries

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Family friendly", "Bring your children and share in a healthy yet tasty meal, relaxed and informal setting", "Valby", "2021-01-30 18:00:00", 15, 180, "2021-01-21");

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Formal and sophisticated", "Martinis and hors d'oeuvres to start, followed by roast beef tenderloin with cognac butter, carrot mash with crème fraîche, and shredded brussels sprouts with slow-fried shallots, and pudding to finish", "Valby", "2021-01-30 18:00:00", 15, 180, "2021-01-21");

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Murder Mystery", "Miss Fisher's Mystery 1920's cocktail upon arrival, killer kebabs for dinner and death by chocolate cake for dessert", "Islands Brygge", "2021-01-30 20:00:00", 12, 200, "2021-01-22");

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 3, "2021-01-26", "47 47 32 32", "Anna Mason", "anna.mason@gmail.com");

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 4, "2021-01-26", "48 48 33 33", "Stuart Faithful", "stuart.faithful@gmail.com");

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 4, "2021-01-27", "49 49 34 34", "Nicola Swanson", "nicola.swanson@gmail.com");

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ("Relaxing", "Will thoroughly recommend this host, very chilled out", 3, 4, "2021-02-02");

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ("Exciting", "I have never been to a themed dinner party like this before. Such fun!", 6, 5, "2021-02-01");

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ("Fightfully good", "The host went all out with the murder mystery theme. I would definitely recommend this to a friend or participate another time.", 6, 5, "2021-02-03");

-- Get meals that have a price smaller than a specific price

SELECT price
FROM Meal
WHERE price < 160;

-- Get meals that still have available reservations

SELECT subset.id, subset.title, subset.description, subset.location, subset.`when`, subset.max_reservations, subset.price, subset.created_date
FROM (
SELECT Meal.*, SUM(Reservation.number_of_guests) AS reservation_guests
FROM Meal
INNER JOIN Reservation ON Meal.id=Reservation.meal_id
GROUP BY Meal.id) AS subset
WHERE reservation_guests <=max_reservations;

-- OR...

SELECT *
FROM Meal
WHERE Meal.max_reservations > (
    SELECT SUM(Reservation.number_of_guests)
    FROM Reservation
    WHERE Reservation.meal_id = Meal.id
    );

-- Get meals that partially match a title

SELECT *
FROM Meal
WHERE title LIKE 'Mexic%';

-- Get meals that have been created between two dates

SELECT *
FROM Meal
WHERE created_date BETWEEN '2021-01-22' AND '2021-01-23';

-- Get only specific number of meals

SELECT *
FROM Meal
LIMIT 2;

-- Get the meals that have good reviews

SELECT DISTINCT Meal.*
FROM Meal
INNER JOIN Review ON Meal.id=Review.meal_id
WHERE Review.stars = 5;

-- Get reservations for a specific meal sorted by created_date

SELECT *
FROM Reservation
WHERE meal_id = 4
ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews

SELECT Meal.*
FROM Meal
INNER JOIN Review ON Meal.id=Review.meal_id
ORDER BY (
    SELECT AVG(Review.stars)
    FROM Review
    );

