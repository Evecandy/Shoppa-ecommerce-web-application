import sql from "mssql";
import config from "../database/config.js";

//add a new product
export const addProduct = async (req, res) => {
  try {
    const { ProductName, Image, Category } = req.body;
    let pool = await sql.connect(config.sql);
    await pool
      .request()
      .input("ProductName", sql.VarChar, ProductName)
      .input("Image", sql.Decimal, Image)
      .input("Category", sql.VarChar, Category)

      .query(
        "INSERT INTO Products ( ProductName,Image, Category) VALUES ( @ProductName, @Image, @Category)"
      );
    res.status(200).json({ message: "product added successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  } finally {
    // sql.close();
  }
};

//get all products
export const getProducts = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    const resultSet = await pool.request().query("SELECT * FROM Products");
    res.status(200).json(resultSet.recordset);
  } catch (error) {
    res.status(220).json(error.message);
  } finally {
    sql.close();
  }
};
//get one product:productID:
export const getOneProduct = async (req, res) => {
    try {
      const { ProductID } = req.params;
      let pool = await sql.connect(config.sql);
      const resultSet = await pool
        .request()
  
        .input("ProductID", sql.VarChar, ProductID)
        .query("SELECT * FROM Users WHERE ProductID = @ProductID");
      console.log(resultSet.recordset);
      res.status(200).json(resultSet);
    } catch (error) {
      res.status(500).json(error.message);
    } finally {
      sql.close();
    }
  };

//delete a product
export const deleteProduct = async (req, res) => {
  // console.log('deleted succesfully');
  // res.status(204).json({message:"deleted"})
  try {
    const { ProductID } = req.params;
    let pool = await sql.connect(config.sql);

    await pool.request().input("ProductID", sql.Int, ExpenseID)
      .query`DELETE FROM Products WHERE ProductID = @ProductID`;
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  } finally {
    // sql.close();
  }
};

//update a product

export const updateProduct = async (req, res) => {
  try {
    const { ProductID } = req.params;
    const { ProductName, Image, Category } = req.body;
    console.log(req.body);
    let pool = await sql.connect(config.sql);
    const resultset = await pool
      .request()
      .input("ProductID", sql.Int, ProductID)
      .input("ProductName", sql.VarChar, ProductName)
      .input("Image", sql.VarChar, Image)
      .input("Category", sql.VarChar, Category)
      .query(
        "UPDATE Expenses SET ProductName=@ProductName, Image=@Image, Category=@Category WHERE ProductID=@ProductID"
      );
    res.status(200).json({ message: "Product was updated successfully" });
  } catch (error) {
    res.status(400).json(error.message);
  } finally {
    // sql.close();
  }
};
