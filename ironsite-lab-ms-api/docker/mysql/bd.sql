CREATE DATABASE IF NOT EXISTS ironsite;
USE ironsite;
CREATE TABLE IF NOT EXISTS users(
  id int(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(60) NOT NULL,
  password VARCHAR(60) NOT NULL,
  email VARCHAR(60) NOT NULL,
  PRIMARY KEY(id)
);
INSERT INTO users VALUE ("", "jhonnatan", "123456", "jjhoncv@gmail.com");
CREATE TABLE IF NOT EXISTS products (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(200) NOT NULL,
  code varchar(200) NOT NULL,
  price FLOAT(10, 2) NOT NULL,
  description varchar(200) NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO products VALUE (
    "",
    "Celular Samsumg 5G 256 RAM",
    "45688",
    "4599.00",
    "Celular ultima generación para su uso"
  );
CREATE TABLE IF NOT EXISTS banners (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(200) NOT NULL,
  description varchar(200) NOT NULL,
  image varchar(200) NOT NULL,
  orden int(11) NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO banners VALUE (
    "",
    "Cambia tu forma de Pensar",
    "Since our establishment, we have been delivering high-quality and ... ",
    "intro-img2.jpg",
    "0"
  );