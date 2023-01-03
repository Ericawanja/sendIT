CREATE TABLE users (
    id varchar(150) Primary key,
    firstname varchar(150) NOT NULL,
    lastname varchar(150) NOT NULL,
    email varchar(250) NOT NULL unique,
    password varchar(300) NOT NULL,
    isAdmin Bit Default 0,
    isCompleted Bit Default 0,
    isDeleted Bit default 0
)