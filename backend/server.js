
import express from 'express';
import cors from 'cors';
import { expressConfig } from './config/index.js';
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js';
import orderRouter from './routes/order.routes.js';
import paymentRouter from './routes/payment.routes.js';
import dotenv from 'dotenv';
import Stripe from'stripe';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Initializing stripe with my secret key
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion:'2020-08-27'
// });

app.use("/users", userRouter)
app.use("/products", productRouter )
app.use("/cart", cartRouter )
app.use("/orders",orderRouter )
app.use("/stripe",paymentRouter )

// app.post("/checkout-session", async (req,res) =>{
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${url}?success=true`,
//     cancel_url: `${url}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

app.listen(expressConfig.port, () => {
  console.log('Server is running at ' + expressConfig.url);
});