import express, { Router } from "express";
import { contactController } from "../controllers/contact.controllers";

const contactRouter: Router = express.Router();

// CREATE CONTACT
contactRouter.post("/contact/send-mail", contactController.sendMail);

export default contactRouter;
