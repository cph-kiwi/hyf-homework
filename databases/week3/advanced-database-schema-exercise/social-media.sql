-- You have to design a database schema for a social media website for HackYourFuture.

CREATE DATABASE HYFSocialMedia;

USE HYFSocialMedia;

CREATE TABLE User (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
email VARCHAR(120) UNIQUE,
password VARCHAR(100),
registration_date DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE Post (
id INT NOT NULL AUTO_INCREMENT,
content VARCHAR(120) NOT NULL,
creation_date DATETIME,
update_date DATETIME,
post_author_id INT,
PRIMARY KEY (id),
FOREIGN KEY (post_author_id) REFERENCES User(id)
);

CREATE TABLE Comment (
id INT NOT NULL AUTO_INCREMENT,
content VARCHAR(120) NOT NULL,
creation_date DATETIME,
update_date DATETIME,
comment_author_id INT,
post_id INT,
parent_comment_id INT, -- can be NULL
PRIMARY KEY (id),
FOREIGN KEY (comment_author_id) REFERENCES User(id),
FOREIGN KEY (post_id) REFERENCES Post(id),
FOREIGN KEY (parent_comment_id) REFERENCES Comment(id),
);

-- It should be possible for a user to react to the same thing with multiple reaction types, eg. "like" and "laugh" on the same post.

-- It should however not be possible for a user to react to something with the same reaction type more than once.

CREATE TABLE Reaction (
id INT NOT NULL AUTO_INCREMENT,
reaction ENUM('like', 'highfive', 'laugh', 'cry'),
user_id INT,
post_id INT,
comment_id INT,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES User(id),
FOREIGN KEY (post_id) REFERENCES Post(id),
FOREIGN KEY (comment_id) REFERENCES Comment(id)
);

CREATE UNIQUE INDEX reaction_index ON Reaction (user_id, reaction, post_id, comment_id);

INSERT INTO User (name, email, password, registration_date)
VALUES ("Beth Jackson", "beth.jack@gmail.com", "secretz", "2021-01-19 14:20:15");

INSERT INTO User (name, email, password, registration_date)
VALUES ("Andreas Møller", "andreas.moller@gmail.com", "misterie", "2021-01-20 09:45:30");

INSERT INTO Post (content, creation_date, post_author_id)
VALUES ("Insane weather today!", "2021-01-21 10:05:12", 1);

INSERT INTO Post (id, content, update_date, post_author_id)
VALUES (1, "Insanely snowy weather today!", "2021-01-21 12:14:32", 1);

INSERT INTO Post (content, creation_date, post_author_id)
VALUES ("Finally finshed my homework.", "2021-01-21 08:39:51", 2);

INSERT INTO Comment (content, creation_date, comment_author_id, post_id)
VALUES ("Agreed, I got very wet.", "2021-01-21 14:46:22", 2, 1);

INSERT INTO Comment (id, content, update_date, comment_author_id, post_id)
VALUES (1, "Agreed, I got very wet, and my dog did NOT like it.", "2021-01-21 16:46:22", 2, 1);

INSERT INTO Comment (content, creation_date, comment_author_id, parent_comment_id)
VALUES ("I'm sorry to hear your dog doesn't enjoy the snow.", "2021-01-21 20:13:08", 1, 1);

INSERT INTO Comment (id, content, update_date, comment_author_id, parent_comment_id)
VALUES (2, "Maybe your dog needs a little coat.", "2021-01-21 20:23:37", 1, 1);

INSERT INTO Reaction (reaction, user_id, post_id)
VALUES ("like", 2, 1);

-- This should work
INSERT INTO Reaction (reaction, user_id, post_id)
VALUES ("laugh", 2, 1);

-- This shouldn't work
INSERT INTO Reaction (reaction, user_id, post_id)
VALUES ("like", 2, 1);

INSERT INTO Reaction (reaction, user_id, comment_id)
VALUES ("cry", 1, 1);


