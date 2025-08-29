import { courseController } from "../controllers/course.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const express = require("express");
const courseRouter = express.Router();

// ------------------------------

//---- Public routes ----

// Get all courses
courseRouter.get("/courses", courseController.getAllCourses);

// Get course by id
courseRouter.get("/course/:id", courseController.getOneCourse);

//---- Protected routes ----

// Create course
courseRouter.post("/course", courseController.createCourse);

// Update course
courseRouter.put("/course/:id", courseController.updateCourse);

// Delete course
courseRouter.delete("/course/:id", courseController.deleteCourse);

export default courseRouter;
