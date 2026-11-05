import { Users, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE, MOTION_DURATIONS } from '../utils/motion';

export const BrandIntro = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="story" className="brand-intro-section section-padding">
      <div className="container">
        <div className="brand-intro-grid">
          {/* Visual Side: Lifestyle food photography with authentic Kerala heritage frame */}
          <motion.div
            className="intro-media-column"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: MOTION_DURATIONS.section, ease: LUXURY_EASE }}
          >
            <div className="intro-media-stack">
              <div className="intro-main-image-wrap">
                <img
                  src="/images/unniyappam-signature.webp"
                  alt="Authentic Kerala Unniyappam prepared with rice, ripe bananas and jaggery"
                  className="intro-main-image"
                  loading="lazy"
                />
                <div className="intro-image-frame-gold" />
              </div>

              {/* Decorative inset card */}
              <motion.div
                className="intro-inset-card"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: MOTION_DURATIONS.section, delay: 0.25, ease: LUXURY_EASE }}
              >
                <div className="inset-quote-icon">
                  <img
                    src="/mr_group_logo.png"
                    alt="MR Group Foods"
                    width="32"
                    height="32"
                    style={{ borderRadius: '4px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
                <p className="inset-quote-text">
                  &ldquo;Every sweet prepared in our kitchen honours the warmth of Kerala home kitchens.&rdquo;
                </p>
                <span className="inset-signature">— The MR Group Family</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Typography Side: Editorial storytelling */}
          <motion.div
            className="intro-text-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: MOTION_DURATIONS.fade, ease: LUXURY_EASE } },
              }}
              className="section-badge"
            >
              Our Heritage &amp; Ethos
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0, transition: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE } },
              }}
              className="section-title intro-title"
            >
              A Little Taste of Kerala,
              <span className="intro-title-italic"> Made with Love.</span>
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, scaleX: 0.7 },
                visible: { opacity: 1, scaleX: 1, transition: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE } },
              }}
              style={{ transformOrigin: 'left center' }}
            >
              <OrnamentalDivider size="sm" className="intro-divider" />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE } },
              }}
              className="intro-paragraphs"
            >
              <p className="intro-lead">
                At MR Group Foods, we believe that the most beautiful flavours come from tradition.
                Inspired by Kerala&apos;s rich culinary heritage, we bring you beloved homemade
                delicacies prepared with care, quality ingredients and a genuine love for
                traditional food.
              </p>

              <p className="intro-body">
                Founded as a dedicated family-owned food business, our singular commitment is to
                honour the age-old recipes passed down through generations. Rather than offering
                dozens of generic items, we concentrate our craft on two iconic delicacies:
                the golden caramelised <strong>Unniyappam</strong> and the rustic, comforting <strong>Ariyunda</strong>.
              </p>

              <p className="intro-body">
                Each batch is created using pure staples — stone-ground rice, dark unrefined jaggery,
                naturally ripened bananas, and freshly grated coconut infused with aromatic crushed
                cardamom. No shortcuts, no artificial essence. Just honest, heartwarming Kerala tradition.
              </p>
            </motion.div>

            {/* Highlights row */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: MOTION_DURATIONS.fade, ease: LUXURY_EASE } },
              }}
              className="intro-features"
            >
              <div className="intro-feature-pill">
                <Users size={16} className="text-gold" />
                <span>Family-Owned &amp; Operated</span>
              </div>
              <div className="intro-feature-pill">
                <Sparkles size={16} className="text-gold" />
                <span>Authentic Culinary Roots</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .brand-intro-section {
          background-color: var(--color-cream-light);
          position: relative;
          border-top: 1px solid rgba(182, 154, 98, 0.2);
          border-bottom: 1px solid rgba(182, 154, 98, 0.2);
        }

        .brand-intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .brand-intro-grid {
            grid-template-columns: 1fr 1.05fr;
            gap: 5rem;
          }
        }

        .intro-media-column {
          position: relative;
        }

        .intro-media-stack {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .intro-main-image-wrap {
          position: relative;
          border: 1px solid var(--color-antique-gold);
          border-radius: var(--radius-lg);
          padding: 10px;
          background-color: #fff;
          box-shadow: var(--shadow-card);
          transition: var(--transition-card);
          will-change: transform;
          transform: translateZ(0);
        }

        .intro-main-image-wrap:hover {
          transform: scale(1.02);
          box-shadow: 0 16px 36px -8px rgba(56, 37, 29, 0.16);
        }

        .intro-main-image {
          width: 100%;
          aspect-ratio: 4 / 4.5;
          object-fit: cover;
          border-radius: calc(var(--radius-lg) - 4px);
          display: block;
        }

        .intro-image-frame-gold {
          position: absolute;
          inset: 6px;
          border: 1px solid rgba(182, 154, 98, 0.4);
          border-radius: calc(var(--radius-lg) - 2px);
          pointer-events: none;
        }

        .intro-inset-card {
          position: absolute;
          bottom: -25px;
          right: -10px;
          background-color: var(--color-burgundy);
          color: var(--color-cream);
          padding: 1.25rem 1.5rem;
          max-width: 290px;
          border: 1px solid var(--color-antique-gold);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-elevated);
        }

        @media (max-width: 576px) {
          .intro-inset-card {
            position: relative;
            bottom: 0;
            right: 0;
            margin-top: 1.5rem;
            max-width: 100%;
          }
        }

        .inset-quote-icon {
          margin-bottom: 0.5rem;
        }

        .inset-quote-text {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-style: italic;
          line-height: 1.45;
          margin-bottom: 0.5rem;
          color: var(--color-cream);
        }

        .inset-signature {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-antique-gold);
          display: block;
          font-weight: 600;
        }

        .intro-text-column {
          text-align: left;
        }

        .intro-title {
          font-size: 2.35rem;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 768px) {
          .intro-title {
            font-size: 2.95rem;
          }
        }

        .intro-title-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--color-dark-brown);
          display: block;
        }

        .intro-divider {
          margin: 0.85rem 0 1.5rem;
        }

        .intro-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .intro-lead {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--color-dark-brown);
          font-weight: 500;
        }

        .intro-body {
          font-family: var(--font-sans);
          font-size: 0.98rem;
          line-height: 1.7;
          color: var(--color-text-muted);
        }

        .intro-body strong {
          color: var(--color-burgundy);
          font-weight: 600;
        }

        .intro-features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
        }

        .intro-feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background-color: var(--color-cream);
          border: 1px solid rgba(182, 154, 98, 0.35);
          border-radius: var(--radius-full);
          padding: 0.45rem 1rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-burgundy);
          letter-spacing: 0.04em;
          transition: transform var(--transition-duration-hover) var(--transition-ease-luxury),
                      border-color var(--transition-duration-hover) var(--transition-ease-luxury),
                      box-shadow var(--transition-duration-hover) var(--transition-ease-luxury);
          will-change: transform;
        }

        .intro-feature-pill:hover {
          transform: translateY(-3px);
          border-color: var(--color-antique-gold);
          box-shadow: 0 6px 18px rgba(182, 154, 98, 0.18);
        }
      `}</style>
    </section>
  );
};
