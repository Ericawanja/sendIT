CREATE
OR ALTER PROCEDURE getOneParcel (
@orderId varchar(150)
)

As Begin
select
    orderId,
    customerId,
    _from,
    destination,
    weight,
    price,
    status
from
    parcels
where
    isdeleted = 0 AND orderId= @orderId
End
go