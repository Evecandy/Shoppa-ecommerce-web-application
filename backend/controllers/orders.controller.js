import sql from "mssql";
import { v4 as uid } from "uuid";
import { databaseConfig } from "../config/index.js";


// add an order
export const addToOrder = async (req, res) => {
    try {
      const { dateOfOrder, orderStatus, userID } = JSON.parse(req.body.json);
      const id = uid();

      let pool = await sql.connect(databaseConfig);
      await pool
        .request()
        .input("dateOfOrder", sql.Date, dateOfOrder)
        .input("orderStatus", sql.VarChar, orderStatus)
        .input("userID", sql.Decimal, userID)

        .query(
          "INSERT INTO orders ( id, dateOfOrder, orderStatus, userID) VALUES ( @id, @dateOfOrder, @orderStatus, @userID )"
        );
  
      return res.status(201).json({message:"Order added successfully", id});
  
    } catch (error) {
          return res.status(500).json({message:error.message});
    }
  };

// get orders

export const getOrders = async (req, res) => {
    try {
      let pool = await sql.connect(databaseConfig);
      const resultSet = await pool.request().query("SELECT * FROM orders");
      res.status(200).json(resultSet.recordset);
    } catch (error) {
      res.status(500).json({message:error.message});
    } finally {
      sql.close();
    }
  };

//get one specific order

export const getOneOrder = async (req, res) => {
    try {
      const { id } = req.params;
      let pool = await sql.connect(databaseConfig);
      const resultSet = await pool
        .request()
        .input("id", sql.VarChar, id)
        .query("SELECT * FROM orders WHERE id = @id");
      
      const order = resultSet.recordset[0]
      order ? res.status(200).json(resultSet.recordset[0]) : res.status(404).json({message: `Order with ID ${id} is not available`})
      
    } catch (error) {
      res.status(500).json({message:error.message});
    } finally {
      sql.close();
    }
  };