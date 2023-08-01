import { courseController } from "../controllers/course.controllers";

const express = require("express");
const courseRouter = express.Router();

// Create course
courseRouter.post("/course", courseController.createCourse);

// Get all courses
courseRouter.get("/courses", courseController.getAllCourses);

// Get course by id
courseRouter.get("/course/:id", courseController.getOneCourse);

export default courseRouter;
