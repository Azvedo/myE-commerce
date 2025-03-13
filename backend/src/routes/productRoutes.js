import express from "express";


const router = express.Router();

router.get("/products", );

router.post("/product", (req, res) => {
    res.send("Product created!");
});


export default router;