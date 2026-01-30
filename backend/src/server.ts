import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './router.ts';
import { connectDB } from './config/db.ts';
import { corsConfig } from './config/cors.ts';

connectDB();

const app = express();

// Cors
app.use(cors(corsConfig))

//leer datos de formulario

app.use(express.json());

app.use('/', router);


export default app;