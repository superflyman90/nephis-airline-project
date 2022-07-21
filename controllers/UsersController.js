import UserModel from '../models/userModel.js';
import jwt from "jsonwebtoken"

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
    res.status(200).json(req.user)
}

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id  }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    getMe,
}
export const getUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    res.send(user);
}

export const updateUser = async (req, res) => {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
    await user.save();
    res.send(user);
}

export const deleteUser = async (req, res) => {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
        res.status(404).send('User not found');
    }
    res.status(200).send();
}