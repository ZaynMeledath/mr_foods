import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE, CARD_HOVER_TRANSITION } from '../utils/motion';

export const Heritage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : 35, shouldReduceMotion ? 0 : -35]);

  return (
    <section ref={sectionRef} id="heritage" className="heritage-section section-padding">
      <div className="heritage-bg-overlay" aria-hidden="true" />

      <div className="container heritage-container">
        {/* Header */}
        <motion.div
          className="heritage-header text-center"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
        >
          <div className="heritage-badge">Kerala Culinary Legacy</div>
          <h2 className="heritage-headline">
            Some Traditions Are
            <span className="heritage-headline-italic"> Too Sweet to Forget.</span>
          </h2>
          <OrnamentalDivider color="gold" size="lg" />
        </motion.div>

        {/* Cinematic Editorial Grid */}
        <div className="heritage-grid">
          {/* Narrative Column */}
          <motion.div
            className="heritage-story"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.14,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: LUXURY_EASE } },
              }}
              className="story-lead-heading"
            >
              Memories of the Tharavadu Kitchen &amp; Evening Chai
            </motion.h3>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: LUXURY_EASE } },
              }}
              className="story-text"
            >
              Across Kerala, the kitchen has always been more than a place of cooking — it is the
              warm beating heart of the home. Long before modern confectioneries, families gathered
              around wood-fired hearths on rainy monsoon afternoons, drawn by the unmistakable aroma
              of cardamom, hot unrefined jaggery, and bubbling coconut oil.
            </motion.p>

            <motion.blockquote
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: LUXURY_EASE } },
              }}
              className="heritage-quote"
            >
              &ldquo;In a Kerala household, offering an Unniyappam or an Ariyunda is not merely
              serving a sweet — it is extending an embrace of welcome and affection.&rdquo;
            </motion.blockquote>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: LUXURY_EASE } },
              }}
              className="story-text"
            >
              Whether celebrating auspicious beginnings during Vishu and Onam, welcoming visiting
              relatives onto the open veranda, or quietly sharing stories over a four o&apos;clock tea,
              delicacies like <strong>Unniyappam</strong> and <strong>Ariyunda</strong> have stood the test of time.
              They represent an enduring bond between the fertile soil of Kerala, generational culinary wisdom,
              and simple family togetherness.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: LUXURY_EASE } },
              }}
              className="heritage-milestones"
            >
              <motion.div
                className="milestone-box"
                whileHover={shouldReduceMotion ? undefined : { y: -3, borderColor: 'var(--color-gold-light)' }}
                transition={CARD_HOVER_TRANSITION}
              >
                <span className="milestone-title">Authentic Vessels</span>
                <span className="milestone-desc">Traditional cast moulds &amp; heavy brass Urulis</span>
              </motion.div>
              <motion.div
                className="milestone-box"
                whileHover={shouldReduceMotion ? undefined : { y: -3, borderColor: 'var(--color-gold-light)' }}
                transition={CARD_HOVER_TRANSITION}
              >
                <span className="milestone-title">Pure Palm Jaggery</span>
                <span className="milestone-desc">Rich caramel notes unhampered by additives</span>
              </motion.div>
              <motion.div
                className="milestone-box"
                whileHover={shouldReduceMotion ? undefined : { y: -3, borderColor: 'var(--color-gold-light)' }}
                transition={CARD_HOVER_TRANSITION}
              >
                <span className="milestone-title">Native Bananas</span>
                <span className="milestone-desc">Naturally sweetened ripe Kerala variety</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual Side: Layered Photographic Showcase with Parallax */}
          <motion.div
            className="heritage-visual"
            style={{ y: parallaxY }}
          >
            <motion.div
              className="heritage-frame-outer"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.95, ease: LUXURY_EASE }}
            >
              <div className="heritage-frame-inner">
                <img
                  src="/images/hero-kerala-sweets.webp"
                  alt="Traditional Kerala brass vessel and banana leaf presenting authentic homemade delicacies"
                  className="heritage-main-img"
                  loading="lazy"
                />
                <div className="heritage-img-caption">
                  <span className="caption-gold">TRADITIONAL LIVING HERITAGE</span>
                  <span className="caption-text">Brass Uruli • Banana Leaves • Time-honoured Flavours</span>
                </div>
              </div>
            </motion.div>

            {/* Inset historical note box */}
            <motion.div
              className="heritage-history-box"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: LUXURY_EASE }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                      transition: CARD_HOVER_TRANSITION,
                    }
              }
              whileTap={{ scale: 0.98 }}
            >
              <span className="history-kerala-symbol">കേരള തനിമ</span>
              <h4 className="history-title">Generations of Unbroken Taste</h4>
              <p className="history-text">
                Every recipe we prepare stays faithful to the exact proportion of ingredients that our
                elders taught us. We cherish this craft because real heritage cannot be rushed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .heritage-section {
          background-color: var(--color-burgundy);
          color: var(--color-cream);
          position: relative;
          overflow: hidden;
        }

        .heritage-bg-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          background-image: radial-gradient(var(--color-antique-gold) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .heritage-container {
          position: relative;
          z-index: 2;
        }

        .heritage-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .heritage-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-antique-gold);
          margin-bottom: 0.75rem;
        }

        .heritage-badge::before,
        .heritage-badge::after {
          content: "";
          display: inline-block;
          width: 20px;
          height: 1px;
          background-color: var(--color-antique-gold);
        }

        .heritage-headline {
          font-family: var(--font-display);
          font-size: 2.35rem;
          font-weight: 600;
          color: var(--color-cream);
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 768px) {
          .heritage-headline {
            font-size: 3.25rem;
          }
        }

        .heritage-headline-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--color-gold-light);
          display: block;
        }

        .heritage-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .heritage-grid {
            grid-template-columns: 1.1fr 1fr;
            gap: 4.5rem;
          }
        }

        .heritage-story {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }

        .story-lead-heading {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          color: var(--color-cream);
          font-weight: 500;
          line-height: 1.3;
        }

        .story-text {
          font-family: var(--font-sans);
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(247, 240, 229, 0.85);
        }

        .story-text strong {
          color: var(--color-gold-light);
          font-weight: 600;
        }

        .heritage-quote {
          border-left: 2px solid var(--color-antique-gold);
          padding-left: 1.25rem;
          margin: 0.5rem 0;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-style: italic;
          line-height: 1.6;
          color: var(--color-gold-light);
        }

        .heritage-milestones {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-top: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(182, 154, 98, 0.3);
        }

        @media (min-width: 576px) {
          .heritage-milestones {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .milestone-box {
          background-color: rgba(63, 19, 26, 0.6);
          border: 1px solid rgba(182, 154, 98, 0.25);
          border-radius: var(--radius-sm);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          transition: border-color 0.25s ease;
        }

        .milestone-title {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-gold-light);
          letter-spacing: 0.05em;
        }

        .milestone-desc {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: rgba(247, 240, 229, 0.75);
          line-height: 1.4;
        }

        /* Visual Column */
        .heritage-visual {
          position: relative;
        }

        .heritage-frame-outer {
          border: 1px solid var(--color-antique-gold);
          border-radius: var(--radius-lg);
          padding: 12px;
          background-color: var(--color-burgundy-dark);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .heritage-frame-inner {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 3.5;
          border-radius: calc(var(--radius-lg) - 4px);
        }

        .heritage-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: calc(var(--radius-lg) - 4px);
        }

        .heritage-img-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(56, 37, 29, 0.95) 100%);
          padding: 1.5rem 1.25rem 0.85rem;
          display: flex;
          flex-direction: column;
        }

        .caption-gold {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--color-antique-gold);
        }

        .caption-text {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          color: var(--color-cream);
        }

        .heritage-history-box {
          position: relative;
          background-color: var(--color-cream);
          color: var(--color-text-main);
          border: 1px solid var(--color-antique-gold);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          margin-top: -30px;
          margin-left: 20px;
          margin-right: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 3;
        }

        .history-kerala-symbol {
          display: inline-block;
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-burgundy);
          margin-bottom: 0.35rem;
          border-bottom: 1px solid var(--color-antique-gold);
          padding-bottom: 2px;
        }

        .history-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-burgundy);
          margin-bottom: 0.4rem;
        }

        .history-text {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  );
};
