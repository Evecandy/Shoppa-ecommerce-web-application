import { Router } from "express";
import { getUsers, signin, signup } from "../controllers/user.controller.js"


const userRouter = Router()
userRouter.post("", signup)
userRouter.post("/signin", signin)
userRouter.get("", getUsers) 



export default userRouter;
