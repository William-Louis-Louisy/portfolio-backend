import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { setupRoutes } from "./routes";
require("dotenv").config();

// DATABASE CONNECTION
mongoose
  .connect(`${process.env.MONGO_URL}`, {
    autoIndex: true,
  })
  .then(() => console.log("🟢 Connected to database"))
  .catch((err: any) => console.log(err));

const app = express();

// MIDDLEWARE
app.use(
  cors({
    origin: [
      "*",
      "localhost:4200",
      "http://localhost:4200",
      "https://william-louis-louisy-portfolio.vercel.app",
      "william-louis-louisy-portfolio.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Origin",
    ],
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
setupRoutes(app);

// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`🟢 Listening on port ${process.env.PORT}`);
});
