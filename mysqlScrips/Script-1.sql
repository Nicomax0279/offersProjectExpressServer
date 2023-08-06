
select offer.* , count(i.offerID) as inscriptions from offer inner join inscription i on offer.id = i.offerID  where offer.companyID = 1
group by offer.id 

select `offer`.*, `count(inscription`.`offerID`)` from `offer` inner join `inscription` on `inscription`.`offerID` = `offer`.`id` where `offer`.`companyID` = 1 group by `offer`.`id