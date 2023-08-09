import taskController from "../controllers/task.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const express = require("express");
const taskRouter = express.Router();

// ------------------------------

//---- Public routes ----

// Get all tasks
taskRouter.get("/tasks", taskController.getAllTasks);

// Get task by id
taskRouter.get("/task/:id", taskController.getTaskById);

//---- Protected routes ----

// Create task
taskRouter.post("/task", verifyToken, taskController.createTask);

// Update task
taskRouter.put("/task/:id", verifyToken, taskController.updateTask);

// Delete task
taskRouter.delete("/task/:id", verifyToken, taskController.deleteTask);

export default taskRouter;
