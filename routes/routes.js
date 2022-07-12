import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.get('/api', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

export default router;