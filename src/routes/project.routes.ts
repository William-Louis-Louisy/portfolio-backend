import { projectController } from "../controllers/project.controllers";

const express = require("express");
const projectRouter = express.Router();

// ----------------------------

// Create personal project
projectRouter.post(
  "/personal-project",
  projectController.createPersonalProject
);

// Get all personal projects
projectRouter.get(
  "/personal-projects",
  projectController.getAllPersonalProjects
);

// Get personal project by id
projectRouter.get(
  "/personal-project/:id",
  projectController.getPersonalProjectById
);

// ----------------------------

// Create professional project
projectRouter.post(
  "/professional-project",
  projectController.createProfessionalProject
);

// Get all professional projects
projectRouter.get(
  "/professional-projects",
  projectController.getAllProfessionalProjects
);

// Get professional project by id
projectRouter.get(
  "/professional-project/:id",
  projectController.getProfessionalProjectById
);

// ----------------------------

export default projectRouter;
