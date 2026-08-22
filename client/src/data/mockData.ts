import type { Project, Experience, Testimonial } from "../types";

export const mockProjects: Project[] = [
  {
    title: "CodeDNA",
    category: "AI & Development",
    description: "Developer assessment platform using MERN to analyze GitHub, LeetCode, and resume data and generate interview-readiness scores",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "GitHub API", "Leetcode API", "Tailwind CSS"],
    year: "2026",
    role: "Full Stack Engineer",
    liveUrl: "https://codednav1.vercel.app",
    githubUrl: "https://github.com/preetisonule/codedna",
    imageUrl: "/codedna.png",
    featured: true,
    index: 0,
  },
  {
    title: "Smart Study Hub",
    category: "WEB APPLICATION",
    description: "A collaborative learning platform designed to bring study resources, productivity tools, and academic workflows into one place, helping students organize their learning more effectively.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    year: "2025",
    role: "Full Stack Engineer",
    liveUrl: "https://kronos.demo",
    githubUrl: "https://github.com/preetisonule/smartstudyhub",
    imageUrl: "/smartstudyhub.png",
    featured: false,
    index: 1,
  },
  {
    title: "Food Safe",
    category: "FULL STACK ENGINEERING",
    description: "A full-stack application that analyzes packaged food products using barcode scanning and OCR to help users understand ingredients, nutrition information, and potential risks.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "OpenFoodFacts API", "Tesseract.js"],
    year: "2025",
    role: "Full Stack Engineer",
    liveUrl: "https://neuralcanvas.demo",
    githubUrl: "https://github.com/developer/neuralcanvas",
    imageUrl: "/projects/neuralcanvas.png",
    featured: true,
    index: 2,
  },
  {
    title: "SarthiAI",
    category: "BACKEND ENGINEERING",
    description: "A voice-driven grocery platform designed to make product discovery and ordering easier through spoken interaction.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "Rule-based NLP"],
    year: "2025",
    role: "Full Stack Developer",
    liveUrl: "https://neuralcanvas.demo",
    githubUrl: "https://github.com/preetisonule/neuralcanvas",
    imageUrl: "/projects/neuralcanvas.png",
    featured: true,
    index: 2,
  },
];

export const mockExperiences: Experience[] = [
  {
    year: "Sep 2025 - Nov 2025",
    role: "Technical Support Intern",
    company: "Veridia, Remote",
    description: "• Contributed to backend system design and API development for scalable application components. Supported API development and debugging for server-side services. Collaborated with the engineering team using Git-based version control and Agile development practices",
    index: 0,
  },
  {
    year: "Aug 2024 - Aug 2025",
    role: "President",
    company: "Coding Club, DYPCET",
    description: "Led a team to organize technical workshops and coding events for 100+ students. Conducted hands-on workshops on HTML, CSS, JavaScript, React, Git, and DSA for 100+ students.",
    index: 1,
  },
  {
    year: "Aug 2023 - Aug 2024",
    role: "Mentor",
    company: "Coding Club, DYPCET",
    description: "Mentored & Taught students programming concepts including C, C++, Java, Data structure and Algorithms, HTML, CSS.",
    index: 2,
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    quote: "The interfaces created felt incredibly natural and responsive. A rare developer who possesses both rigorous engineering discipline and a refined design sensibility.",
    name: "Sarah Jenkins",
    role: "Product Director",
    company: "Vektor Agency",
    index: 0,
  },
  {
    quote: "Delivered our complex web application ahead of schedule with flawless code structure. Their attention to minor details in micro-interactions made a massive difference.",
    name: "Marcus Thorne",
    role: "Engineering Lead",
    company: "Aura Tech Labs",
    index: 1,
  },
];
