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

      res.status(200).json(features);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET FEATURE BY ID
  getFeatureById: async function (req: Request, res: Response) {
    try {
      const feature = await featureModels.findById(req.params.id);

      if (!feature) {
        return res.status(400).json({ error: "No feature found" });
      }

      res.status(200).json(feature);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // UPDATE FEATURE
  updateFeature: async function (req: Request, res: Response) {
    const { name, description, name_fr, description_fr } = req.body;

    try {
      if (!name || !description || !name_fr || !description_fr) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const feature = await featureModels.findByIdAndUpdate(
        req.params.id,
        {
          name,
          description,
          name_fr,
          description_fr,
        },
        { new: true }
      );

      res.status(200).json({
        status: 200,
        data: feature,
        message: "Feature successfully updated",
      });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // DELETE FEATURE
  deleteFeature: async function (req: Request, res: Response) {
    try {
      const feature = await featureModels.findByIdAndDelete(req.params.id);

      if (!feature) {
        return res.status(400).json({ error: "No feature found" });
      }

      res.status(200).json({ message: "Feature deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};

export default featureController;
