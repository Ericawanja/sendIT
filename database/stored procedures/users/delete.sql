CREATE
OR ALTER PROCEDURE deleteUser(@id varchar(150)) As Begin
Update
    users
Set
    isdeleted = 1
where
    id = @id
End
go