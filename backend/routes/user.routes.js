import { Router } from "express";
import { getOneUser, getUsers, signin, signup, updateUser } from "../controllers/user.controller.js"


const userRouter = Router()
userRouter.post("", signup)
userRouter.post("/signin", signin)
userRouter.get("", getUsers) 
userRouter.get("/:id", getOneUser)
userRouter.patch("/:id", updateUser)



export default userRouter;

