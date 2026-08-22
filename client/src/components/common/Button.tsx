import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

const Button = ({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  className = "",
  target,
  rel,
}: ButtonProps) => {
  const isPrimary = variant === "primary";

  const baseStyles = `
    inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3.5
    text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none
    disabled:opacity-50 disabled:cursor-not-allowed
    ${
      isPrimary
        ? "bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-[var(--color-accent-hover)]"
        : "border border-white/5 bg-white/[0.02] text-[var(--color-text-primary)] hover:bg-white/5"
    }
    ${className}
  `;

  const arrowBg = isPrimary ? "bg-black/5" : "bg-white/5";
  const arrowColor = isPrimary ? "text-[var(--color-background)]" : "text-[var(--color-text-primary)]";

  const buttonContent = (
    <>
      <span className="translate-y-[0.5px]">{children}</span>
      <span className={`flex h-5 w-5 items-center justify-center rounded-md ${arrowBg} ${arrowColor}`}>
        <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-[0.5px] group-hover:-translate-y-[0.5px]" />
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={`group ${baseStyles}`}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { y: -3 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`group ${baseStyles}`}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;