import { userController } from "../controllers/user.controllers";

const express = require("express");
const userRouter = express.Router();

// CREATE USER
userRouter.post("/register", userController.createUser);

// LOGIN USER
userRouter.post("/login", userController.login);

// LOGOUT USER
userRouter.get("/logout", userController.logout);

export default userRouter;
