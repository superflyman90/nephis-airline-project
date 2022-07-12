import UserModel from '../models/userModel.js';

export const addUser = async (req, res) => {
    const user = new UserModel(req.body)

    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}

export const getUsers = async (req, res) => {    
        const users = await UserModel.find({});
        res.send(users);    
}
