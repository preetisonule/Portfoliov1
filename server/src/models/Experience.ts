import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  year: string;
  role: string;
  company: string;
  description: string;
  index: number;
}

const ExperienceSchema: Schema = new Schema({
  year: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  index: { type: Number, required: true, default: 0 },
});

export default mongoose.model<IExperience>("Experience", ExperienceSchema);
