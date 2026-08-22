import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  role: string;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  index: number;
  featured: boolean;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  year: { type: String, required: true },
  role: { type: String, required: true },
  liveUrl: { type: String, default: "" },
  githubUrl: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  index: { type: Number, required: true, default: 0 },
  featured: { type: Boolean, default: false },
});

export default mongoose.model<IProject>("Project", ProjectSchema);
