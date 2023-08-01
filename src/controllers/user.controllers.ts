import jwt from "jsonwebtoken";
import { Response, Request } from "express";
import userModels from "../models/user.models";

export interface JwtPayload extends jwt.JwtPayload {
  id: string;
  isAdmin: boolean;
}

// CREATE TOKEN
const maxAge = 3 * 24 * 60 * 60; // 3 days
const createToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: maxAge,
  });
};

// USER CONTROLLER
export const userController = {
  // CREATE USER
  createUser: async function (req: Request, res: Response) {
    const { username, email, password, role } = req.body;

    try {
      const user = await userModels.create({
        username,
        email,
        password,
        role,
      });

      const token = createToken(user._id);

      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ user: user._id });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // LOGIN USER
  login: async function (req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await userModels.login(email, password);

      const token = createToken(user._id);

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
        secure: process.env.NODE_ENV === "production",
        domain: ".localhost",
      });
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // LOGOUT USER
  logout: function (req: Request, res: Response) {
    return res
      .clearCookie("jwt", {
        domain: ".localhost",
      })
      .status(200)
      .json({ message: "Logged out" });
  },
};
