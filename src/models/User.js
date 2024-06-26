import mongoose from "mongoose";
const UserSchema =new  mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true,
    },
    username: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product",
        }
    ]
}, { timestamps: true });


export const User = mongoose.models.User || mongoose.model("User", UserSchema);