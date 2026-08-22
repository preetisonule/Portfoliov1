import express from "express";
import cors from "cors";
import apiRouter from "./routes/api.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running",
  });
});

app.use("/api", apiRouter);

export default app;