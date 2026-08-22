import type { Project, Experience, Testimonial } from "../types";

export const mockProjects: Project[] = [
  {
    title: "AETHER DESIGN SUITE",
    category: "AI & DESIGN",
    description: "Next-generation layout tool using transformer models to translate textual editorial definitions into high-fidelity interactive components.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Python", "OpenAI"],
    year: "2026",
    role: "Full Stack Engineer",
    liveUrl: "https://aether.design.demo",
    githubUrl: "https://github.com/developer/aether-design",
    imageUrl: "/projects/aether.png",
    featured: true,
    index: 0,
  },
  {
    title: "KRONOS CHRONICLES",
    category: "WEB APPLICATION",
    description: "Interactive editorial platform mapping global historical events in real-time, built with a high-performance vector rendering canvas.",
    technologies: ["React", "Motion", "Tailwind CSS", "Node.js", "MongoDB", "Canvas API"],
    year: "2025",
    role: "Lead Developer",
    liveUrl: "https://kronos.demo",
    githubUrl: "https://github.com/developer/kronos",
    imageUrl: "/projects/kronos.png",
    featured: false,
    index: 1,
  },
  {
    title: "NEURAL CANVAS",
    category: "CREATIVE ENGINEERING",
    description: "Collaborative whiteboard application utilizing machine learning for structural layout assistance and automated interface optimization.",
    technologies: ["React", "TypeScript", "Express", "Socket.io", "MongoDB", "WebRTC"],
    year: "2025",
    role: "Full Stack Developer",
    liveUrl: "https://neuralcanvas.demo",
    githubUrl: "https://github.com/developer/neuralcanvas",
    imageUrl: "/projects/neuralcanvas.png",
    featured: true,
    index: 2,
  },
];

export const mockExperiences: Experience[] = [
  {
    year: "2026",
    role: "Senior Full Stack Engineer",
    company: "Vektor Creative Agency",
    description: "Led engineering for premium web experiences and AI-driven products. Architected sub-100ms loading speeds for high-profile creative campaigns.",
    index: 0,
  },
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Aura Tech Labs",
    description: "Developed scalable backend APIs and responsive user interfaces. Optimized database queries in MongoDB reducing response latency by 40%.",
    index: 1,
  },
  {
    year: "2024",
    role: "Frontend Engineer",
    company: "Studio Carbon",
    description: "Transformed high-fidelity designs into functional React interfaces. Implemented smooth interactive transitions and micro-animations.",
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
