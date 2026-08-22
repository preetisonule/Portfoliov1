import { motion } from "motion/react";
import pixelImage from "../../assets/images/pixel_cozy.png";

const HeroPortrait = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.35,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-[440px]
        md:max-w-[500px]
        lg:max-w-[560px]
      "
    >
      {/* Subtle ambient back-glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-[var(--color-accent)]/5
          blur-[100px]
        "
      />

      {/* Main image container with strong dark frame */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          overflow-hidden
          rounded-[1.5rem]
          border
          border-white/5
          bg-[var(--color-surface)]
          shadow-2xl
          aspect-[4/3]
        "
      >
        <img
          src={pixelImage}
          alt="Preeti Sonule Cozy Pixel Workspace"
          className="
            block
            h-full
            w-full
            object-cover
          "
        />

        {/* Soft dark vignette overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[var(--color-background)]/40
            via-transparent
            to-transparent
          "
        />
      </motion.div>

      {/* Floating availability badge (Meaningful detail) */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
        className="
          absolute
          -bottom-6
          left-6
          z-20
          flex
          items-center
          gap-3
          rounded-full
          border
          border-white/5
          bg-[var(--color-surface)]/95
          px-4
          py-2.5
          shadow-xl
          backdrop-blur-md
        "
      >
        <span className="relative flex h-2 w-2">
          <span
            className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-[var(--color-accent)]
              opacity-65
            "
          />

          <span
            className="
              relative
              inline-flex
              h-2
              w-2
              rounded-full
              bg-[var(--color-accent)]
            "
          />
        </span>

        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
          Open to Opportunities
        </span>
      </motion.div>
    </motion.div>
  );
};

export default HeroPortrait;