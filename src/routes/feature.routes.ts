import featureController from "../controllers/feature.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const express = require("express");
const featureRouter = express.Router();

// ------------------------------

//---- Public routes ----

// Get all features
featureRouter.get("/features", featureController.getAllFeatures);

// Get feature by id
featureRouter.get("/feature/:id", featureController.getFeatureById);

//---- Protected routes ----

// Create feature
featureRouter.post("/feature", featureController.createFeature);

// Update feature
featureRouter.put("/feature/:id", featureController.updateFeature);

// Delete feature
featureRouter.delete("/feature/:id", featureController.deleteFeature);

export default featureRouter;
