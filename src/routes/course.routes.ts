import { courseController } from "../controllers/course.controllers";

const express = require("express");
const courseRouter = express.Router();

// Create course
courseRouter.post("/course", courseController.createCourse);

// Get all courses
courseRouter.get("/courses", courseController.getAllCourses);

// Get course by id
courseRouter.get("/course/:id", courseController.getOneCourse);

// Update course
courseRouter.put("/course/:id", courseController.updateCourse);

// Delete course
courseRouter.delete("/course/:id", courseController.deleteCourse);

export default courseRouter;
