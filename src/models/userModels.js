import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: true,
        },
        about: {
            type: String,
        },
        history: [{
            type: String,
        }],
        skills: [{
            type: String,
        }],
        rating: {
            type: Number,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        img: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
        password: {
            type: String,
        },
        phone: {
            type: String,
        },
        identity: {
            type: String,
        },
        province: {
            type: String,
        },
        district: {
            type: String,
        },
        sector: {
            type: String,
        },
        street: {
            type: String,
        },
        status: {
            type: String,
            default: "pending",
        },
        role: {
            type: String,
            enum: ["Admin", "Tech", "User"],
            default: "User",
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;