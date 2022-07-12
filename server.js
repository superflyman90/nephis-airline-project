import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/routes.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})