import { Router } from "express";
import {catchErrors} from "../helpers.js";
import { addUser } from "../controllers/UsersController.js";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.get('/api', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

router.post('/api/users', catchErrors(addUser));

export default router;