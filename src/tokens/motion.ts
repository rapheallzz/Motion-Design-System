/**
 * Motion Design Tokens
 * Standardized animation presets, springs, durations, and easings for Framer Motion
 */

export const springs = {
  /** Soft and gentle movement, great for subtle UI feedback */
  gentle: { type: "spring" as const, stiffness: 120, damping: 14, mass: 1 },
  /** Default spring preset for responsive interaction */
  responsive: { type: "spring" as const, stiffness: 300, damping: 25, mass: 0.8 },
  /** Bouncy and playful transition for emphasis */
  bouncy: { type: "spring" as const, stiffness: 400, damping: 15, mass: 0.8 },
  /** Stiff spring for snappy, high-precision micro-interactions */
  snappy: { type: "spring" as const, stiffness: 500, damping: 30, mass: 0.5 },
  /** Slow, elastic movement for dramatic entrances */
  elastic: { type: "spring" as const, stiffness: 200, damping: 10, mass: 1.2 },
  /** Slow heavy physics for modals and sheets */
  heavy: { type: "spring" as const, stiffness: 180, damping: 22, mass: 1.5 },
} as const;

export const durations = {
  instant: 0.05,
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  deliberate: 0.8,
  extended: 1.2,
} as const;

export const easings = {
  easeInOut: [0.4, 0, 0.2, 1] as const,
  easeOut: [0.0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
  sharp: [0.4, 0, 0.6, 1] as const,
  backOut: [0.34, 1.56, 0.64, 1] as const,
  anticipate: [0.36, 0, 0.66, -0.56] as const,
} as const;

export const scalePresets = {
  tap: 0.95,
  tapSubtle: 0.98,
  hover: 1.05,
  hoverSubtle: 1.02,
  hoverDramatic: 1.1,
  active: 0.92,
} as const;

export const staggerPresets = {
  fast: 0.03,
  normal: 0.07,
  slow: 0.12,
} as const;

export const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
  },
} as const;

export const motionTokens = {
  springs,
  durations,
  easings,
  scalePresets,
  staggerPresets,
  variants,
};
