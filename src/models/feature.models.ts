import mongoose, { Schema } from "mongoose";
import { IFeature } from "../interfaces/schemas.interfaces";

const FeatureSchema = new Schema<IFeature>({
  name: { type: String, required: true },
  name_fr: { type: String, required: true },
  description: { type: String, required: true },
  description_fr: { type: String, required: true },
});

export default mongoose.model<IFeature>("Feature", FeatureSchema);
