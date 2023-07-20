
import sql from "mssql";
import { v4 as uid } from "uuid";
import { databaseConfig } from "../config/index.js";
import { uploadFileToFirebase } from "../firebase.js";

function renameFile(file, id) {
  const fileNameWithoutExtension = file.originalName.split('.').slice(0, -1).join('.');
  const fileExtension = file.originalName.split('.').pop();
  const newFilename = fileNameWithoutExtension + "_" + id + "." + fileExtension;
 // Return the modified file object with the new name
  return {
    ...file,
    originalname: newFilename
  };
}

export const addProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body.json;
    const id = uid();
    const renamedFile = await renameFile(req.files["file"][0]);


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
    sql.close();
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
    res.status(200).json(resultSet.recordset);
  } catch (error) {
    res.status(500).json(error.message);
  } finally {
    sql.close();
  }
};

export const createproducts = async (req, res) => {
  try {
    const { name, price, image, category } = req.body;
    let pool = await sql.connect(databaseConfig);
    await pool
      .request()

      .input("name", sql.VarChar, name)
      .input("price", sql.Decimal, price)
      .input("image", sql.VarChar, image)
      .input("category", sql.VarChar, category)

      .query(
        "INSERT INTO products ( name, price, image, category) VALUES ( @name, @price, @image, @category)"
      );
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  } finally {
    sql.close();
  }
};


