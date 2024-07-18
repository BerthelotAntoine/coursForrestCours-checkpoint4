CREATE TABLE role (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(80) DEFAULT "User"
);

CREATE TABLE category (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  course VARCHAR(255),
  triathlon VARCHAR(255)
);

CREATE TABLE city(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT ,
  longitude FLOAT
);

CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL, 
  role_id INT UNSIGNED,
  FOREIGN KEY (role_id) REFERENCES role (id)
);

CREATE TABLE course (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  descriptif VARCHAR(500) NOT NULL,
  distance VARCHAR(255) NOT NULL,
  date DATETIME NOT NULL,
  user_id INT UNSIGNED,
  FOREIGN KEY (user_id) REFERENCES user (id),
  city_id INT UNSIGNED,
  FOREIGN KEY (city_id) REFERENCES city (id),
  category_id INT UNSIGNED,
  FOREIGN KEY (category_id) REFERENCES category (id)
);