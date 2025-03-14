import jwt from 'jsonwebtoken';

const SECRET_KEY = "mysecretkey";

const User = {
    email:"admin@email.com",
    password : "Senhasegura123",
};

const Login = (email, password) => {
    if(email === User.email && password === User.password){
        const token = jwt.sign({email: email}, SECRET_KEY, {expiresIn: "1h"});
        return token;
    }
    throw new Error("Email ou senha inválidos");
}

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch (error) {
        throw new Error("Token inválido");
    }
}

export { Login, verifyToken };