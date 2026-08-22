import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Container from "../common/Container";
import { fadeUp, staggerContainer } from "../../animations/variants";

const servicesData = [
  {
    num: "01",
    title: "FULL-STACK DEVELOPMENT",
    description: "Building scalable, end-to-end web applications. Integrating highly responsive frontends with robust, database-backed APIs, using React, Node.js, Express, and MongoDB.",
    details: ["Performance Optimization", "Database Integration", "State Management", "TypeScript & Strict Typing"],
  },
  {
    num: "02",
    title: "FRONTEND ENGINEERING",
    description: "Creating modern, responsive user interfaces. Designing interfaces that are pixel-perfect, interactive, lightweight, accessible (WCAG), and responsive across all viewports.",
    details: ["Tailwind CSS v4 Layouts", "Framer Motion Animations", "Responsive Mobile-First Design", "Lazy-loading assets"],
  },
  {
    num: "03",
    title: "UI / UX IMPLEMENTATION",
    description: "Translating sophisticated visuals and user experiences into functioning web applications, with high attention to alignment, layout spacing, transitions, and typography.",
    details: ["Design System Setup", "Interactive Micro-Interactions", "Fluid Transitions", "Figma-to-Code Translation"],
  },
  {
    num: "04",
    title: "API & SYSTEM INTEGRATION",
    description: "Designing, documenting, and implementing RESTful API endpoints. Structuring secure routes, validation rules, CORS control, error handlers, and database schema controllers.",
    details: ["REST API Architecture", "Mongoose Schemes & Validation", "Token Auth & Cryptography", "Middleware & Error Handling"],
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[var(--color-background)] overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />

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
              02 / SERVICES
            </span>
            
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.0] tracking-tight uppercase">
              Core Expertise
            </h2>
          </motion.div>

          {/* Rows List */}
          <div className="border-t border-white/10">
            {servicesData.map((service, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={service.num}
                  className="border-b border-white/10 cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setHoveredIndex(isHovered ? null : index)}
                >
                  <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300">
                    
                    {/* Number + Title */}
                    <div className="flex items-center gap-6 md:gap-12">
                      <span
                        className={`text-sm font-black tracking-widest transition-colors duration-300 ${
                          isHovered ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]"
                        }`}
                      >
                        {service.num}
                      </span>
                      
                      <h3
                        className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-[var(--color-text-primary)] transition-transform duration-300 group-hover:translate-x-1 uppercase"
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{
                          rotate: isHovered ? -45 : 0,
                          x: isHovered ? 4 : 0,
                          backgroundColor: isHovered ? "var(--color-accent)" : "rgba(255, 255, 255, 0.05)",
                          color: isHovered ? "var(--color-background)" : "var(--color-text-primary)",
                        }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10"
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanding Description Panel */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pb-10 pl-12 md:pl-[104px] grid gap-6 md:grid-cols-[1.5fr_1fr]">
                      <div>
                        <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed max-w-xl">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.details.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-white/5 bg-white/[0.02] px-3.5 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
