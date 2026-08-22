// src/routes/contact.routes.ts
import { Router } from "express";
import { submitContactForm, healthCheck } from "../controllers/contact.controller";

const router = Router();

router.get("/health", healthCheck);
router.post("/contact", submitContactForm);

export default router;