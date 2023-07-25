import sql from "mssql";
import { v4 as uid } from "uuid";
import { databaseConfig } from "../config/index.js";

// add an order
export const createOrder = async (req, res) => {
  try {
    let pool = await sql.connect(databaseConfig);
    const cart = (
      await pool
        .request()
        .input("userID", sql.VarChar, req.auth.id)
        .query(`SELECT c.id, c.quantity, c.userID, c.productID, p.name, p.price, p.image, p.category
        FROM cart c
        LEFT JOIN
        products p
        ON c.productID = p.id
        WHERE c.userID = @userID`)
    ).recordset;
    if (!cart.length ){
        return res.status(400).json({message:"Cart is empty, unable to make order"})
    }

    const id = uid();
    await pool
      .request()
      .input("id", sql.VarChar, id)
      .input("userID", sql.Decimal, req.auth.id)
      .query("INSERT INTO orders ( id,userID) VALUES ( @id, @userID )");
    for ( let i=0; i < cart.length; i++){
        const item = cart[i]
        const saleID = uid()
        await pool 
            .request()
            .input("id", sql.VarChar, saleID)
            .input("orderID", sql.VarChar, id)
            .input("productID", sql.VarChar, item.productID)
            .input("quantity", sql.Int, item.quantity)
            .input("price", sql.Decimal, item.price)
            .query( "INSERT INTO sales (id, orderID, productID, quantity, price) VALUES (@id, @orderID, @productID, @quantity, @price")
    }
    return res.status(201).json({ message: "Order added successfully", id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

// get orders

export const getOrders = async (req, res) => {
  try {
    let pool = await sql.connect(databaseConfig);
    const resultSet = await pool.request().query("SELECT * FROM orders");
    res.status(200).json(resultSet.recordset);
  } catch (error) {
    res.status(500).json({ message: error.message });
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

    const order = resultSet.recordset[0];
    order
      ? res.status(200).json(resultSet.recordset[0])
      : res
          .status(404)
          .json({ message: `Order with ID ${id} is not available` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    sql.close();
  }
};
