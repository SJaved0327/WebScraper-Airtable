### Schema

CREATE DATABASE airtable_books_db;
USE airtable_books_db;

CREATE TABLE books (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(300) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	nowDate TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);