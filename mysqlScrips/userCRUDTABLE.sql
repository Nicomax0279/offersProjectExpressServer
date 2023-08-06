use usercrud
create table users (
	id int   primary key auto_increment,
	name varchar(50) not null,
	surname varchar(50) not null,
	email varchar(50) not null unique,
	estate tinyint not null default 1,
	createdAt TIMESTAMP  null,
	updatedAt TIMESTAMP null
);