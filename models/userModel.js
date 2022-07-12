import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            validate: {
                validator: function(value) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                    );
                },
                message: "Invalid email address"
            },
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            ]
        }
    }
);

const User = mongoose.model("User", UserSchema);

export default User;