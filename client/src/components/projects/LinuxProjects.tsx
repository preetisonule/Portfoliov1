import { useState, type ReactNode, type SVGProps } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Terminal, Copy, Check } from "lucide-react";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
import { linuxProjects } from "../../data/linuxProjects";
import type { LinuxProject } from "../../types";
import { fadeUp, staggerContainer, slideInLeft, revealLine } from "../../animations/variants";

const ArticleSection = ({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col gap-4"
  >
    <div className="flex items-center gap-3">
      <motion.div
        variants={revealLine}
        initial="hidden"
        animate="visible"
        className="h-px flex-1 bg-gradient-to-r from-[var(--color-accent)]/40 to-transparent"
      />
      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-accent)]">
        {label}
      </span>
      <motion.div
        variants={revealLine}
        initial="hidden"
        animate="visible"
        className="h-px flex-1 bg-gradient-to-l from-[var(--color-accent)]/40 to-transparent"
      />
    </div>
    {children}
  </motion.div>
);

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group/code rounded-xl border border-white/10 bg-[#0a0c0d] overflow-hidden">
      {/* Terminal header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[var(--color-accent)]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
            system_health_monitor.sh
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] transition-all hover:bg-white/5 hover:text-[var(--color-accent)] cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? <Check size={12} className="text-[var(--color-accent)]" /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code content */}
      <pre className="code-block overflow-x-auto p-5 text-[11px] sm:text-xs leading-relaxed">
        <code>{code}</code>
      </pre>

      {/* Subtle scan-line effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/code:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-[var(--color-accent)]/[0.02] to-transparent" />
    </div>
  );
};

const LinuxProjectCard = ({ project }: { project: LinuxProject; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      variants={fadeUp}
      layout
      className="group relative rounded-[1.5rem] border border-white/10 bg-[var(--color-surface)] overflow-hidden transition-colors duration-500 hover:border-[var(--color-accent)]/30"
    >
      {/* Accent glow on hover */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--color-accent)]/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Card header — always visible */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-8 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                <Terminal size={10} />
                Linux / CLI
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                {project.year}
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[var(--color-text-primary)] uppercase">
              {project.title}
            </h4>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              {project.subtitle}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1 text-[10px] font-bold text-[var(--color-text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[var(--color-text-secondary)] transition-colors group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)]"
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </button>

      {/* Expandable article body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="article-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 flex flex-col gap-10 border-t border-white/5 pt-8">
              {/* Overview */}
              <ArticleSection label="Overview" delay={0.05}>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {project.overview}
                </p>
              </ArticleSection>

              {/* Functionalities */}
              <ArticleSection label="Functionalities" delay={0.1}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.functionalities.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </ArticleSection>

              {/* How It Works */}
              <ArticleSection label="How It Works" delay={0.15}>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {project.howItWorks}
                </p>
              </ArticleSection>

              {/* Code */}
              <ArticleSection label="Code" delay={0.2}>
                <CodeBlock code={project.code} />
              </ArticleSection>

              {/* How to Run */}
              <ArticleSection label="How to Run" delay={0.25}>
                <ol className="flex flex-col gap-4">
                  {project.howToRun.map((step, i) => (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                      className="flex items-start gap-4 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[11px] font-black text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                        {i + 1}
                      </span>
                      <code className="mt-1 font-mono text-[12px] sm:text-sm text-[var(--color-text-primary)] bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/5">
                        {step}
                      </code>
                    </motion.li>
                  ))}
                </ol>
              </ArticleSection>

              {/* GitHub link */}
              {project.githubUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] transition-all hover:bg-white/5 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                  >
                    <GithubIcon />
                    View on GitHub
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const LinuxProjects = () => {
  return (
    <div id="linux-projects" className="mt-24 md:mt-36 pt-16 md:pt-24 border-t border-white/5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col"
      >
        {/* Subsection header */}
        <motion.div variants={slideInLeft} className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Linux Projects
            </span>

            <h3 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black leading-[1.05] tracking-tight uppercase">
              Systems & <br />
              <span className="text-[var(--color-accent)]">Shell Tools</span>
            </h3>
          </div>

          <p className="max-w-md text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Deep-dive write-ups on Linux utilities I build — architecture, code, and run instructions. Click any project to read the full article.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {linuxProjects.map((project, idx) => (
            <LinuxProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LinuxProjects;
