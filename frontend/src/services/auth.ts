import api from "./api";

interface dataType {
    email: string;
    password: string;
}

export const login = async (data: dataType) => {
    try {
        const response = await api.post("/auth/login", data);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};