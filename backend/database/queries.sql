
CREATE DATABASE Shoppa;
USE Shoppa;

CREATE TABLE Users (
  UserID VARCHAR (100) PRIMARY KEY,
  Username VARCHAR(50),
  EmailAddress VARCHAR(100),
  Password VARCHAR(8)
);

DROP TABLE Users;

CREATE TABLE Products ( 
  ProductID VARCHAR (100) PRIMARY KEY,
  Productname VARCHAR (100),
  Productlink VARCHAR (450),
  Category VARCHAR (100)
);


CREATE TABLE PaymentMethods (
    PaymentMethodID VARCHAR(200) PRIMARY KEY,
    PaymentMethodName VARCHAR(50),
    Date datetimeoffset DEFAULT SYSDATETIMEOFFSET(),
    Description VARCHAR(255)
);


CREATE TABLE Orders (
 OrderID VARCHAR (400) PRIMARY KEY,
 DateOfOrder datetimeoffset DEFAULT SYSDATETIMEOFFSET(),
 OrderStatus VARCHAR (50),
 ProductID VARCHAR (100),
 UserID VARCHAR (100),
 FOREIGN KEY (UserID) REFERENCES Users(UserID),
 FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

DROP TABLE Orders;