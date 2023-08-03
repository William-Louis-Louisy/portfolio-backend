import jwt from "jsonwebtoken";
import { Response, Request } from "express";
import courseModels from "../models/course.models";
import { JwtPayload } from "./user.controllers";

// COURSE CONTROLLER
export const courseController = {
  // CREATE COURSE
  createCourse: async function (req: Request, res: Response) {
    const {
      school,
      logo,
      title,
      title_fr,
      startDate,
      endDate,
      description,
      description_fr,
    } = req.body;

    try {
      // Verify that user is admin
      // const token = req.cookies.jwt;
      // const decodedToken = jwt.verify(
      //   token,
      //   process.env.JWT_SECRET!
      // ) as JwtPayload;
      // const isAdmin = decodedToken.isAdmin;
      // if (!isAdmin) {
      //   return res.status(401).json({ error: "Unauthorized" });
      // }

      if (
        !school ||
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

      const course = await courseModels.create({
        school,
        logo,
        title,
        title_fr,
        startDate,
        endDate,
        description,
        description_fr,
      });

      res.status(201).json({ course: course._id });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET ALL COURSES
  getAllCourses: async function (req: Request, res: Response) {
    try {
      const courses = await courseModels.find();
      res.status(200).json(courses);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // GET ONE COURSE
  getOneCourse: async function (req: Request, res: Response) {
    try {
      const course = await courseModels.findById(req.params.id);
      res.status(200).json(course);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // UPDATE COURSE
  updateCourse: async function (req: Request, res: Response) {
    const {
      school,
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
        !school ||
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

      const course = await courseModels.findByIdAndUpdate(
        req.params.id,
        {
          school,
          logo,
          title,
          title_fr,
          startDate,
          endDate,
          description,
          description_fr,
        },
        { new: true }
      );

      res.status(200).json(course);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  // DELETE COURSE
  deleteCourse: async function (req: Request, res: Response) {
    try {
      const course = await courseModels.findByIdAndDelete(req.params.id);
      res.status(200).json(course);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
