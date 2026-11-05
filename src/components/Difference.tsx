import { Scroll, Users, Sparkles, Heart } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { DIFFERENCE_ITEMS } from '../data/content';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE, HOVER_TRANSITION, CARD_HOVER_TRANSITION } from '../utils/motion';

export const Difference = () => {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (name: string) => {
    switch (name) {
      case 'scroll':
        return <Scroll size={28} className="text-gold" />;
      case 'users':
        return <Users size={28} className="text-gold" />;
      case 'sparkles':
        return <Sparkles size={28} className="text-gold" />;
      case 'heart':
        return <Heart size={28} className="text-gold" />;
      default:
        return <Sparkles size={28} className="text-gold" />;
    }
  };

  return (
    <section className="difference-section section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="difference-header text-center"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: LUXURY_EASE }}
        >
          <div className="section-badge">The MR Group Foods Promise</div>
          <h2 className="section-title">
            Rooted in Tradition.
            <span className="diff-title-italic"> Made with Care.</span>
          </h2>
          <OrnamentalDivider size="md" />
          <p className="section-description">
            Our guiding philosophy is rooted in preserving the authenticity of Kerala&apos;s culinary heritage,
            treating every preparation as an heirloom meant to be shared.
          </p>
        </motion.div>

        {/* 4 Feature Blocks */}
        <div className="difference-grid">
          {DIFFERENCE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="diff-card"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: LUXURY_EASE,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                      boxShadow: '0 18px 36px -8px rgba(56, 37, 29, 0.12)',
                      borderColor: 'var(--color-antique-gold)',
                      transition: CARD_HOVER_TRANSITION,
                    }
              }
            >
              <div className="diff-card-badge">0{index + 1}</div>
              <motion.div
                className="diff-icon-wrapper"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                transition={HOVER_TRANSITION}
              >
                {getIcon(item.iconName)}
              </motion.div>
              <h3 className="diff-item-title">{item.title}</h3>
              <p className="diff-item-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .difference-section {
          background-color: var(--color-coconut-beige);
          position: relative;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .difference-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .diff-title-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--color-dark-brown);
          display: block;
        }

        .difference-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 640px) {
          .difference-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .difference-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .diff-card {
          position: relative;
          background-color: var(--color-cream-light);
          border: 1px solid rgba(182, 154, 98, 0.35);
          border-radius: var(--radius-md);
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s ease;
        }

        .diff-card-badge {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          color: rgba(182, 154, 98, 0.45);
        }

        .diff-icon-wrapper {
          width: 58px;
          height: 58px;
          border-radius: var(--radius-sm);
          background-color: var(--color-cream);
          border: 1px solid rgba(182, 154, 98, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: background-color 0.3s ease;
        }

        .diff-card:hover .diff-icon-wrapper {
          background-color: #fff;
        }

        .diff-item-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-burgundy);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .diff-item-desc {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          line-height: 1.65;
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  );
};
