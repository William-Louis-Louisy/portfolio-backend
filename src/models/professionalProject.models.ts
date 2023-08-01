import mongoose, { Schema } from "mongoose";
import { IProfessionalProject } from "../interfaces/schemas.interfaces";

const ProfessionalProjectSchema = new Schema<IProfessionalProject>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  description_fr: { type: String, required: true },
  short_description: { type: String, required: true },
  short_description_fr: { type: String, required: true },
  stack: [{ type: Schema.Types.ObjectId, ref: "Stack" }],
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  date: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model<IProfessionalProject>(
  "ProfessionalProject",
  ProfessionalProjectSchema
);
