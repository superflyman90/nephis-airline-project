import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(routes)
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})