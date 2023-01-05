CREATE
OR ALTER PROCEDURE getCustomerParcels (@customerId varchar(150)) As Begin
select
    orderId,
    sender,
    recepient,
    _from,
    destination,
    weight,
    price,
    status parcels
from
    parcels
where
    isdeleted = 0
    AND sender = @customerId
    OR recepient = @customerId
End
go