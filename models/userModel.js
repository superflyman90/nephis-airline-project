import mongoose from "mongoose";
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required:true
        },
        lastname: {
            type: String,
            required:true
        },
        username: {
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
        },
        country: {
            type: Schema.Types.ObjectId,
            ref: "Country"
        },
        Birthday: {
            type: Date,
            required : true,
        },
        Simulator : {
            type: Schema.Types.ObjectId,
            ref: "Simulator"
        },
        Password: {
            type: String,
            required: true
        },
        Logs:{
            type: Schema.Types.ObjectId,
            ref: "Logs"
        },
        VastimID: {
            type: String,
            required: false
        },
        IvaoID: {
            type: String,
            required: false
        },
        Roles: {
            type: Schema.Types.ObjectId,
            ref: "Roles"
        },
        token : {
            type: String,
            required: false
        }
    }
);

const User = mongoose.model("User", UserSchema);

export default User;