
import express from 'express';
import cors from 'cors';
import { expressConfig } from './config/index.js';
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/users", userRouter)
app.use("/products", productRouter )

app.listen(expressConfig.port, () => {
  console.log('Server is running at ' + expressConfig.url);
});