ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '042006';

CREATE DATABASE final_task;

USE final_task;

CREATE TABLE user_app(
    id_user INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_user VARCHAR(40),
    email_user VARCHAR(40)
);

INSERT INTO user_app (name_user, email_user) VALUES
    ('Daniel Avila', 'davilaqu@gmail.com'),
    ('Martín Montoya', 'mmontoya@outlook.com');

USE final_task;

DELIMITER $$
USE `final_task`$$

CREATE PROCEDURE `userAddOrEdit` (
  IN _id INT,
  IN _name VARCHAR(40),
  IN _email VARCHAR(40)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO user_app (name_user, email_user )
    VALUES (_name, _email);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE user_app
    SET
    name_user = _name,
    email_user = _email
    WHERE id_user = _id;
  END IF;

  SELECT _id AS 'id_user';
END
