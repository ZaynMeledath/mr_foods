import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { LUXURY_EASE, MOTION_DURATIONS } from '../../utils/motion';

interface MotionFadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  amount?: number;
}

export const MotionFade = ({
  children,
  delay = 0,
  duration = MOTION_DURATIONS.section,
  y = 24,
  className = '',
  amount = 0.15,
}: MotionFadeProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
