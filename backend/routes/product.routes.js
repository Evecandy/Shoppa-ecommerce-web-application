import { Router } from "express";
import multer from 'multer';
import { adminOnly } from "../middlewares/auth.js";
import { addProduct } from "../controllers/product.controller.js";
import { getProducts} from "../controllers/product.controller.js"


const productRouter = Router()

const upload = multer({ storage: multer.memoryStorage() });

productRouter.post('', adminOnly, upload.fields([{name: 'file'}, {name: 'json'}]), addProduct )
productRouter.get("", getProducts) 

export default productRouter;
