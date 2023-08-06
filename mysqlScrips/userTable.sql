create table user (
id int primary key auto_increment,
username varchar(50) unique,
password varchar(100),
names varchar(50),
surnames varchar(50),
career varchar(30),
description varchar(250),
birthdate date ,
img varchar(200),
active BOOLEAN DEFAULT true,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT user_career_check FOREIGN KEY (career) REFERENCES career(name)

);

