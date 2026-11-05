/**
 * MR Group Foods – Centralized Motion & Animation Configuration
 * Reusable durations, easing curves, Framer Motion transition presets, and CSS timing helpers.
 */

// Premium Luxury Easing Curves
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
export const GENTLE_EASE = [0.22, 1, 0.36, 1] as const;
export const SOFT_EASE = [0.4, 0, 0.2, 1] as const;

// Centralized Durations (in seconds)
// Increased for ultra-smooth, silky editorial hover & micro-interactions
export const MOTION_DURATIONS = {
  instant: 0.15,
  tap: 0.18,
  micro: 0.32,
  hover: 0.5,       // Smooth button, arrow & link hover
  cardHover: 0.65,   // Silky card, milestone & media hover
  fade: 0.65,
  section: 0.85,
  reveal: 1.1,
} as const;

// Reusable Framer Motion Transition Presets
export const HOVER_TRANSITION = {
  duration: MOTION_DURATIONS.hover,
  ease: LUXURY_EASE,
} as const;

export const CARD_HOVER_TRANSITION = {
  duration: MOTION_DURATIONS.cardHover,
  ease: LUXURY_EASE,
} as const;

export const TAP_TRANSITION = {
  duration: MOTION_DURATIONS.tap,
  ease: 'easeOut',
} as const;

export const MICRO_HOVER_TRANSITION = {
  duration: MOTION_DURATIONS.micro,
  ease: LUXURY_EASE,
} as const;

// CSS string timing helpers (for style tags & inline styles)
export const CSS_TIMINGS = {
  hoverDuration: `${MOTION_DURATIONS.hover}s`,
  cardDuration: `${MOTION_DURATIONS.cardHover}s`,
  luxuryEase: 'cubic-bezier(0.16, 1, 0.3, 1)',
  hoverTransition: `${MOTION_DURATIONS.hover}s cubic-bezier(0.16, 1, 0.3, 1)`,
  cardTransition: `${MOTION_DURATIONS.cardHover}s cubic-bezier(0.16, 1, 0.3, 1)`,
} as const;
