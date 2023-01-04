CREATE
OR ALTER PROCEDURE getUser (@email varchar(150)) As Begin
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
    email = @email
End