import { Application } from "express";
import jobRouter from "./src/routes/job.routes";
import taskRouter from "./src/routes/task.routes";
import userRouter from "./src/routes/user.routes";
import stackRouter from "./src/routes/stack.routes";
import courseRouter from "./src/routes/course.routes";
import featureRouter from "./src/routes/feature.routes";
import projectRouter from "./src/routes/project.routes";

export function setupRoutes(app: Application) {
  app.use(jobRouter);
  app.use(userRouter);
  app.use(taskRouter);
  app.use(stackRouter);
  app.use(courseRouter);
  app.use(featureRouter);
  app.use(projectRouter);
}
