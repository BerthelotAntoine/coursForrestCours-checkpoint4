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

INSERT INTO role (id, role) VALUES
(1, 'Admin'),
(2, 'User'),
(3, 'Manager'),
(4, 'Support'),
(5, 'Guest');

INSERT INTO user (firstname, lastname, email, password, role_id) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', 2),
('Jane', 'Smith', 'jane.smith@example.com', 'password456', 2),
('Michael', 'Johnson', 'michael.johnson@example.com', 'password789', 3),
('Emily', 'Brown', 'emily.brown@example.com', 'passwordABC', 4),
('David', 'Wilson', 'david.wilson@example.com', 'passwordXYZ', 5);

INSERT INTO category (id, course, triathlon) VALUES
(1, '10km', 'triathlonM'),
(2, 'semi-marathon', 'triathlonS'),
(3, 'marathon', 'triathlonL'),
(4, '10km', 'triathlonM'),
(5, '10km', 'triathlonM');