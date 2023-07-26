import { Router } from "express";
import multer from 'multer';
import { adminOnly } from "../middlewares/auth.js";
import { addProduct, deleteProduct, getOneProduct, getProductsByCategory,updateProduct } from "../controllers/product.controller.js";
import { getProducts} from "../controllers/product.controller.js"


const productRouter = Router()

const upload = multer({ storage: multer.memoryStorage() });

productRouter.post('', adminOnly, upload.fields([{name: 'file'}, {name: 'json'}]), addProduct )
productRouter.get("", getProducts) 
productRouter.get("/:id", getOneProduct)
productRouter.delete("/:id", deleteProduct)
productRouter.patch("/:id", updateProduct)
productRouter.get("/cat/:category", getProductsByCategory)

export default productRouter;
