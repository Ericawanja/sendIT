CREATE
OR ALTER PROCEDURE getCustomerParcels (
@customerId varchar(150)
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
    isdeleted = 0 AND customerId= @customerId
End
go