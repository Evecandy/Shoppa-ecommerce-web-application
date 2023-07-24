import { Router } from "express";
import { addToCart, clearCart, getCart, removeFromCart, updateCartItem,  } from "../controllers/cart.controller.js";
import { verifyUser } from "../middlewares/auth.js";

const cartRouter=Router()

cartRouter.post("", verifyUser, addToCart)
cartRouter.get("", verifyUser, getCart)
cartRouter.delete("", verifyUser, clearCart)
cartRouter.delete("/:id", verifyUser, removeFromCart)
cartRouter.patch("/:id", verifyUser, updateCartItem)


export default cartRouter;
