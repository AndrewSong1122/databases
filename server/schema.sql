CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* This table holds the messages for storage on the server.
     Some keys are shared with other tables .*/
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  message_text TEXT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id)
    REFERENCES users(id),
  FOREIGN KEY(room_id)
    REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name TEXT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  room_name TEXT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE friends (
  user1 INT NOT NULL,
  user2 INT NOT NULL,
  FOREIGN KEY(user1)
    REFERENCES users(id),
  FOREIGN KEY(user2)
    REFERENCES users(id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

