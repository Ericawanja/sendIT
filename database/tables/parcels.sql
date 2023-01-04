create table parcels(
    orderId varchar(150) unique NOT NULL,
    customerid varchar(150) FOREIGN KEY REFERENCES USERS(id),
    _from varchar(200) NOT NULL,
    destination varchar(200) NOT NULL,
    weight DECIMAL NOT NULL,
    price Money NOT NULL,
    status varchar(150) NOT NULL,
    isdeleted BIT default 0
)