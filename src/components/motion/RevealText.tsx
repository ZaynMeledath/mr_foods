import { motion, useReducedMotion } from 'motion/react';
import { LUXURY_EASE, MOTION_DURATIONS } from '../../utils/motion';

interface RevealTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  staggerDelay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const RevealText = ({
  text,
  className = '',
  tag = 'h2',
  delay = 0.1,
  staggerDelay = 0.045,
  highlightWords = [],
  highlightClassName = '',
}: RevealTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const Tag = tag;

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: '45%',
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

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: 'inline-block' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {words.map((word, index) => {
          const isHighlight = highlightWords.some(
            (hw) => word.toLowerCase().includes(hw.toLowerCase())
          );

          return (
            <span
              key={`${word}-${index}`}
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'top',
                marginRight: '0.28em',
              }}
            >
              <motion.span
                variants={wordVariants}
                style={{ display: 'inline-block' }}
                className={isHighlight ? highlightClassName : undefined}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
};
