import { Router } from "express";
import {catchErrors} from "../helpers.js";
import { addUser, getUsers, getUser, updateUser, deleteUser } from "../controllers/UsersController.js";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.get('/api', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})


// Routes for crud users
router.post('/api/users', catchErrors(addUser));
router.get('/api/users', catchErrors(getUsers));
router.get('/api/users/{id}', catchErrors(getUser));
router.put('/api/users/{id}', catchErrors(updateUser));
router.delete('/api/users/{id}', catchErrors(deleteUser));


// Routes for crud simulators


// Routes for crud Logs


// Routes for crud rôles


//Routes for crud countries

export default router;