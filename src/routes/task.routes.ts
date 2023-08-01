import taskController from "../controllers/task.controllers";

const express = require("express");
const taskRouter = express.Router();

// Create task
taskRouter.post("/task", taskController.createTask);

// Get all tasks
taskRouter.get("/tasks", taskController.getAllTasks);

// Get task by id
taskRouter.get("/task/:id", taskController.getTaskById);

// Update task
taskRouter.put("/task/:id", taskController.updateTask);

// Delete task
taskRouter.delete("/task/:id", taskController.deleteTask);

export default taskRouter;
