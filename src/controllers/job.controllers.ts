import { Response, Request } from "express";
import jobModels from "../models/job.models";

// JOB CONTROLLER
export const jobController = {
  // CREATE JOB
  createJob: async function (req: Request, res: Response) {
    const {
      company,
      logo,
      title,
      title_fr,
      startDate,
      endDate,
      description,
      description_fr,
    } = req.body;

    try {
      if (
        !company ||
        !logo ||
        !title ||
        !title_fr ||
        !startDate ||
        !endDate ||
        !description ||
        !description_fr
      ) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const job = await jobModels.create({
        company,
        logo,
        title,
        title_fr,
        startDate,
        endDate,
        description,
        description_fr,
      });

      res.status(201).json({ job: job._id });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET ALL JOBS
  getAllJobs: async function (req: Request, res: Response) {
    try {
      const jobs = await jobModels.find();

      if (!jobs || jobs.length === 0) {
        return res.status(400).json({ error: "No jobs found" });
      }
      res.status(200).json(jobs);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET ONE JOB
  getOneJob: async function (req: Request, res: Response) {
    try {
      const job = await jobModels.findById(req.params.id);
      res.status(200).json({ job });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // UPDATE JOB

  // DELETE JOB
};
