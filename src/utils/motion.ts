import type { Variants } from 'motion/react';
import {
  LUXURY_EASE,
  GENTLE_EASE,
  SOFT_EASE,
  MOTION_DURATIONS,
  HOVER_TRANSITION,
  CARD_HOVER_TRANSITION,
  TAP_TRANSITION,
  MICRO_HOVER_TRANSITION,
  FADE_TRANSITION,
  SECTION_TRANSITION,
  REVEAL_TRANSITION,
  CSS_TIMINGS,
} from '../config/animations';

export {
  LUXURY_EASE,
  GENTLE_EASE,
  SOFT_EASE,
  MOTION_DURATIONS,
  HOVER_TRANSITION,
  CARD_HOVER_TRANSITION,
  TAP_TRANSITION,
  MICRO_HOVER_TRANSITION,
  FADE_TRANSITION,
  SECTION_TRANSITION,
  REVEAL_TRANSITION,
  CSS_TIMINGS,
};

// Transition presets strictly bound to config/animations.ts
export const transitions = {
  micro: { duration: MOTION_DURATIONS.micro, ease: LUXURY_EASE },
  button: { duration: MOTION_DURATIONS.hover, ease: LUXURY_EASE },
  card: { duration: MOTION_DURATIONS.cardHover, ease: LUXURY_EASE },
  text: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE },
  section: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE },
  imageReveal: { duration: MOTION_DURATIONS.reveal, ease: LUXURY_EASE },
  stagger: 0.1,
  staggerSlow: 0.14,
};

// Section / Container Variants using config/animations.ts
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.section,
      ease: LUXURY_EASE,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: MOTION_DURATIONS.fade,
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
      duration: MOTION_DURATIONS.section,
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
      duration: MOTION_DURATIONS.reveal,
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
      duration: MOTION_DURATIONS.section,
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
