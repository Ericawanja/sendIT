CREATE
OR ALTER PROCEDURE getAllParcels As Begin
select
    orderId,
    sender,
	recepient,
    _from,
    destination,
    weight,
    price,
    status
from
    parcels
where
    isdeleted = 0
End