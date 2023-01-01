CREATE
OR ALTER PROCEDURE updateUser(
    @id varchar(150),
    @firstname varchar(150),
    @lastname varchar(150),
    @email varchar(250),
    @password varchar(300),
    @isAdmin Bit = 0,
    @isCompleted Bit = 0
) As Begin
Update
    users
Set
    firstname = @firstname,
    lastname = @lastname,
    email = @email,
    password = @password,
    isAdmin = @isAdmin,
    isCompleted = @isCompleted
where
    id = @id
End
go