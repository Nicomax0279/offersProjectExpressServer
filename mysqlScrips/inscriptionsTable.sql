create table inscription (
id int primary key auto_increment,
offerID int,
userID int,
text varchar(300),


active BOOLEAN DEFAULT true,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
constraint uniq_user_offer unique(offerID,userID) ,
constraint fk_ins_user FOREIGN key (userID) references user(id),
constraint fk_ins_offer FOREIGN key (offerID) references offer(id)
)
