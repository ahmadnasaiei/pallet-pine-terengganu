import express from "express";
import { createProduct, getAllProducts } from "../controllers/productController.js";

const router = express.Router();

router.app.get('/', getAllProducts);
router.app.post('/', createProduct);

export default router;