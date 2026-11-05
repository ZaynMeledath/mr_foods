import { motion, useReducedMotion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_INFO } from '../data/content';
import { MOTION_DURATIONS } from '../utils/motion';

export const WhatsAppButton = () => {
  const shouldReduceMotion = useReducedMotion();
  const message = encodeURIComponent(
    'Hello MR Group Foods! I would like to enquire about ordering traditional Kerala sweets.'
  );
  const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;

  return (
    <>
      <motion.div
        className="wa-floating-wrap"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: shouldReduceMotion ? 0 : [0, -6, 0],
        }}
        transition={{
          opacity: { duration: MOTION_DURATIONS.fade, delay: 1.4 },
          scale: { duration: MOTION_DURATIONS.fade, delay: 1.4 },
          y: {
            repeat: Infinity,
            duration: 4.5,
            ease: 'easeInOut',
            delay: 2,
          },
        }}
      >
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-floating-btn"
          aria-label="Chat with MR Group Foods on WhatsApp"
          title="Direct WhatsApp Enquiry"
        >
          <WhatsAppIcon size={26} className="wa-icon" />
          <span className="wa-label">Enquire on WhatsApp</span>
        </a>
      </motion.div>

      <style>{`
        .wa-floating-wrap {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
        }

        .wa-floating-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background-color: #25D366;
          color: #ffffff;
          padding: 0.75rem 1.15rem;
          border-radius: 50px;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
          text-decoration: none;
          cursor: pointer;
          transition: var(--transition-button);
          will-change: transform, box-shadow;
          transform: translateZ(0);
        }

        .wa-floating-btn:hover {
          color: #ffffff;
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 14px 32px rgba(37, 211, 102, 0.55);
          background-color: #20BA5C;
        }

        .wa-floating-btn:active {
          transform: translateY(0) scale(0.97);
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
          transition-duration: var(--transition-duration-tap);
        }

        .wa-icon {
          flex-shrink: 0;
        }

        .wa-label {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          display: none;
        }

        @media (min-width: 768px) {
          .wa-label {
            display: inline-block;
          }
        }
      `}</style>
    </>
  );
};
