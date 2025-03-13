import express from "express";
import { getAllProducts, getProduct, addProduct, removeProduct, changeProduct } from "../controllers/productController.js";


const router = express.Router();

router.get("/products", getAllProducts);
router.get("/product/:id", getProduct);
router.post("/product", addProduct);
router.put("/product/:id", changeProduct);
router.delete("/product/:id", removeProduct);

export default router;