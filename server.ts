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

const allowedOrigins = [
  "https://www.williamlouislouisy.com",
  "https://williamlouislouisy.com",
  "https://william-louis-louisy-portfolio.vercel.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:4200",
];

// MIDDLEWARE
const corsOptions: cors.CorsOptions = {
  origin(origin, cb) {
    if (!origin) return cb(null, true);
    cb(null, allowedOrigins.includes(origin));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
  ],
  maxAge: 600,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
setupRoutes(app);

// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`🟢 Listening on port ${process.env.PORT}`);
});
