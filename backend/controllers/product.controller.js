
import sql from "mssql";
import { v4 as uid } from "uuid";
import { databaseConfig } from "../config/index.js";
import { uploadFileToFirebase } from "../firebase.js";

function renameFile(file, id) {
  const fileNameWithoutExtension = file.originalname.split('.').slice(0, -1).join('.');
  const fileExtension = file.originalname.split('.').pop();
  const newFilename = fileNameWithoutExtension + "_" + id + "." + fileExtension;
 // Return the modified file object with the new name
  return {
    ...file,
    originalname: newFilename
  };
}

export const addProduct = async (req, res) => {
  try {
    const { name, price, category } = JSON.parse(req.body.json);
    const id = uid();
    // throw new Error('my error')
    const renamedFile = await renameFile(req.files["file"][0], id);
    const downloadURL = await uploadFileToFirebase(renamedFile);

    let pool = await sql.connect(databaseConfig);
    await pool
      .request()
      .input("id", sql.VarChar, id)
      .input("name", sql.VarChar, name)
      .input("price", sql.Decimal, price)
      .input("image", sql.VarChar, downloadURL)
      .input("category", sql.VarChar, category)

      .query(
        "INSERT INTO products ( id, name, price, image, category) VALUES ( @id, @name, @price, @image, @category)"
      );

    return res.status(201).json({message:"Product added successfully", id});

  } catch (error) {
        return res.status(500).json({message:error.message});
  }
};

export const getProducts = async (req, res) => {
  try {
    let pool = await sql.connect(databaseConfig);
    const resultSet = await pool.request().query("SELECT * FROM products");
    res.status(200).json(resultSet.recordset);
  } catch (error) {
    res.status(500).json({message:error.message});
  } finally {
    // sql.close();
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let pool = await sql.connect(databaseConfig);
    const resultSet = await pool
      .request()
      .input("id", sql.VarChar, id)
      .query("SELECT * FROM products WHERE id = @id");
    
    const product = resultSet.recordset[0]
    product ? res.status(200).json(resultSet.recordset[0]) : res.status(404).json({message: `Product with ID ${id} is not available`})
    
  } catch (error) {
    res.status(500).json({message:error.message});
  } finally {
    // sql.close();
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let pool = await sql.connect(databaseConfig);

    await sql.query`DELETE FROM products WHERE id = ${id}`;
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({message:error.message});
  } finally {
    // sql.close();
  }
};

export const updateProduct = async (req, res) => {
  try {
    const{id} = req.params;
    const { name } = req.params;
    const { price} = req.body;
    const { image } = req.body;
    const { category } = req.body;
    let pool = await sql.connect(databaseConfig);
    const resultset = await pool
      .request()
      .input("id", sql.VarChar, id )
      .input("name", sql.VarChar, name)
      .input("price", sql.Decimal, price)
      .input("image", sql.VarChar, image)
      .input("category", sql.VarChar, category)
      .query("UPDATE products SET price=@price WHERE id=@id");
    res.status(200).json({ message: "product price was updated successfully" });
  } catch (error) {
    res.status(500).json({message:error.message});
  } finally {
    // sql.close();
  }
};

// getting products by category
export const getProductsByCategory= async (req, res) => {
  try {
    const { category } = req.params;
    let pool = await sql.connect(databaseConfig);
    const resultSet = await pool.request()
    .input("category", sql.VarChar, category)
    .query("SELECT * FROM products WHERE category = @category");
    res.status(200).json(resultSet.recordset);
  } catch (error) {
    res.status(500).json({message:error.message});
  } finally {
    // sql.close();
  }
};