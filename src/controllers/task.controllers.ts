import { Response, Request } from "express";
import taskModels from "../models/task.models";

// TASK CONTROLLER
const taskController = {
  // CREATE TASK
  createTask: async function (req: Request, res: Response) {
    const { name, description, name_fr, description_fr } = req.body;

    try {
      if (!name || !description || !name_fr || !description_fr) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const task = await taskModels.create({
        name,
        description,
        name_fr,
        description_fr,
      });

      res.status(201).json({ task: task._id });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET ALL TASKS
  getAllTasks: async function (req: Request, res: Response) {
    try {
      const tasks = await taskModels.find();

      if (!tasks || tasks.length === 0) {
        return res.status(400).json({ error: "No task found" });
      }

      res.status(200).json({ tasks });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET TASK BY ID
  getTaskById: async function (req: Request, res: Response) {
    const { id } = req.params;

    try {
      const task = await taskModels.findById(id);

      if (!task) {
        return res.status(400).json({ error: "No task found" });
      }

      res.status(200).json({ task });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // UPDATE TASK
  updateTask: async function (req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, name_fr, description_fr } = req.body;

    try {
      if (!name || !description || !name_fr || !description_fr) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const task = await taskModels.findByIdAndUpdate(
        id,
        {
          name,
          description,
          name_fr,
          description_fr,
        },
        { new: true }
      );

      if (!task) {
        return res.status(400).json({ error: "No task found" });
      }

      res.status(200).json({ task });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // DELETE TASK
  deleteTask: async function (req: Request, res: Response) {
    const { id } = req.params;

    try {
      const task = await taskModels.findByIdAndDelete(id);

      if (!task) {
        return res.status(400).json({ error: "No task found" });
      }

      res.status(200).json({ success: "Task deleted" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};

export default taskController;
