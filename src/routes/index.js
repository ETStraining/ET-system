import express from "express";
import userRoute from "./users.routes";

const router = express.Router();

router.use("/users", userRoute);
export default router;
