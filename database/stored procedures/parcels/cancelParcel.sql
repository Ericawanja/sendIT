CREATE
OR ALTER Procedure CancelParcel(@orderId varchar(150))
 AS BEGIN
delete from
    parcels
where
    orderId = @orderId
END