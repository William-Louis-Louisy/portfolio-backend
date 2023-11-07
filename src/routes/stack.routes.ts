import { stackController } from "../controllers/stack.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const express = require("express");
const stackRouter = express.Router();

// ------------------------------

//---- Public routes ----

// Get all stack items
stackRouter.get("/stacks", stackController.getAllStacks);

// Get stack item by id
stackRouter.get("/stack/:id", stackController.getStackById);

//---- Protected routes ----

// Create stack item
stackRouter.post("/stack", stackController.createStack);

// Update stack item
stackRouter.put("/stack/:id", stackController.updateStack);

// Delete stack item
stackRouter.delete("/stack/:id", stackController.deleteStack);

export default stackRouter;
