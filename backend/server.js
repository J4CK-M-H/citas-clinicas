import express from 'express';
import userRoutes from './routes/userRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

app.use('/usuario', userRoutes);
app.use('/doctor', doctorRoutes);


app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});