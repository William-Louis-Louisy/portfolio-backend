import mongoose, { Schema } from "mongoose";
import { IPersonalProject } from "../interfaces/schemas.interfaces";

const PersonalProjectSchema = new Schema<IPersonalProject>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  description_fr: { type: String, required: true },
  short_description: { type: String, required: true },
  short_description_fr: { type: String, required: true },
  stack: [{ type: Schema.Types.ObjectId, ref: "Stack" }],
  features: [{ type: Schema.Types.ObjectId, ref: "Feature" }],
  date: { type: String, required: true },
  image: { type: String },
  images: {
    type: [String],
    required: true,
    default: function (this: any) {
      return this.image ? [this.image] : [];
    },
    validate: {
      validator: (arr: string[]) => arr.length >= 1 && arr.length <= 5,
      message: "Array must contain 1 to 5 images.",
    },
  },
  github: { type: [String] },
  link: { type: String },
});

export default mongoose.model<IPersonalProject>(
  "PersonalProject",
  PersonalProjectSchema
);
