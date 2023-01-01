CREATE
OR ALTER PROCEDURE getUser (@id varchar(150)) As Begin
select
    id,
    firstname,
    lastname,
    email,
    password,
    isAdmin
from
    users
where
    id = @id
End