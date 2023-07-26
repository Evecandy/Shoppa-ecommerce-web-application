import sql from "mssql";
import { databaseConfig, expressConfig } from "../config/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uid } from "uuid";

export const signup = async (req, res) => {
  try {
    const { username, password, emailAddress } = req.body;
    let pool = await sql.connect(databaseConfig);
    const result = await pool
      .request()
      .input("username", sql.VarChar, username)
      .input("emailAddress", sql.VarChar, emailAddress)
      .query(
        "SELECT * FROM users WHERE username = @username OR emailAddress = @emailAddress"
      );
    const user = result.recordset[0];
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    } else {
      const id = uid();
      const hashedpassword = bcrypt.hashSync(password, 10);  

      await pool
        .request()
        .input ("id" , sql.VarChar, id )
        .input ("username", sql.VarChar, username)
        .input ("emailAddress", sql.VarChar, emailAddress)
        .input("password", sql.VarChar,hashedpassword)
        .execute("createUser")

      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message});
  } finally {
    // sql.close();
  }
};

export const signin = async (req, res) => {
  const { username, password } = req.body;
  let pool = await sql.connect(databaseConfig);
  const result = await pool
    .request()
    .input("username", sql.VarChar, username)
    .query("SELECT * FROM users WHERE username = @username");
  const user = result.recordset[0];
  if (!user) {
    res.status(401).json({ error: "Authentication failed. Wrong cedentials." });
  } else {
    if (!bcrypt.compareSync(password, user.password)) {
      res.status(401).json({ error: "signin not successful" });
    } else {
      const token = jwt.sign({ id: user.id,
      role: user.role }, expressConfig.jwt_secret);
      
      res.status(200).json({
        username: user.username,
        token, role:user.role
      });
    }
  }
};

//lets get all users
export const getUsers = async (req, res) => {
  try {
    let pool = await sql.connect(databaseConfig);
    const resultSet = await pool.request().query("SELECT id, username, emailAddress, dateJoined, role FROM users");
    res.status(200).json(resultSet.recordset);
  } catch (error) {
    res.status(500).json({message:error.message});
  } finally {
    // sql.close();
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
    res.status(500).json({message:error.message});
  } finally {
    // sql.close();
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
    res.status(500).json({message:error.message});
  } finally {
    // sql.close();
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
    res.status(500).json({message:error.message});
  } finally {
    // sql.close();
  }
};

//delete a user
// export const deleteUser = async (req, res) => {
//   try {
//     const { username } = req.params;
//     let pool = await sql.connect(databaseConfig);

//     await sql.query`DELETE FROM users WHERE username = ${username}`;
//     res.status(200).json({ message: "user deleted successfully" });
//   } catch (error) {
//     res.status(500).json(error.message);
//   } finally {
//     sql.close();
//   }
// };
