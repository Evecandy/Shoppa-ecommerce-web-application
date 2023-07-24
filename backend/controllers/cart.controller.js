import sql from "mssql";
import { databaseConfig } from "../config/index.js";
import { v4 as uid } from "uuid";

export const addToCart = async (req, res) => {
  try {
    const { productID } = req.body;
    let pool = await sql.connect(databaseConfig);

    const cart = (await pool.request()
    .input("userID", sql.VarChar, req.auth.id)
    .query("SELECT * FROM cart WHERE userID=@userID")).recordset;

    const item = cart.length ? cart.find(item => item.productID === productID) : null

    if (item) {
      await pool.request()
      .input("id", sql.VarChar, item.id)
      .input('quantity', sql.Int, item.quantity + 1)
      .query("UPDATE cart SET quantity=@quantity WHERE id=@id").recordset;
      return res.status(200).json({ message: " Updated cart item successfully", id: item.id });

    } else {
      const id = uid();
      await pool
        .request()
        .input("id", sql.VarChar, id)
        .input("productID", sql.VarChar, productID)
        .input("userID", sql.VarChar, req.auth.id)
        .query(
          "INSERT INTO cart ( id, productID, userID) VALUES ( @id, @productID, @userID)"
        );
  
      return res.status(201).json({ message: " Added to cart successfully", id });
    }

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    let pool = await sql.connect(databaseConfig);
    const resultSet = await pool.request().query("SELECT * FROM cart");
    res.status(200).json(resultSet.recordset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    sql.close();
  }
};

export const updateCartItem = async (req,res) =>{

}

export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    let pool = await sql.connect(databaseConfig);

    await sql.query`DELETE FROM products WHERE id = ${id}`;
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    sql.close();
  }
};

export const clearCart = async (req, res) => {};
