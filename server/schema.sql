DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;



DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(150) NOT NULL ,
  `username` VARCHAR(20) NOT NULL,
  `roomname` VARCHAR(20),
  `time_stamp` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
);

