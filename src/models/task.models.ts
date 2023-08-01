import mongoose, { Schema } from "mongoose";
import { ITask } from "../interfaces/schemas.interfaces";

const TaskSchema = new Schema<ITask>({
  name: { type: String, required: true },
  name_fr: { type: String, required: true },
  description: { type: String, required: true },
  description_fr: { type: String, required: true },
});

export default mongoose.model<ITask>("Task", TaskSchema);
