import { stackController } from "../controllers/stack.controllers";

const express = require("express");
const stackRouter = express.Router();

// Create stack
stackRouter.post("/stack", stackController.createStack);

// Get all stacks
stackRouter.get("/stacks", stackController.getAllStacks);

export default stackRouter;
