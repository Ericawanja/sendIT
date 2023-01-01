CREATE
OR ALTER PROCEDURE register(
    @id varchar(150),
    @firstname varchar(150),
    @lastname varchar(150),
    @email varchar(250),
    @password varchar(300),
    @isAdmin Bit = 0
) AS Begin
Insert into
    users (
        id,
        firstname,
        lastname,
        email,
        password,
        isAdmin
    )
values
    (
        @id,
        @firstname,
        @lastname,
        @email,
        @password,
        @isAdmin
    )
End
go