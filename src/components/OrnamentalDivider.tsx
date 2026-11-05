import { motion, useReducedMotion } from 'motion/react';
import { LUXURY_EASE, MOTION_DURATIONS } from '../utils/motion';

interface OrnamentalDividerProps {
  color?: 'gold' | 'burgundy' | 'cream';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const OrnamentalDivider = ({
  color = 'gold',
  className = '',
  size = 'md',
}: OrnamentalDividerProps) => {
  const shouldReduceMotion = useReducedMotion();

  const colorMap = {
    gold: 'var(--color-antique-gold)',
    burgundy: 'var(--color-burgundy)',
    cream: 'var(--color-cream)',
  };

  const currentColor = colorMap[color];
  const sizeMap = {
    sm: { width: 140, iconSize: 14 },
    md: { width: 220, iconSize: 18 },
    lg: { width: 300, iconSize: 22 },
  };

  const { width, iconSize } = sizeMap[size];

  return (
    <motion.div
      className={`kasavu-divider ${className}`}
      style={{ maxWidth: `${width}px` }}
      aria-hidden="true"
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: MOTION_DURATIONS.section, ease: LUXURY_EASE }}
    >
      <motion.span
        className="kasavu-line"
        style={{
          background: `linear-gradient(90deg, transparent, ${currentColor}, transparent)`,
          transformOrigin: 'right center',
        }}
        initial={shouldReduceMotion ? undefined : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: MOTION_DURATIONS.fade, ease: LUXURY_EASE }}
      />
      {/* Traditional Kerala Stylized Lotus / Uruli Motif */}
      <motion.svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: currentColor, flexShrink: 0 }}
        initial={shouldReduceMotion ? undefined : { scale: 0.6, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: MOTION_DURATIONS.fade, delay: 0.15, ease: LUXURY_EASE }}
      >
        <path
          d="M12 2C13.5 6 15 8.5 12 12C9 8.5 10.5 6 12 2Z"
          fill={currentColor}
        />
        <path
          d="M12 12C15.5 10 18.5 11.5 21 14C17.5 15.5 14.5 14 12 12Z"
          fill={currentColor}
          opacity="0.85"
        />
        <path
          d="M12 12C8.5 10 5.5 11.5 3 14C6.5 15.5 9.5 14 12 12Z"
          fill={currentColor}
          opacity="0.85"
        />
        <circle cx="12" cy="17" r="1.5" fill={currentColor} />
      </motion.svg>
      <motion.span
        className="kasavu-line"
        style={{
          background: `linear-gradient(90deg, transparent, ${currentColor}, transparent)`,
          transformOrigin: 'left center',
        }}
        initial={shouldReduceMotion ? undefined : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: MOTION_DURATIONS.fade, ease: LUXURY_EASE }}
      />
    </motion.div>
  );
};
