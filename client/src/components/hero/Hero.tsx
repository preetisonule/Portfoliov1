import { motion } from "motion/react";
import Container from "../common/Container";
import Button from "../common/Button";
import HeroPortrait from "./HeroPortrait";
import {
  fadeUp,
  staggerContainer,
} from "../../animations/variants";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background grid - very low opacity */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.008]
          [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[130px]" />

      <Container className="relative z-10">
        <div className="grid min-h-screen items-center gap-8 pt-24 lg:grid-cols-[1.1fr_.9fr] lg:gap-0">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-20 pb-10 lg:pb-0"
          >
            {/* Eyebrow Label */}
            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[var(--color-accent)]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                SOFTWARE ENGINEER
              </span>
            </motion.div>

            {/* Main Typographic Name */}
            <motion.h1
              variants={fadeUp}
              className="
                max-w-4xl
                text-[clamp(3.5rem,8vw,6.8rem)]
                font-black
                leading-[0.85]
                tracking-[-0.05em]
                uppercase
                text-[var(--color-text-primary)]
              "
            >
              PREETI
              <br />
              <span className="relative inline-block text-[var(--color-text-primary)]">
                SONULE
              </span>
            </motion.h1>

            {/* Hook / Statement */}
            <motion.h2
              variants={fadeUp}
              className="mt-8 text-lg sm:text-xl md:text-2xl font-black tracking-tight text-[var(--color-text-primary)] uppercase max-w-xl"
            >
              I build software <span className="text-[var(--color-accent)]">from ideas</span> to real products.
            </motion.h2>

            {/* Technical, specific bio */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base sm:leading-7"
            >
              I'm a Computer Science Engineer who enjoys turning ideas into working software. I build full-stack applications while exploring backend systems, cloud infrastructure, and the technologies that make software scale.
            </motion.p>

            {/* Button CTA Hierarchy */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6"
            >
              {/* Primary Lime Button */}
              <Button href="#projects" variant="primary">
                View My Work
              </Button>

              {/* Secondary Dark Button */}
              <Button href="https://github.com" variant="secondary" target="_blank" rel="noreferrer">
                GitHub
              </Button>

              {/* Tertiary quiet Link */}
              <a
                href="/resume.pdf"
                download="Preeti_Sonule_Resume.pdf"
                className="group flex items-center gap-2 rounded-xl border border-transparent px-2 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)] cursor-pointer"
              >
                <span>Resume</span>
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-[1px]">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right portrait */}
          <div className="relative flex items-end justify-center lg:h-full">
            <HeroPortrait />
          </div>
        </div>
      </Container>

      {/* Bottom metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 hidden lg:block"
      >
        <Container>
          <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-white/35 font-semibold">
            <span>India &middot; Open to Remote</span>

            <span>React &middot; TypeScript &middot; Node</span>

            <span>Scroll to explore ↓</span>
          </div>
        </Container>
      </motion.div>
    </section>
  );
};

export default Hero;