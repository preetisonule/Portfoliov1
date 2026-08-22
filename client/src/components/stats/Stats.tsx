import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import Container from "../common/Container";
import { fadeUp, staggerContainer } from "../../animations/variants";

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500; // ms
    const increment = end / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-6xl sm:text-7xl md:text-8xl font-black text-[var(--color-accent)] tracking-tight">
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="relative py-20 md:py-24 bg-[var(--color-background)] overflow-hidden">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center items-center justify-center border-t border-b border-white/5 py-12 md:py-16"
        >
          {/* Stat 1 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <AnimatedNumber value={10} suffix="+" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mt-3">
              Projects Completed
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <AnimatedNumber value={3} suffix="+" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mt-3">
              Years Experience
            </span>
          </motion.div>

          {/* Stat 3 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <AnimatedNumber value={15} suffix="+" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mt-3">
              Tech Stack Tools
            </span>
          </motion.div>

          {/* Stat 4 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <span className="text-6xl sm:text-7xl md:text-8xl font-black text-[var(--color-accent)] tracking-tight">
              ∞
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mt-3">
              Creative Ideas
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Stats;
