import { jobController } from "../controllers/job.controllers";

const express = require("express");
const jobRouter = express.Router();

// Create job
jobRouter.post("/job", jobController.createJob);

// Get all jobs
jobRouter.get("/jobs", jobController.getAllJobs);

// Get job by id
jobRouter.get("/job/:id", jobController.getOneJob);

export default jobRouter;
