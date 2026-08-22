import { motion } from "motion/react";

import "./Hero.css";

import { fadeUp, staggerContainer } from "../../animations/variants";

const Hero = () => {
  return (
    <section className="portfolio-hero" id="top">
      <div className="portfolio-hero__wrap">
        {/* Left content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="portfolio-hero__copy"
        >
          {/* Eyebrow Label */}
          <motion.div variants={fadeUp} className="portfolio-hero__eyebrow">
            <span /> Software engineer
          </motion.div>

          {/* Main Typographic Name */}
          <motion.h1
            variants={fadeUp}
            className="portfolio-hero__title"
            whileHover="hover"
          >
            <motion.span
              variants={{
                initial: { color: "#ffffff" },
                hover: { color: "#e8a23a" },
              }}
              transition={{ duration: 0.3 }}
            >
              Preeti
            </motion.span>
            <br />
            <motion.em
              style={{ fontStyle: "normal" }}
              variants={{
                initial: { color: "#e8a23a" },
                hover: { color: "#ffffff" },
              }}
              transition={{ duration: 0.3 }}
            >
              Sonule
            </motion.em>
          </motion.h1>

          {/* Hook / Statement */}
          <motion.h2 variants={fadeUp} className="portfolio-hero__line">
            I Turn Complex Business Challenges Into Reliable, Scalable Software.
          </motion.h2>

          {/* Technical, specific bio */}
          <motion.p variants={fadeUp} className="portfolio-hero__intro">
            CS Engineer with 3+ years building full-stack applications using
            React, Node.js, and Python. I architect RESTful APIs, manage AWS
            (EC2/RDS) infrastructure, and optimize databases to handle
            high-traffic loads.
          </motion.p>

          {/* Button CTA Hierarchy */}
          <motion.div variants={fadeUp} className="portfolio-hero__actions">
            <a className="portfolio-hero__button" href="#projects">
              See Case Studies <b>→</b>
            </a>

            <a
              className="portfolio-hero__text-link"
              href="https://github.com/preetisonule"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <b>↗</b>
            </a>

            <a
              className="portfolio-hero__resume"
              href="https://drive.google.com/uc?export=download&id=1dCgB-sIMqCzyQ1ziYQ4QcZg6LrbeMHJ7"
              download="Preeti_Sonule_Resume.pdf"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="portfolio-photo"
        >
          {/* BACK DECORATIVE LINES */}
          <svg
            className="portfolio-photo__lines portfolio-photo__lines--back"
            viewBox="0 0 500 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 170
                 C100 60 190 120 240 55
                 C300 -20 420 50 395 145
                 C380 205 450 235 410 300
                 C375 360 450 430 380 500
                 C320 560 250 500 190 545
                 C110 600 125 490 65 450
                 C10 410 90 340 45 290
                 C10 250 20 210 40 170Z"
            />
          </svg>

          {/* CURVED PHOTO */}
          <div className="portfolio-photo__frame">
            <img src="/profileV2.png" alt="Preeti Sonule" />
          </div>

          {/* FRONT DECORATIVE LINES */}
          <svg
            className="portfolio-photo__lines portfolio-photo__lines--front"
            viewBox="0 0 500 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </motion.div>

        <div className="portfolio-hero__scroll">
          Scroll to explore <span>↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
