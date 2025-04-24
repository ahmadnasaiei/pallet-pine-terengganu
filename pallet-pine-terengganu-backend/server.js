import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js";
import authRoutes from "./routes/authRoute.js";
import { initUserTable } from "./models/userModel.js";
import { initProductTable } from "./models/productModel.js";
import bcrypt from "bcrypt";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet()); // helmet is a security middleware that helps to protect app by setting various HTTP headers
app.use(morgan("dev")); // log the request

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// initialize DB
await initUserTable();
await initProductTable();

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// user: pptadmin
// pass: pptadminpassword
