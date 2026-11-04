import type { Variants } from 'motion/react';

// Premium Editorial Motion Constants
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
export const GENTLE_EASE = [0.22, 1, 0.36, 1] as const;
export const SOFT_EASE = [0.4, 0, 0.2, 1] as const;

// Transition presets
export const transitions = {
  micro: { duration: 0.22, ease: LUXURY_EASE },
  button: { duration: 0.3, ease: LUXURY_EASE },
  text: { duration: 0.75, ease: LUXURY_EASE },
  section: { duration: 0.85, ease: LUXURY_EASE },
  imageReveal: { duration: 1.1, ease: LUXURY_EASE },
  stagger: 0.1,
  staggerSlow: 0.14,
};

// Section / Container Variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    },
  },
};

export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

// Cinematic Image Reveal
export const imageMaskReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
    clipPath: 'inset(12% 12% 12% 12%)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 1.2,
      ease: LUXURY_EASE,
    },
  },
};

export const imageFadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: LUXURY_EASE,
    },
  },
};

// Floating subtle ornament animation
export const gentleFloat = {
  y: [-4, 4, -4],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const slowFloat = {
  y: [-3, 3, -3],
  rotate: [-0.5, 0.5, -0.5],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
