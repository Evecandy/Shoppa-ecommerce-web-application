
import express from 'express';
import cors from 'cors';
import { expressConfig } from './config/index.js';
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/users", userRouter)
app.use("/products", productRouter )
app.use("/cart", cartRouter )
// app.use("/orders", )

app.listen(expressConfig.port, () => {
  console.log('Server is running at ' + expressConfig.url);
});