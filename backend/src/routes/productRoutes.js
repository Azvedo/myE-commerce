import express from "express";
import { getAllProducts, getProduct, addProduct, removeProduct, changeProduct } from "../controllers/productController.js";
import { authenticate } from "../controllers/authController.js"; // 🔹 Importa o middleware de autenticação

const productRouter = express.Router();

productRouter.get("/products", getAllProducts);
productRouter.get("/product/:id", getProduct);
productRouter.post("/product", authenticate, addProduct);
productRouter.put("/product/:id", authenticate, changeProduct);
productRouter.delete("/product/:id", authenticate, removeProduct);


export default productRouter;