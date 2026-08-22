import { Router } from "express";

const router = Router();

const experiences = [
  {
    id: "experience-1",
    year: "Sep 2025 - Nov 2025",
    role: "Technical Support Intern",
    company: "Veridia, Remote",
    description:
      "Contributed to backend system design and API development for scalable application components. Supported API development and debugging for server-side services. Collaborated with the engineering team using Git-based version control and Agile development practices.",
    technologies: ["Node.js", "Express.js", "Git"],
    index: 0,
  },
  {
    id: "experience-2",
    year: "Aug 2024 - Aug 2025",
    role: "President",
    company: "Coding Club, DYPCET",
    description:
      "Led a team to organize technical workshops and coding events for 100+ students. Conducted hands-on workshops on HTML, CSS, JavaScript, React, Git, and DSA for 100+ students.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "DSA"],
    index: 1,
  },
  {
    id: "experience-3",
    year: "Aug 2023 - Aug 2024",
    role: "Mentor",
    company: "Coding Club, DYPCET",
    description:
      "Mentored and taught students programming concepts including C, C++, Java, Data Structures and Algorithms, HTML, and CSS.",
    technologies: ["C", "C++", "Java", "DSA", "HTML", "CSS"],
    index: 2,
  },
];

router.get("/", (req, res) => {
  res.json({
    success: true,
    data: experiences,
  });
});

export default router;