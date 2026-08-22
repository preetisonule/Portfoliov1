import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Container from "../common/Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section based on scroll offsets
      const sections = ["about", "projects", "experience", "skills"];
      const scrollPosition = window.scrollY + 250;

      let currentSection = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent background scrolling when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-[var(--color-background-secondary)]/80 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo / Initials */}
            <a href="/" className="group flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-black text-[var(--color-background)] transition-transform group-hover:scale-105">
                PS
              </span>
              <span className="hidden text-xs font-black uppercase tracking-[0.2em] text-[var(--color-text-primary)] sm:block">
                PREETI SONULE
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative text-xs font-bold uppercase tracking-[0.15em] transition-colors py-1 hover:text-[var(--color-text-primary)] ${
                      isActive ? "text-[var(--color-accent)]" : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbarActiveIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Let's Talk CTA */}
            <div className="hidden items-center md:flex">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-text-primary)] transition-colors hover:bg-white/10 md:hidden cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-[var(--color-background-secondary)] pt-32 px-6"
          >
            {/* Background elements */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />
            <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />

            <Container className="flex flex-col justify-between flex-grow pb-12 z-10">
              <div className="flex flex-col gap-8">
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] font-semibold">
                  Navigation
                </span>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.08, duration: 0.5, ease: "easeOut" }}
                      key={link.label}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors uppercase"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  
                  <motion.a
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + navLinks.length * 0.08, duration: 0.5, ease: "easeOut" }}
                    href="#contact"
                    onClick={handleLinkClick}
                    className="text-4xl font-black tracking-tight text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors uppercase"
                  >
                    Let's Talk
                  </motion.a>
                </nav>
              </div>

              {/* Bottom footer links inside mobile menu */}
              <div className="flex flex-col gap-6 border-t border-white/5 pt-8">
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] font-semibold">
                  Socials
                </span>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors font-medium"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;