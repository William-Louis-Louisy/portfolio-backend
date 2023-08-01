import featureController from "../controllers/feature.controllers";

const express = require("express");
const featureRouter = express.Router();

// Create feature
featureRouter.post("/feature", featureController.createFeature);

// Get all features
featureRouter.get("/features", featureController.getAllFeatures);

export default featureRouter;
