import { motion } from "motion/react";
import Container from "../common/Container";
import { fadeUp, staggerContainer } from "../../animations/variants";
import profileImage from "../../assets/images/profile.png";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[var(--color-background-secondary)] overflow-hidden border-t border-white/5">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 rounded-full bg-[var(--color-accent)]/5 blur-[100px]" />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 items-center"
        >
          {/* Left Column: Real-World Photograph Card */}
          <motion.div variants={fadeUp} className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-full">
              {/* Subtle back border offset */}
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[1.5rem] border border-white/5 bg-white/[0.01]" />
              
              {/* Image Frame */}
              <div className="relative z-10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--color-surface)] shadow-2xl">
                <img
                  src={profileImage}
                  alt="Preeti Sonule"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statement & Story */}
          <motion.div variants={fadeUp} className="flex flex-col justify-start">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              01 / ABOUT ME
            </span>
            
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black leading-[1.1] tracking-tight text-[var(--color-text-primary)] uppercase mb-6">
              Bridging Logic <br />
              And Execution.
            </h2>

            <div className="flex flex-col gap-6 text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed">
              <p className="font-bold text-[var(--color-text-primary)]">
                I am a Computer Science Engineer based in India, dedicated to exploring how systems run, scale, and interact under the hood.
              </p>
              
              <p>
                My development workflow values clarity, robustness, and performance. I build full-stack web applications using React, TypeScript, and Node.js. Beyond frontend layout, I enjoy engineering database architectures, creating secure middleware, and organizing containerized deployments with Docker.
              </p>
              
              <p>
                I learn by getting my hands dirty—building tools, testing limits, breaking components, and engineering them back stronger. Outside of programming, I'm likely reading about cloud systems, watching anime, or catching up on Marvel movies.
              </p>

              <div className="flex gap-8 mt-4 border-t border-white/5 pt-6">
                <div>
                  <span className="block text-xl font-black text-[var(--color-text-primary)]">01.</span>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-bold">Systems Design</span>
                </div>
                <div>
                  <span className="block text-xl font-black text-[var(--color-text-primary)]">02.</span>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-bold">API Pipelines</span>
                </div>
                <div>
                  <span className="block text-xl font-black text-[var(--color-text-primary)]">03.</span>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-bold">Clean Code</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
