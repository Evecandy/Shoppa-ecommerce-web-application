import { Router } from "express";
import { adminOnly } from "../middlewares/auth";
import { verifyUser } from "../middlewares/auth";
import { addToOrder, getOrders } from "../controllers/orders.controller";
import { adminOnly } from "../middlewares/auth";

const orderRouter = Router()

orderRouter.post("", verifyUser, addToOrder)
orderRouter.get("", verifyUser,getOrders)
orderRouter.get("/:id", '', adminOnly)

export default orderRouter;