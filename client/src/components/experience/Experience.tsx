import { useState, useEffect } from "react";
import { motion } from "motion/react";
import axios from "axios";
import Container from "../common/Container";
import { mockExperiences } from "../../data/mockData";
import type { Experience as ExperienceType } from "../../types";
import { fadeUp, staggerContainer } from "../../animations/variants";

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>(mockExperiences);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/experience");
        if (res.data && res.data.success && res.data.data.length > 0) {
          setExperiences(res.data.data);
        }
      } catch (err) {
        console.warn("Could not fetch experiences from server. Using mock fallback.", err);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[var(--color-background-secondary)] border-t border-white/5 overflow-hidden">
      {/* Background ambient decorations */}
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
          <motion.div variants={fadeUp} className="mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              05 / TIMELINE
            </span>
            
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.0] tracking-tight uppercase">
              WORK EXPERIENCE
            </h2>
          </motion.div>

          {/* Timeline Wrapper */}
          <div className="relative pl-8 sm:pl-12 md:pl-16 max-w-4xl mx-auto w-full">
            {/* Growing Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[var(--color-accent)] via-white/10 to-white/5 origin-top"
            />

            {/* Timeline Items */}
            <div className="flex flex-col gap-16">
              {experiences.map((exp, idx) => {
                return (
                  <motion.div
                    variants={fadeUp}
                    key={exp._id || exp.company + idx}
                    className="relative group"
                  >
                    {/* Circle Node Dot */}
                    <span className="absolute -left-[32px] sm:-left-[48px] md:-left-[64px] top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-background)] border-2 border-white/20 transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:scale-110">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-accent)]" />
                    </span>

                    {/* Timeline Card */}
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-[1.5rem] border border-white/5 bg-[var(--color-surface)] p-6 md:p-8 shadow-xl"
                    >
                      {/* Year */}
                      <span className="inline-block text-xs font-black tracking-widest text-[var(--color-accent)] mb-3 bg-[var(--color-accent)]/10 px-3 py-1 rounded-md uppercase">
                        {exp.year}
                      </span>
                      
                      {/* Role & Company */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
                        <h3 className="text-lg md:text-xl font-black text-[var(--color-text-primary)] uppercase">
                          {exp.role}
                        </h3>
                        <span className="text-xs md:text-sm font-bold text-[var(--color-text-secondary)]">
                          {exp.company}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
