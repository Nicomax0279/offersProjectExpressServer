
create table offer(
id int primary key auto_increment,
companyID int  ,
title varchar(40),
career varchar(30),
shortText varchar(250),
text  varchar(500),
modality varchar(30),
active BOOLEAN DEFAULT true,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT company_fk FOREIGN KEY (comapanyID) REFERENCES company(id)
);


ALTER TABLE offer
add CONSTRAINT modality_check FOREIGN KEY (modality) REFERENCES modality(description),
add CONSTRAINT career_check FOREIGN KEY (career) REFERENCES career(name);
