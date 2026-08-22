import React, { useState } from "react";
import { Mail, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import axios from "axios";
import Container from "../common/Container";
import Button from "../common/Button";
import { fadeUp, staggerContainer } from "../../animations/variants";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validate
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill out all fields before submitting.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const res = await axios.post("https://portfoliov1-b.onrender.com/api/contact", formData);
      if (res.data && res.data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message was sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(res.data.message || "Failed to submit form.");
      }
    } catch (err: any) {
      console.error("Form submit error:", err);
      setStatus({
        type: "error",
        message: err.response?.data?.message || "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[var(--color-background)] overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[130px]" />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20"
        >
          {/* Left Column: Heading and info */}
          <motion.div variants={fadeUp} className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                07 / CONTACT
              </span>
              
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.0] tracking-tight uppercase mb-6">
                HAVE AN IDEA? <br />
                LET'S BUILD <br />
                <span className="text-[var(--color-accent)]">SOMETHING</span> <br />
                GREAT.
              </h2>
              
              <p className="max-w-md text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-8">
                I am currently open to consulting projects, freelance engagements, or full-time opportunities. Drop me a line and let's make it real.
              </p>
            </div>

            {/* Direct contact and socials */}
            <div className="flex flex-col gap-8 border-t border-white/5 pt-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-muted)]">
                  Write directly
                </span>
                
                <a
                  href="mailto:preetisonule3186@gmail.com"
                  className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-3 group"
                >
                  <Mail size={18} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                  <span>preetisonule3186@gmail.com</span>
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-muted)]">
                  Connect elsewhere
                </span>
                
                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/preetisonule"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon />
                  </a>
                  
                  <a
                    href="https://linkedin.com/preeti-sonule"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                  
                  <a
                    href="https://instagram.com/preetyy.sonule"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Submission Form */}
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-white/5 bg-[var(--color-surface)] p-8 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Form Response Alert */}
              <AnimatePresence mode="wait">
                {status.type !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-3 p-4 rounded-xl text-sm ${
                      status.type === "loading"
                        ? "bg-white/5 text-[var(--color-text-secondary)]"
                        : status.type === "success"
                        ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={16} className="shrink-0" />
                    ) : (
                      <AlertTriangle size={16} className="shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Let's start a project"
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your goals or project ideas..."
                  required
                  rows={4}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <Button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full"
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
