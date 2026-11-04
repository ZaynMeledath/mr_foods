import { MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BRAND_INFO } from '../data/content';

export const WhatsAppButton = () => {
  const shouldReduceMotion = useReducedMotion();
  const message = encodeURIComponent(
    'Hello MR Foods! I would like to enquire about ordering traditional Kerala sweets.'
  );
  const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;

  return (
    <>
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        aria-label="Chat with MR Foods on WhatsApp"
        title="Direct WhatsApp Enquiry"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: shouldReduceMotion ? 0 : [0, -5, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 1.4 },
          scale: { duration: 0.6, delay: 1.4 },
          y: {
            repeat: Infinity,
            duration: 4.5,
            ease: 'easeInOut',
            delay: 2,
          },
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 14px 32px rgba(37, 211, 102, 0.55)',
        }}
        whileTap={{ scale: 0.96 }}
      >
        <MessageCircle size={26} className="wa-icon" />
        <span className="wa-label">Enquire on WhatsApp</span>
      </motion.a>

      <style>{`
        .wa-floating-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
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
        }

        .wa-floating-btn:hover {
          color: #ffffff;
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
