import { Router } from "express";
import { verifyUser } from "../middlewares/auth.js";
import { createCheckoutSession } from "../controllers/payment.controller.js";

const paymentRouter = Router()
    // app.route('/create-session')
        paymentRouter.post("/create-checkout-session",createCheckoutSession)


export default paymentRouter
