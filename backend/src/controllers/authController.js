import { Login, verifyToken } from "../services/authServices.js";

const login = (req, res) => {
    try {
        const { email, password } = req.body;
        const data = Login(email, password);
        res.json(data);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Token não fornecido" });

    try {
        req.user = verifyToken(token);
        next();
    } catch {
        res.status(401).json({ message: "Token inválido" });
    }
};

export { login, authenticate };
