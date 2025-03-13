import express from 'express';
import cors from 'cors';
import dontenv from 'dotenv';
import router from './routes/productRoutes.js';

dontenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
