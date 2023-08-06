create table company(
id int primary key auto_increment,
username varchar(40) unique,
password varchar(100),
name varchar(40) unique,
description varchar(250),
active BOOLEAN DEFAULT true,
logo varchar(180),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);