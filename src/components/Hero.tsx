import { ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE, MOTION_DURATIONS } from '../utils/motion';

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Staggered choreographed timeline
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_DURATIONS.section,
        ease: LUXURY_EASE,
      },
    },
  };

  const headlineWordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 36 },
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
    <section id="hero" className="hero-section">
      {/* Subtle traditional background decorative grid / aura */}
      <div className="hero-bg-texture" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Text Column: Editorial Heritage Presentation */}
          <motion.div
            className="hero-content"
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemFadeUp} className="hero-badge">
              <img
                src="/mr_group_logo.png"
                alt="MR Group Foods"
                className="hero-badge-logo"
                width="20"
                height="20"
              />
              <span>Two Delicacies • Generations of Culinary Heritage</span>
            </motion.div>

            {/* Headline with progressive line / word reveal */}
            <h1 className="hero-headline">
              <span className="headline-line">
                <motion.span
                  className="headline-word"
                  variants={headlineWordVariants}
                  style={{ display: 'inline-block' }}
                >
                  Tradition,
                </motion.span>
              </span>
              <span className="headline-line hero-headline-italic">
                <motion.span
                  className="headline-word"
                  variants={headlineWordVariants}
                  style={{ display: 'inline-block' }}
                >
                  Crafted
                </motion.span>{' '}
                <motion.span
                  className="headline-word"
                  variants={headlineWordVariants}
                  style={{ display: 'inline-block' }}
                >
                  with
                </motion.span>{' '}
                <motion.span
                  className="headline-word"
                  variants={headlineWordVariants}
                  style={{ display: 'inline-block' }}
                >
                  Love.
                </motion.span>
              </span>
            </h1>

            {/* Ornamental Divider with gentle expand */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scaleX: 0.6 },
                visible: {
                  opacity: 1,
                  scaleX: 1,
                  transition: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE },
                },
              }}
              style={{ transformOrigin: 'left center' }}
            >
              <OrnamentalDivider size="sm" className="hero-divider" />
            </motion.div>

            {/* Supporting Text */}
            <motion.p variants={itemFadeUp} className="hero-support-text">
              Bringing the authentic taste of Kerala&apos;s traditional sweets to your home.
              Made with care, inspired by generations of culinary heritage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemFadeUp} className="hero-actions">
              <button
                type="button"
                className="btn btn-primary hero-btn-main"
                onClick={() => scrollTo('#products')}
              >
                <span>Explore Our Products</span>
              </button>

              <button
                type="button"
                className="btn btn-outline hero-btn-sub"
                onClick={() => scrollTo('#story')}
              >
                <span>Our Story</span>
              </button>
            </motion.div>

            {/* Heritage Trust Badges */}
            <motion.div variants={itemFadeUp} className="hero-pillars">
              <div className="pillar-item">
                <span className="pillar-number">100%</span>
                <span className="pillar-label">Traditional Recipes</span>
              </div>
              <div className="pillar-separator" />
              <div className="pillar-item">
                <span className="pillar-number">Pure</span>
                <span className="pillar-label">Family-Owned Craft</span>
              </div>
              <div className="pillar-separator" />
              <div className="pillar-item">
                <span className="pillar-number">Fresh</span>
                <span className="pillar-label">Handcrafted Batches</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Food Centerpiece with Cinematic Entrance */}
          <div className="hero-media-wrapper">
            <motion.div
              className="hero-media-frame"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96, clipPath: 'inset(8% 8% 8% 8%)' }
              }
              animate={{
                opacity: 1,
                scale: 1,
                clipPath: 'inset(0% 0% 0% 0%)',
              }}
              transition={{
                duration: MOTION_DURATIONS.reveal,
                delay: 0.25,
                ease: LUXURY_EASE,
              }}
            >
              {/* Kerala Ornamental Gold Border Corner Details */}
              <motion.div
                className="frame-corner top-left"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: MOTION_DURATIONS.fade, delay: 0.8 }}
              />
              <motion.div
                className="frame-corner top-right"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: MOTION_DURATIONS.fade, delay: 0.85 }}
              />
              <motion.div
                className="frame-corner bottom-left"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: MOTION_DURATIONS.fade, delay: 0.9 }}
              />
              <motion.div
                className="frame-corner bottom-right"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: MOTION_DURATIONS.fade, delay: 0.95 }}
              />

              <div className="hero-image-container">
                {/* Slow, imperceptible image zoom / Ken Burns effect */}
                <motion.img
                  src="/images/hero-kerala-sweets.webp"
                  alt="Freshly prepared golden Unniyappam and Ariyunda arranged on traditional Kerala brass Uruli and banana leaf"
                  className="hero-image"
                  width="720"
                  height="720"
                  loading="eager"
                  fetchPriority="high"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.05, 1],
                        }
                  }
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="hero-image-overlay" />
              </div>

              {/* Floating Signature Delicacies Tag with subtle continuous float */}
              <motion.div
                className="hero-floating-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{
                  opacity: 1,
                  y: shouldReduceMotion ? 0 : [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: MOTION_DURATIONS.section, delay: 0.95, ease: LUXURY_EASE },
                  y: {
                    repeat: Infinity,
                    duration: 5.5,
                    ease: 'easeInOut',
                    delay: 1.2,
                  },
                }}
              >
                <div className="floating-card-pill">Signature Pair</div>
                <div className="floating-card-title">Unniyappam &amp; Ariyunda</div>
                <div className="floating-card-sub">Freshly Prepared • Authentic Kerala Flavours</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero-scroll-prompt"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION_DURATIONS.section, delay: 1.25 }}
        >
          <button
            type="button"
            onClick={() => scrollTo('#story')}
            aria-label="Scroll to Our Story"
            className="scroll-btn"
          >
            <span className="scroll-text">DISCOVER OUR STORY</span>
            <ArrowDown size={14} className="scroll-icon" />
          </button>
        </motion.div>
      </div>

      {/* Hero Styles */}
      <style>{`
        .hero-section {
          position: relative;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          padding: 3rem 0 2.5rem;
          background-color: var(--color-cream);
          overflow: hidden;
        }

        .hero-bg-texture {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image: radial-gradient(var(--color-dark-brown) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.05fr 1fr;
            gap: 4rem;
          }
        }

        .hero-content {
          text-align: center;
        }

        @media (min-width: 992px) {
          .hero-content {
            text-align: left;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-antique-gold);
          background-color: rgba(182, 154, 98, 0.1);
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          border: 1px solid rgba(182, 154, 98, 0.25);
          margin-bottom: 1.25rem;
        }

        .hero-badge-logo {
          width: 20px;
          height: 20px;
          object-fit: contain;
          border-radius: 4px;
          display: block;
        }

        .hero-headline {
          font-family: var(--font-display);
          font-size: 2.75rem;
          font-weight: 600;
          color: var(--color-burgundy);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 768px) {
          .hero-headline {
            font-size: 3.75rem;
          }
        }

        @media (min-width: 1200px) {
          .hero-headline {
            font-size: 4.25rem;
          }
        }

        .headline-line {
          display: block;
          overflow: hidden;
        }

        .hero-headline-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--color-dark-brown);
        }

        .hero-divider {
          margin: 1rem auto 1.25rem;
        }

        @media (min-width: 992px) {
          .hero-divider {
            margin: 1rem 0 1.25rem;
          }
        }

        .hero-support-text {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          max-width: 540px;
          margin: 0 auto 2.25rem;
        }

        @media (min-width: 992px) {
          .hero-support-text {
            margin: 0 0 2.25rem;
            font-size: 1.12rem;
          }
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 992px) {
          .hero-actions {
            justify-content: flex-start;
          }
        }

        .hero-btn-main {
          padding: 0.95rem 2.2rem;
          font-size: 0.9rem;
        }

        .hero-btn-sub {
          padding: 0.95rem 2rem;
          font-size: 0.9rem;
        }

        .hero-pillars {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(182, 154, 98, 0.25);
          max-width: 520px;
          margin: 0 auto;
        }

        @media (max-width: 480px) {
          .hero-pillars {
            gap: 0.85rem;
          }
        }

        @media (min-width: 992px) {
          .hero-pillars {
            justify-content: flex-start;
            margin: 0;
          }
        }

        .pillar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 992px) {
          .pillar-item {
            align-items: flex-start;
          }
        }

        .pillar-number {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-burgundy);
          line-height: 1.1;
        }

        .pillar-label {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: var(--color-text-muted);
          letter-spacing: 0.04em;
          margin-top: 3px;
        }

        .pillar-separator {
          width: 1px;
          height: 28px;
          background-color: rgba(182, 154, 98, 0.3);
        }

        /* Right Column Media */
        .hero-media-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-media-frame {
          position: relative;
          width: 100%;
          max-width: 560px;
          padding: 12px;
          background-color: var(--color-cream-light);
          border: 1px solid rgba(182, 154, 98, 0.35);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
        }

        .frame-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: var(--color-antique-gold);
          border-style: solid;
        }

        .frame-corner.top-left {
          top: -2px;
          left: -2px;
          border-width: 2px 0 0 2px;
          border-top-left-radius: var(--radius-lg);
        }

        .frame-corner.top-right {
          top: -2px;
          right: -2px;
          border-width: 2px 2px 0 0;
          border-top-right-radius: var(--radius-lg);
        }

        .frame-corner.bottom-left {
          bottom: -2px;
          left: -2px;
          border-width: 0 0 2px 2px;
          border-bottom-left-radius: var(--radius-lg);
        }

        .frame-corner.bottom-right {
          bottom: -2px;
          right: -2px;
          border-width: 0 2px 2px 0;
          border-bottom-right-radius: var(--radius-lg);
        }

        .hero-image-container {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          background-color: var(--color-coconut-beige);
          border-radius: calc(var(--radius-lg) - 4px);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: calc(var(--radius-lg) - 4px);
        }

        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 65%, rgba(56, 37, 29, 0.3) 100%);
          pointer-events: none;
          border-radius: calc(var(--radius-lg) - 4px);
        }

        .hero-floating-card {
          position: absolute;
          bottom: -20px;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          background-color: var(--color-cream-light);
          border: 1px solid var(--color-antique-gold);
          border-radius: var(--radius-md);
          padding: 0.9rem 1.6rem;
          box-shadow: 0 10px 25px rgba(56, 37, 29, 0.12);
          text-align: center;
          width: 85%;
          max-width: 320px;
        }

        @media (min-width: 576px) {
          .hero-floating-card {
            left: 20px;
            right: auto;
            margin-left: 0;
            margin-right: 0;
          }
        }

        .floating-card-pill {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-burgundy);
          background-color: rgba(88, 29, 39, 0.08);
          padding: 2px 8px;
          border-radius: 4px;
          margin-bottom: 4px;
        }

        .floating-card-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-burgundy);
        }

        .floating-card-sub {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        /* Scroll prompt */
        .hero-scroll-prompt {
          display: flex;
          justify-content: center;
          margin-top: 3.5rem;
        }

        .scroll-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          color: var(--color-antique-gold);
          transition: color var(--transition-duration-hover) var(--transition-ease-luxury),
                      transform var(--transition-duration-hover) var(--transition-ease-luxury);
          background: none;
          border: none;
          cursor: pointer;
          will-change: transform;
        }

        .scroll-btn:hover {
          color: var(--color-burgundy);
          transform: translateY(3px);
        }

        .scroll-text {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          font-weight: 600;
        }

        .scroll-icon {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(6px);
          }
          60% {
            transform: translateY(3px);
          }
        }
      `}</style>
    </section>
  );
};
