import { Response, Request } from "express";
import personalProjectModels from "../models/personalProject.models";
import professionalProjectModels from "../models/professionalProject.models";

// PROJECT CONTROLLER
export const projectController = {
  // PERSONAL PROJECTS CRUD

  // CREATE PERSONAL PROJECT
  createPersonalProject: async function (req: Request, res: Response) {
    const {
      name,
      description,
      short_description,
      description_fr,
      short_description_fr,
      stack,
      features,
      date,
      image,
      github,
      link,
    } = req.body;

    try {
      if (
        !name ||
        !description ||
        !short_description ||
        !description_fr ||
        !short_description_fr ||
        !stack ||
        !features ||
        !date ||
        !image
      ) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const project = await personalProjectModels.create({
        name,
        description,
        short_description,
        description_fr,
        short_description_fr,
        stack,
        features,
        date,
        image,
        github,
        link,
      });

      res.status(201).json({ project: project._id });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET ALL PERSONAL PROJECTS
  getAllPersonalProjects: async function (req: Request, res: Response) {
    try {
      const projects = await personalProjectModels
        .find()
        .select(
          "name short_description short_description_fr date image stack link"
        )
        .populate({
          path: "stack",
          select: "name icon",
        });

      if (!projects || projects.length === 0) {
        return res.status(400).json({ error: "No projects found" });
      }

      res.status(200).json(projects);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET PERSONAL PROJECT BY ID
  getPersonalProjectById: async function (req: Request, res: Response) {
    const { id } = req.params;

    try {
      const project = await personalProjectModels
        .findById(id)
        .populate({
          path: "stack",
          select: "name icon",
        })
        .populate({
          path: "features",
          select: "name description name_fr description_fr",
        });

      if (!project) {
        return res.status(400).json({ error: "No project found" });
      }

      res.status(200).json(project);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // UPDATE PERSONAL PROJECT
  updatePersonalProject: async function (req: Request, res: Response) {
    const { id } = req.params;
    const {
      name,
      description,
      short_description,
      description_fr,
      short_description_fr,
      stack,
      features,
      date,
      image,
      github,
      link,
    } = req.body;

    try {
      const project = await personalProjectModels.findByIdAndUpdate(id, {
        name,
        description,
        short_description,
        description_fr,
        short_description_fr,
        stack,
        features,
        date,
        image,
        github,
        link,
      });

      res.status(200).json({
        status: 200,
        data: project,
        message: "Project successfully updated",
      });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // DELETE PERSONAL PROJECT

  // ------------------------------

  // PROFESSIONAL PROJECTS CRUD

  // CREATE PROFESSIONAL PROJECT
  createProfessionalProject: async function (req: Request, res: Response) {
    const {
      name,
      description,
      description_fr,
      short_description,
      short_description_fr,
      stack,
      tasks,
      date,
      image,
    } = req.body;

    try {
      if (
        !name ||
        !description ||
        !description_fr ||
        !short_description ||
        !short_description_fr ||
        !stack ||
        !tasks ||
        !date ||
        !image
      ) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const project = await professionalProjectModels.create({
        name,
        description,
        description_fr,
        short_description,
        short_description_fr,
        stack,
        tasks,
        date,
        image,
      });

      res.status(201).json({ project: project._id });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET ALL PROFESSIONAL PROJECTS
  getAllProfessionalProjects: async function (req: Request, res: Response) {
    try {
      const projects = await professionalProjectModels
        .find()
        .select("name short_description short_description_fr date image stack")
        .populate({
          path: "stack",
          select: "name icon",
        });

      if (!projects || projects.length === 0) {
        return res.status(400).json({ error: "No projects found" });
      }

      res.status(200).json(projects);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET PROFESSIONAL PROJECT BY ID
  getProfessionalProjectById: async function (req: Request, res: Response) {
    const { id } = req.params;

    try {
      const project = await professionalProjectModels
        .findById(id)
        .populate({
          path: "stack",
          select: "name icon",
        })
        .populate({
          path: "tasks",
          select: "name description name_fr description_fr",
        });

      if (!project) {
        return res.status(400).json({ error: "No project found" });
      }

      res.status(200).json(project);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
