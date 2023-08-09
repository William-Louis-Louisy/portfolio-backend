import { Response, Request } from "express";
import stackModels from "../models/stack.models";

// STACK CONTROLLER
export const stackController = {
  // CREATE STACK
  createStack: async function (req: Request, res: Response) {
    const { name, icon } = req.body;

    try {
      if (!name) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const stack = await stackModels.create({
        name,
        icon,
      });

      res.status(201).json({ stack: stack._id });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET ALL STACKS
  getAllStacks: async function (req: Request, res: Response) {
    try {
      const stacks = await stackModels.find();

      if (!stacks || stacks.length === 0) {
        return res.status(404).json({ error: "No stacks found" });
      }

      res.status(200).json(stacks);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET STACK BY ID
  getStackById: async function (req: Request, res: Response) {
    try {
      const stack = await stackModels.findById(req.params.id);

      if (!stack) {
        return res.status(404).json({ error: "No stack found" });
      }

      res.status(200).json(stack);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // UPDATE STACK
  updateStack: async function (req: Request, res: Response) {
    const { name, icon } = req.body;

    try {
      if (!name) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const stack = await stackModels.findByIdAndUpdate(
        req.params.id,
        {
          name,
          icon,
        },
        { new: true }
      );

      res
        .status(200)
        .json({
          status: 200,
          data: stack,
          message: "Stack successfully updated",
        });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // DELETE STACK
  deleteStack: async function (req: Request, res: Response) {
    try {
      const stack = await stackModels.findByIdAndDelete(req.params.id);

      if (!stack) {
        return res.status(404).json({ error: "No stack found" });
      }

      res.status(200).json({ message: "Stack successfully deleted" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
