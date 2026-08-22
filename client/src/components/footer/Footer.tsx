import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import Container from "../common/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[var(--color-background-secondary)] border-t border-white/5 py-12 md:py-16 overflow-hidden">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Logo / copyright */}
          <div className="flex flex-col gap-2">
            <a href="/" className="group flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-black text-[var(--color-background)] transition-transform group-hover:scale-105">
                PS
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-text-primary)]">
                PREETI SONULE
              </span>
            </a>
            
            <p className="text-[11px] text-[var(--color-text-muted)] tracking-wide mt-2">
              &copy; {currentYear} Preeti Sonule. All rights reserved. Designed & Engineered with care.
            </p>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            
            {/* Socials */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/preetisonule"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                GitHub
              </a>
              
              <a
                href="https://linkedin.com/preeti-sonule"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                LinkedIn
              </a>
              
              <a
                href="https://instagram.com/preetyy.sonule"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                Instagram
              </a>
            </div>

            {/* Back to top */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-text-primary)] transition-all hover:bg-white/10 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>

          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
