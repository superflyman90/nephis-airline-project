import mongoose from "mongoose";
const { Schema } = mongoose;
const TokenSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        token : {
            type: String,
            required: false
        },
        createdAt:{
            type:Date,
        },
        expiredAt:{
            type:Date
        }
    }
);

const User = mongoose.model("User", UserSchema);

export default Token;