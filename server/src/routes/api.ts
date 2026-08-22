import { Router } from "express";
import { handleContactSubmit } from "../controllers/contactController.js";
import {
  getProjects,
  getExperience,
  getTestimonials,
} from "../controllers/portfolioController.js";

const router = Router();

router.post("/contact", handleContactSubmit);
router.get("/projects", getProjects);
router.get("/experience", getExperience);
router.get("/testimonials", getTestimonials);

export default router;
