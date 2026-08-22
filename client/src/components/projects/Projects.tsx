import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { motion } from "motion/react";
import axios from "axios";
import Container from "../common/Container";
import { mockProjects } from "../../data/mockData";
import type { Project } from "../../types";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { getIconByName } from "../common/TechIcons";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://portfoliov1-b.onrender.com/api/projects");
        if (res.data && res.data.success && res.data.data.length > 0) {
          setProjects(res.data.data);
        }
      } catch (err) {
        console.warn("Could not fetch projects from server. Using mock fallback.", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[var(--color-background)] overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                04 / PORTFOLIO
              </span>
              
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.0] tracking-tight uppercase">
                FEATURED <br />
                WORK
              </h2>
            </div>
            
            <p className="max-w-md text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
              A curated selection of applications showcasing responsive frontends, clean UI systems, and robust database and System architectures.
            </p>
          </motion.div>

          {/* Projects List Layout */}
          <div className="flex flex-col gap-24 md:gap-36">
            {projects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              const isFeatured = project.featured;

              return (
                <motion.div
                  variants={fadeUp}
                  key={project._id || project.title}
                  className={`grid gap-8 items-center lg:grid-cols-12 ${
                    isFeatured
                      ? "lg:gap-12"
                      : "lg:gap-16"
                  }`}
                >
                  {/* Project Image Frame (lg:col-span-7) */}
                  <div
                    className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-surface)] group cursor-pointer lg:col-span-7 ${
                      !isEven ? "lg:order-2" : ""
                    }`}
                  >
                    {/* Year Label */}
                    <span className="absolute left-6 top-6 z-20 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold tracking-wider text-white border border-white/10 uppercase">
                      {project.year}
                    </span>

                    {/* Accent border frame overlay on hover */}
                    <div className="absolute inset-0 z-20 pointer-events-none rounded-[2rem] border-2 border-transparent transition-colors group-hover:border-[var(--color-accent)] duration-500" />

                    <div className="overflow-hidden aspect-[16/10] relative">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Project Info Block (lg:col-span-5) */}
                  <div
                    className={`flex flex-col lg:col-span-5 ${
                      !isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">
                      {project.category}
                    </span>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-text-primary)] mb-5 uppercase transition-transform group-hover:translate-x-1 duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Meta Info (Role & Technologies) */}
                    <div className="border-t border-b border-white/5 py-4 mb-6 flex flex-col gap-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">Role</span>
                        <span className="text-[var(--color-text-primary)] font-bold">{project.role}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs gap-4">
                        <span className="text-[var(--color-text-muted)] uppercase tracking-wider font-semibold min-w-16">Stack</span>
                        <div className="flex flex-wrap justify-end gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1 rounded-md border border-white/5 bg-white/[0.02] px-2 py-1 text-[10px] font-bold text-[var(--color-text-secondary)]"
                            >
                              <span className="text-[var(--color-text-muted)] scale-90">
                                {getIconByName(tech, 10)}
                              </span>
                              <span>{tech}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Links */}
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn flex items-center gap-2 rounded-full bg-[var(--color-accent)] text-[var(--color-background)] px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[var(--color-accent-hover)]"
                        >
                          <span>Live Demo</span>
                          <Globe size={14} />
                        </a>
                      )}
                      
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] transition-all hover:bg-white/5 hover:border-white/20"
                        >
                          <span>GitHub</span>
                          <GithubIcon className="transition-transform group-hover/btn:translate-x-[1px]" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
