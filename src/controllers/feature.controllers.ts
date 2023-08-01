import { Response, Request } from "express";
import featureModels from "../models/feature.models";

// FEATURE CONTROLLER
const featureController = {
  // CREATE FEATURE
  createFeature: async function (req: Request, res: Response) {
    const { name, description, name_fr, description_fr } = req.body;

    try {
      if (!name || !description || !name_fr || !description_fr) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const feature = await featureModels.create({
        name,
        description,
        name_fr,
        description_fr,
      });

      res.status(201).json({ feature: feature._id });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET ALL FEATURES
  getAllFeatures: async function (req: Request, res: Response) {
    try {
      const features = await featureModels.find();

      if (!features || features.length === 0) {
        return res.status(400).json({ error: "No feature found" });
      }

      res.status(200).json({ features });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET FEATURE BY ID

  // UPDATE FEATURE

  // DELETE FEATURE
};

export default featureController;
