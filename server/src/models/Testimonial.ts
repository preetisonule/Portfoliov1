import mongoose, { Schema, Document } from "mongoose";

export interface ITestimonial extends Document {
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
}

const TestimonialSchema: Schema = new Schema({
  quote: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  index: { type: Number, required: true, default: 0 },
});

export default mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
