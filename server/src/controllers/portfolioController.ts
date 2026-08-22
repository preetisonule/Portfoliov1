import { Request, Response } from "express";
import Project from "../models/Project.js";
import Experience from "../models/Experience.js";
import Testimonial from "../models/Testimonial.js";

export const getProjects = async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await Project.find({}).sort({ index: 1 });
    res.json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ success: false, message: "Error fetching projects" });
  }
};

export const getExperience = async (_req: Request, res: Response): Promise<void> => {
  try {
    const experience = await Experience.find({}).sort({ index: 1 });
    res.json({ success: true, count: experience.length, data: experience });
  } catch (error) {
    console.error("Error fetching experience:", error);
    res.status(500).json({ success: false, message: "Error fetching experience" });
  }
};

export const getTestimonials = async (_req: Request, res: Response): Promise<void> => {
  try {
    const testimonials = await Testimonial.find({}).sort({ index: 1 });
    res.json({ success: true, count: testimonials.length, data: testimonials });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ success: false, message: "Error fetching testimonials" });
  }
};
