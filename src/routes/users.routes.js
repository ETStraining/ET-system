import express from "express";
import { createUser, deleteUser, getAllUsers, getOneUser, login, updateUser, forgotPassword, resetPassword } from "../controllers/users.controller";
const userRoute = express.Router();

userRoute.get("/", getAllUsers);
userRoute.get("/:id", getOneUser);
userRoute.post("/",  createUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);
userRoute.post("/auth", login);
userRoute.post("/forgot-password", forgotPassword);
userRoute.post("/reset-password", resetPassword);

export default userRoute;
