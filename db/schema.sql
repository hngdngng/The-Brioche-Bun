-- Drop database burgers_db if it exists
DROP DATABASE IF EXISTS burgers_db;

-- Create database
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create table
CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);