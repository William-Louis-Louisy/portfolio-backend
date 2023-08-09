import { projectController } from "../controllers/project.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const express = require("express");
const projectRouter = express.Router();

// ------------------------------

//------ PERSONAL PROJECTS ------

//---- Public routes ----

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

//---- Protected routes ----

// Create personal project
projectRouter.post(
  "/personal-project",
  verifyToken,
  projectController.createPersonalProject
);

// Update personal project
projectRouter.put(
  "/personal-project/:id",
  verifyToken,
  projectController.updatePersonalProject
);

// Delete personal project
projectRouter.delete(
  "/personal-project/:id",
  verifyToken,
  projectController.deletePersonalProject
);

// ------------------------------

//------ PROFESSIONAL PROJECTS ------

//---- Public routes ----

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

//---- Protected routes ----

// Create professional project
projectRouter.post(
  "/professional-project",
  verifyToken,
  projectController.createProfessionalProject
);

// Update professional project
projectRouter.put(
  "/professional-project/:id",
  verifyToken,
  projectController.updateProfessionalProject
);

// Delete professional project
projectRouter.delete(
  "/professional-project/:id",
  verifyToken,
  projectController.deleteProfessionalProject
);

// ------------------------------

export default projectRouter;
