CREATE
OR ALTER PROCEDURE getCustomerParticularParcel (
    @customerId varchar(150),
    @state varchar(150)
) As Begin 
if(@state = 'sent')
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
Else
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
    AND recepient = @customerId
End
go