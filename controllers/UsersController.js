import UserModel from '../models/userModel.js';

export const addUser = async (req, res) => {
    const user = new UserModel(req.body)

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.Password, salt)

    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}