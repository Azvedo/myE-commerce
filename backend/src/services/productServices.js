import db from "../config/firebaseConfig";

export const getProducts = async () => {
    const products = [];
    const productsCollection = db.collection("products");
    const snapshot = await productsCollection.get();
    snapshot.forEach((doc) => {
        products.push(doc.data());
    });
    return products;
};

export const createProduct = async (product) => {
    const productsCollection = db.collection("products");
    await productsCollection.add(product);
    return "Product created!";
}

export const getProductById = async (id) => {
    const productsCollection = db.collection("products");
    const product = await productsCollection.doc(id).get();
    return product.data();
}

export const updateProduct = async (id, product) => {
    const productsCollection = db.collection("products");
    await productsCollection.doc(id).update(product);
    return "Product updated!";
}

export const deleteProduct = async (id) => {
    const productsCollection = db.collection("products");
    await productsCollection.doc(id).delete();
    return "Product deleted!";
}
