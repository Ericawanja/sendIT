CREATE
OR ALTER Procedure createOrUpdateParcel (
    @orderId varchar(150),
    @sender varchar(200),
    @recepient varchar(200),
    @_from varchar(200),
    @destination varchar(200),
    @weight decimal,
    @price Money,
    @status varchar(150),
    @isdeleted Bit = 0
) AS Begin Declare @exists Bit
select
    @exists = count(orderId)
from
    parcels
where
    orderId = @orderId
    And isdeleted = 0 if @exists = NULL
insert into
    parcels
values
    (
        @orderId,
        @sender,
        @recepient,
        @_from,
        @destination,
        @weight,
        @price,
        @status,
        @isdeleted
    )
    Else
update
    parcels
set
    sender = @sender,
    recepient = @recepient,
    _from = @_from,
    destination = @destination,
    weight = @weight,
    price = @price,
    status = @status
where
    orderId = @orderId
End
Go