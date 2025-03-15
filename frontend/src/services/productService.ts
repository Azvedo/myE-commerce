import api from "./api";

interface Product {
    name: string;
    price: number;
    url_image: string;
}

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getProducts = async () => {
    try {
        const response = await api.get("/products");
        return response.data;      
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getProduct = async (id: string) => {
    try {
        const response = await api.get(`/product/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const createProduct = async (data: Product) => {
    try {
        const response = await api.post("/product", data, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const updateProduct = async (id: string, data: Product) => {
    try {
        const response = await api.put(`/product/${id}`, data, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const deleteProduct = async (id: string) => {
    try {
        const response = await api.delete(`/product/${id}`, {
            headers: getAuthHeaders()
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
