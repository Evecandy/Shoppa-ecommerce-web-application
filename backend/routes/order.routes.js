
//lets get all users
export const getUsers = async (req, res) => {
    try {
      let pool = await sql.connect(databaseConfig);
      const resultSet = await pool.request().query("SELECT * FROM users");
      res.status(200).json(resultSet.recordset);
    } catch (error) {
      res.status(220).json(error.message);
    } finally {
      sql.close();
    }
  };
  
  //get a user:id:
  export const getOneUser = async (req, res) => {
    try {
      const { id } = req.params;
      let pool = await sql.connect(databaseConfig);
      const resultSet = await pool
        .request()
  
        .input("id", sql.VarChar, id)
        .query("SELECT * FROM users WHERE id = @id");
      res.status(200).json(resultSet.recordset);
    } catch (error) {
      res.status(500).json(error.message);
    } finally {
      sql.close();
    }
  };
  
  //create a user/ add a user
  export const createusers = async (req, res) => {
    try {
      const { username, password, emailAddress } = req.body;
      let pool = await sql.connect(databaseConfig);
      await pool
        .request()
  
        .input("username", sql.VarChar, username)
        .input("emailAddress", sql.VarChar, emailAddress)
        .input("password", sql.VarChar, password)
        .query(
          "INSERT INTO users ( username, emailAddress, password) VALUES ( @username, @emailAddress, @password)"
        );
      res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json(error.message);
    } finally {
      sql.close();
    }
  };
  
  //update a user
  export const updateUser = async (req, res) => {
    try {
      const{id} = req.params;
      const { username } = req.params;
      const { emailAddress } = req.body;
      const { password } = req.body;
      let pool = await sql.connect(databaseConfig);
      const resultset = await pool
        .request()
        .input("id", sql.VarChar, id )
        .input("username", sql.VarChar, username)
        .input("emailAddress", sql.VarChar, emailAddress)
        .input("password", sql.VarChar, password)
        .query("UPDATE users SET password=@password WHERE id=@id");
      res.status(200).json({ message: "User password was updated successfully" });
    } catch (error) {
      res.status(400).json(error.message);
    } finally {
      sql.close();
    }
  };