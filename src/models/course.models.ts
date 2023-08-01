import mongoose, { Schema } from "mongoose";
import { ICourse } from "../interfaces/schemas.interfaces";

const CourseSchema = new Schema<ICourse>({
  school: { type: String, required: true },
  logo: { type: String, required: true },
  title: { type: String, required: true },
  title_fr: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  description: { type: String, required: true },
  description_fr: { type: String, required: true },
});

export default mongoose.model<ICourse>("Course", CourseSchema);
