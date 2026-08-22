import { Router } from "express";

const router = Router();

const projects = [
  {
    id: "project-1",
    title: "CodeDNA",
    category: "AI & Development",
    description:
      "Developer assessment platform using MERN to analyze GitHub, LeetCode, and resume data and generate interview-readiness scores.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GitHub API",
      "LeetCode API",
      "Tailwind CSS",
    ],
    year: "2026",
    role: "Full Stack Engineer",
    liveUrl: "https://codednav1.vercel.app",
    githubUrl: "https://github.com/preetisonule/codedna",
    imageUrl: "/codedna.png",
    featured: true,
    index: 0,
  },
  {
    id: "project-2",
    title: "Smart Study Hub",
    category: "WEB APPLICATION",
    description:
      "A collaborative learning platform designed to bring study resources, productivity tools, and academic workflows into one place, helping students organize their learning more effectively.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    year: "2025",
    role: "Full Stack Engineer",
    liveUrl: "https://kronos.demo",
    githubUrl: "https://github.com/preetisonule/smartstudyhub",
    imageUrl: "/smartstudyhub.png",
    featured: false,
    index: 1,
  },
  {
    id: "project-3",
    title: "Food Safe",
    category: "FULL STACK ENGINEERING",
    description:
      "A full-stack application that analyzes packaged food products using barcode scanning and OCR to help users understand ingredients, nutrition information, and potential risks.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenFoodFacts API",
      "Tesseract.js",
    ],
    year: "2025",
    role: "Full Stack Engineer",
    liveUrl: "https://neuralcanvas.demo",
    githubUrl: "https://github.com/developer/neuralcanvas",
    imageUrl: "/projects/neuralcanvas.png",
    featured: true,
    index: 2,
  },
  {
    id: "project-4",
    title: "SarthiAI",
    category: "BACKEND ENGINEERING",
    description:
      "A voice-driven grocery platform designed to make product discovery and ordering easier through spoken interaction.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "Rule-based NLP",
    ],
    year: "2025",
    role: "Full Stack Developer",
    liveUrl: "https://neuralcanvas.demo",
    githubUrl: "https://github.com/preetisonule/neuralcanvas",
    imageUrl: "/projects/neuralcanvas.png",
    featured: true,
    index: 3,
  },
];

router.get("/", (req, res) => {
  res.json({
    success: true,
    data: projects,
  });
});

export default router;