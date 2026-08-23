import { motion } from "motion/react";
import Container from "../common/Container";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { getIconByName } from "../common/TechIcons";

const skillCategories = [
  {
    title: "FRONTEND ENGINEERING",
    skills: [
      { name: "React 19", level: "Expert" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Tailwind CSS v4", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "Motion (Framer)", level: "Advanced" },
      { name: "Three.js", level: "Intermediate" },
      { name: "Material UI", level: "Intermediate" },
    ],
  },
  {
    title: "BACKEND & DATABASES",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "Mongoose ODM", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
    ],
  },
  {
    title: "LANGUAGES",
    skills: [
      { name: "C", level: "Advanced" },
      { name: "C++", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "Javascript", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
    ],
  },
  {
    title: "DEV & CREATIVE TOOLS",
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "Figma", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Postman", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[var(--color-background-secondary)] border-t border-white/5 overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 rounded-full bg-[var(--color-accent)]/5 blur-[100px]" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              03 / SKILLS
            </span>
            
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.0] tracking-tight uppercase">
              Technology Stack
            </h2>
          </motion.div>

          {/* Categories list */}
          <div className="flex flex-col gap-12 md:gap-16">
            {skillCategories.map((cat, idx) => (
              <motion.div
                variants={fadeUp}
                key={cat.title}
                className={`grid gap-6 md:grid-cols-[1fr_2.2fr] pb-10 border-b border-white/5 ${
                  idx === skillCategories.length - 1 ? "border-none pb-0" : ""
                }`}
              >
                {/* Category Title */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-secondary)] md:pt-3">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04, borderColor: "var(--color-accent)" }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="group relative flex items-center gap-3 rounded-xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 cursor-default"
                    >
                      <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                        {getIconByName(skill.name, 16)}
                      </span>

                      <span className="text-sm font-semibold tracking-wide text-[var(--color-text-primary)]">
                        {skill.name}
                      </span>
                      
                      <span className="text-[9px] font-black uppercase tracking-wider text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors ml-1">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
