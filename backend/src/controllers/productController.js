import { getProducts, getProductById, createProduct, updateProduct, deleteProduct} from "../services/productServices.js";


export const getAllProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await getProductById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addProduct = async (req, res) => {
    const product = req.body;
    try {
        const response = await createProduct(product);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const changeProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    try {
        const response = await updateProduct(id, product);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const removeProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await deleteProduct(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

