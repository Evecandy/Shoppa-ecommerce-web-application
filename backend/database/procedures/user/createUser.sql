
CREATE OR ALTER PROCEDURE createUser(
    @id VARCHAR (100),
    @username VARCHAR (50),
    @emailAddress VARCHAR (100),
    @password  VARCHAR (200) 
)
AS 
BEGIN
    INSERT INTO users 
        (id, username,emailAddress, password)
        VALUES (@id, @username, @emailAddress, @password);
END