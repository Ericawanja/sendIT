CREATE
OR ALTER PROCEDURE getCustomerParticularParcel (
@customerId varchar(150),
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
    isdeleted = 0 AND customerId= @customerId AND orderId= @orderId
End
go