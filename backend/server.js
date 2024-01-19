import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
dotenv.config();
const port = process.env.PORT || 5000;
connectDB(); //connect to mongoose
const app = express();
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", router);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server running on port ${port}.`));
