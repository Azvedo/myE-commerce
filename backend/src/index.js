import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productRouter from './routes/productRoutes.js';
import authrouter from './routes/authRoutes.js'; // 🔹 Importando as rotas de autenticação

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', productRouter);
app.use('/api/auth', authrouter); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
