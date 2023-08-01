import mongoose, { Schema } from "mongoose";
import { IStack } from "../interfaces/schemas.interfaces";

const StackSchema = new Schema<IStack>({
  name: { type: String, required: true },
  icon: { type: String },
});

export default mongoose.model<IStack>("Stack", StackSchema);
