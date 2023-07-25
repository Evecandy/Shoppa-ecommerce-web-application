import { Router } from "express";
import { verifyUser } from "../middlewares/auth.js";
import { createOrder, getOneOrder, getOrders } from "../controllers/orders.controller.js";

const orderRouter = Router()

orderRouter.post("", verifyUser, createOrder)
orderRouter.get("", verifyUser,getOrders)
orderRouter.get("/:id", verifyUser, getOneOrder)



export default orderRouter;