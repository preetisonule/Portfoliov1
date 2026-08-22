import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import axios from "axios";
import Container from "../common/Container";
import { mockTestimonials } from "../../data/mockData";
import type { Testimonial } from "../../types";
import { fadeUp, staggerContainer } from "../../animations/variants";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/testimonials");
        if (res.data && res.data.success && res.data.data.length > 0) {
          setTestimonials(res.data.data);
        }
      } catch (err) {
        console.warn("Could not fetch testimonials from server. Using mock fallback.", err);
      }
    };
    fetchTestimonials();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (testimonials.length === 0) return null;
  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[var(--color-background)] overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-[var(--color-accent)]/5 blur-[100px]" />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col max-w-4xl mx-auto w-full"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              06 / RECOMMENDATIONS
            </span>
          </motion.div>

          {/* Testimonial Quote Panel */}
          <div className="min-h-[220px] md:min-h-[250px] relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Large Italic Quote */}
                <blockquote className="text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-relaxed tracking-tight text-[var(--color-text-primary)] italic">
                  "{current.quote}"
                </blockquote>

                {/* Author Metadata */}
                <div>
                  <span className="block text-sm font-black uppercase tracking-widest text-[var(--color-text-primary)]">
                    {current.name}
                  </span>
                  
                  <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mt-1 block">
                    {current.role} / {current.company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-12 border-t border-white/5 pt-8">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-text-primary)] transition-all hover:bg-white/10 hover:border-white/20 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} />
            </button>
            
            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-text-primary)] transition-all hover:bg-white/10 hover:border-white/20 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight size={16} />
            </button>

            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--color-text-muted)] ml-4">
              {activeIndex + 1} / {testimonials.length}
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
