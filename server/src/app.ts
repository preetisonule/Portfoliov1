// src/app.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.routes";
import experienceRoutes from "./routes/experience.routes";
import projectRoutes from "./routes/project.routes";
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
   methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api", contactRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/projects", projectRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error Handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

export default app;