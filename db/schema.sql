/* Create and use the starwars db */
CREATE DATABASE  `burgers`;
USE `burgers`;

/* Create a table for all your star wars characters */
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` TINYINT NOT NULL DEFAULT 0,
	`date` TIMESTAMP,

	PRIMARY KEY ( `id` ) ); /* Set ID as primary key */
