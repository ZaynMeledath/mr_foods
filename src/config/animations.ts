/**
 * MR Group Foods – Centralized Motion & Animation Configuration
 * Reusable durations, easing curves, Framer Motion transition presets, and CSS timing helpers.
 */

// Premium Luxury Easing Curves
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
export const GENTLE_EASE = [0.22, 1, 0.36, 1] as const;
export const SOFT_EASE = [0.4, 0, 0.2, 1] as const;

// Centralized Durations (in seconds)
export const MOTION_DURATIONS = {
  instant: 0.15,
  tap: 0.18,
  micro: 0.32,
  hover: 0.5,        // Smooth button, arrow & link hover
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

export const FADE_TRANSITION = {
  duration: MOTION_DURATIONS.fade,
  ease: LUXURY_EASE,
} as const;

export const SECTION_TRANSITION = {
  duration: MOTION_DURATIONS.section,
  ease: LUXURY_EASE,
} as const;

export const REVEAL_TRANSITION = {
  duration: MOTION_DURATIONS.reveal,
  ease: LUXURY_EASE,
} as const;

// CSS string timing helpers (for style tags & inline styles)
export const CSS_TIMINGS = {
  instantDuration: `${MOTION_DURATIONS.instant}s`,
  tapDuration: `${MOTION_DURATIONS.tap}s`,
  microDuration: `${MOTION_DURATIONS.micro}s`,
  hoverDuration: `${MOTION_DURATIONS.hover}s`,
  cardDuration: `${MOTION_DURATIONS.cardHover}s`,
  fadeDuration: `${MOTION_DURATIONS.fade}s`,
  sectionDuration: `${MOTION_DURATIONS.section}s`,
  revealDuration: `${MOTION_DURATIONS.reveal}s`,
  luxuryEase: 'cubic-bezier(0.16, 1, 0.3, 1)',
  gentleEase: 'cubic-bezier(0.22, 1, 0.36, 1)',
  softEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  hoverTransition: `${MOTION_DURATIONS.hover}s cubic-bezier(0.16, 1, 0.3, 1)`,
  cardTransition: `${MOTION_DURATIONS.cardHover}s cubic-bezier(0.16, 1, 0.3, 1)`,
  buttonTransition: `transform ${MOTION_DURATIONS.hover}s cubic-bezier(0.16, 1, 0.3, 1), background-color ${MOTION_DURATIONS.hover}s cubic-bezier(0.16, 1, 0.3, 1), border-color ${MOTION_DURATIONS.hover}s cubic-bezier(0.16, 1, 0.3, 1), color ${MOTION_DURATIONS.hover}s cubic-bezier(0.16, 1, 0.3, 1), box-shadow ${MOTION_DURATIONS.hover}s cubic-bezier(0.16, 1, 0.3, 1), filter ${MOTION_DURATIONS.hover}s cubic-bezier(0.16, 1, 0.3, 1)`,
} as const;
