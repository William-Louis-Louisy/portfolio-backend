import { jobController } from "../controllers/job.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const express = require("express");
const jobRouter = express.Router();

// ------------------------------

//---- Public routes ----

// Get all jobs
jobRouter.get("/jobs", jobController.getAllJobs);

// Get job by id
jobRouter.get("/job/:id", jobController.getOneJob);

//---- Protected routes ----

// Create job
jobRouter.post("/job", jobController.createJob);

// Update job
jobRouter.put("/job/:id", jobController.updateJob);

// Delete job
jobRouter.delete("/job/:id", jobController.deleteJob);

export default jobRouter;
