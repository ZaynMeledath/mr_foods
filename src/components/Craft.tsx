import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { CRAFT_STEPS } from '../data/content';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE, MOTION_DURATIONS } from '../utils/motion';

export const Craft = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const currentStep = CRAFT_STEPS[activeStepIndex];

  return (
    <section id="craft" className="craft-section section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="craft-header text-center"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: MOTION_DURATIONS.section, ease: LUXURY_EASE }}
        >
          <div className="section-badge">The Art of Sweetmaking</div>
          <h2 className="section-title">
            Our Craft &amp;
            <span className="craft-title-italic"> Traditional Preparation</span>
          </h2>
          <OrnamentalDivider size="md" />
          <p className="section-description">
            Traditional sweet-making in Kerala is an unhurried culinary craft.
            Here is a visual journey into how time-honoured ingredients come together.
          </p>
        </motion.div>

        {/* Step Navigation Bar */}
        <motion.div
          className="craft-nav-bar"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: MOTION_DURATIONS.section, ease: LUXURY_EASE }}
        >
          {CRAFT_STEPS.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              className={`craft-nav-item ${idx === activeStepIndex ? 'active' : ''}`}
              onClick={() => setActiveStepIndex(idx)}
            >
              <span className="craft-nav-num">{step.step}</span>
              <span className="craft-nav-title">{step.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Stage Editorial Showcase Card with Smooth Transitions */}
        <motion.div
          className="craft-display-card"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: MOTION_DURATIONS.section, ease: LUXURY_EASE }}
        >
          <div className="craft-card-grid">
            {/* Visual Media with AnimatePresence Cross-fade */}
            <div className="craft-media-wrap">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentStep.step}
                  src={currentStep.image}
                  alt={currentStep.alt}
                  className="craft-image"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: MOTION_DURATIONS.fade, ease: LUXURY_EASE }}
                />
              </AnimatePresence>
              <div className="craft-step-watermark">{currentStep.step}</div>
            </div>

            {/* Narrative Content with AnimatePresence */}
            <div className="craft-content-wrap">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: MOTION_DURATIONS.fade, ease: LUXURY_EASE }}
                >
                  <div className="craft-pill-badge">Stage {currentStep.step} of 05</div>
                  <span className="craft-subtitle">{currentStep.subtitle}</span>
                  <h3 className="craft-step-heading">{currentStep.title}</h3>

                  <div className="craft-divider-line" />

                  <p className="craft-step-description">{currentStep.description}</p>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next controls */}
              <div className="craft-controls">
                <button
                  type="button"
                  className="craft-ctrl-btn prev"
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      prev > 0 ? prev - 1 : CRAFT_STEPS.length - 1
                    )
                  }
                  aria-label="Previous preparation step"
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>

                <div className="craft-dots-indicator">
                  {CRAFT_STEPS.map((_, i) => (
                    <span
                      key={i}
                      className={`craft-dot ${i === activeStepIndex ? 'active' : ''}`}
                      onClick={() => setActiveStepIndex(i)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="craft-ctrl-btn next"
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      prev < CRAFT_STEPS.length - 1 ? prev + 1 : 0
                    )
                  }
                  aria-label="Next preparation step"
                >
                  <span>Next</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .craft-section {
          background-color: var(--color-cream-light);
          position: relative;
        }

        .craft-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .craft-title-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--color-dark-brown);
          display: block;
        }

        /* Nav Pills */
        .craft-nav-bar {
          display: flex;
          overflow-x: auto;
          gap: 0.75rem;
          padding: 0.65rem 0.35rem 1.25rem;
          margin-bottom: 2rem;
          scrollbar-width: thin;
          scrollbar-color: var(--color-antique-gold) transparent;
        }

        @media (min-width: 900px) {
          .craft-nav-bar {
            justify-content: center;
          }
        }

        .craft-nav-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.75rem 1.25rem;
          background-color: var(--color-cream);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          white-space: nowrap;
          cursor: pointer;
          transition: var(--transition-button);
          will-change: transform;
        }

        .craft-nav-item:hover {
          border-color: var(--color-antique-gold);
          transform: translateY(-2px);
        }

        .craft-nav-item:active {
          transform: translateY(0) scale(0.98);
          transition-duration: var(--transition-duration-tap);
        }

        .craft-nav-item.active {
          background-color: var(--color-burgundy);
          border-color: var(--color-burgundy);
          color: var(--color-cream);
          box-shadow: 0 4px 15px rgba(88, 29, 39, 0.2);
        }

        .craft-nav-num {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-antique-gold);
        }

        .craft-nav-item.active .craft-nav-num {
          color: var(--color-gold-light);
        }

        .craft-nav-title {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-text-main);
        }

        .craft-nav-item.active .craft-nav-title {
          color: var(--color-cream);
        }

        /* Main Display Card */
        .craft-display-card {
          background-color: #fff;
          border: 1px solid var(--color-antique-gold);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
          overflow: hidden;
        }

        .craft-card-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 900px) {
          .craft-card-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .craft-media-wrap {
          position: relative;
          min-height: 340px;
          background-color: var(--color-coconut-beige);
          overflow: hidden;
        }

        .craft-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .craft-step-watermark {
          position: absolute;
          bottom: 1rem;
          right: 1.25rem;
          font-family: var(--font-display);
          font-size: 5rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.35);
          line-height: 1;
          pointer-events: none;
        }

        .craft-content-wrap {
          padding: 2.75rem 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .craft-pill-badge {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-antique-gold);
          margin-bottom: 0.5rem;
        }

        .craft-subtitle {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--color-burgundy);
          margin-bottom: 0.25rem;
        }

        .craft-step-heading {
          font-family: var(--font-display);
          font-size: 1.9rem;
          font-weight: 700;
          color: var(--color-burgundy);
          line-height: 1.25;
          margin-bottom: 1.25rem;
        }

        .craft-divider-line {
          width: 60px;
          height: 2px;
          background-color: var(--color-antique-gold);
          margin-bottom: 1.5rem;
        }

        .craft-step-description {
          font-family: var(--font-sans);
          font-size: 1.02rem;
          line-height: 1.75;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .craft-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
        }

        .craft-ctrl-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-sans);
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--color-burgundy);
          padding: 0.5rem 0.75rem;
          background: none;
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: transform var(--transition-duration-hover) var(--transition-ease-luxury),
                      color var(--transition-duration-hover) var(--transition-ease-luxury);
          will-change: transform;
        }

        .craft-ctrl-btn.prev:hover {
          transform: translateX(-3px);
          color: var(--color-antique-gold);
        }

        .craft-ctrl-btn.next:hover {
          transform: translateX(3px);
          color: var(--color-antique-gold);
        }

        .craft-ctrl-btn:active {
          transform: scale(0.96);
          transition-duration: var(--transition-duration-tap);
        }

        .craft-dots-indicator {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .craft-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-border);
          cursor: pointer;
          transition: transform var(--transition-duration-micro) var(--transition-ease-luxury),
                      background-color var(--transition-duration-micro) var(--transition-ease-luxury),
                      width var(--transition-duration-micro) var(--transition-ease-luxury);
          will-change: transform;
        }

        .craft-dot:hover {
          background-color: var(--color-antique-gold);
          transform: scale(1.25);
        }

        .craft-dot.active {
          background-color: var(--color-burgundy);
          width: 22px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};
