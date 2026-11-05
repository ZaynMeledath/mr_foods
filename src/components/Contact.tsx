import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { InstagramIcon } from './InstagramIcon';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_INFO } from '../data/content';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE, MOTION_DURATIONS } from '../utils/motion';

interface ContactProps {
  initialProduct?: string;
}

export const Contact = ({ initialProduct }: ContactProps) => {
  const shouldReduceMotion = useReducedMotion();

  const message = initialProduct
    ? `Hello MR Group Foods! I would like to enquire about ordering ${initialProduct}.`
    : 'Hello MR Group Foods! I would like to enquire about ordering traditional Kerala sweets.';
  const whatsAppUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="contact-header text-center"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: MOTION_DURATIONS.section, ease: LUXURY_EASE }}
        >
          <div className="section-badge">Orders &amp; Direct Connect</div>
          <h2 className="section-title">
            Bring Home a
            <span className="contact-title-italic"> Taste of Kerala.</span>
          </h2>
          <OrnamentalDivider size="md" />
          <p className="section-description">
            Have a craving for authentic Kerala sweets? Connect with our kitchen directly for fresh batches and swift ordering.
          </p>
        </motion.div>

        {/* Horizontally Stretched Order Directly Card */}
        <div className="contact-card-wrapper">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: MOTION_DURATIONS.section, ease: LUXURY_EASE }}
          >
            <div className="contact-card contact-primary-card">
            <div className="card-badge-row">
              <img
                src="/mr_group_logo.png"
                alt="MR Group Foods"
                width="38"
                height="38"
                className="card-logo"
              />
              <span className="section-badge badge-inline">Direct from our Kitchen</span>
            </div>

            <h3 className="card-heading">Order Directly with Our Kitchen</h3>
            <p className="card-subtext">
              We prepare each batch with authentic homemade care and fresh staples.
              Whether you need celebration boxes, family gatherings, or your tea-time treats,
              reach out directly for instant availability and swift dispatch.
            </p>

            {/* Action Box */}
            <div className="kitchen-action-box">
              <div className="action-box-content">
                <div className="callout-icon">
                  <WhatsAppIcon size={32} />
                </div>
                <div className="action-box-titles">
                  <h4 className="callout-title">Fastest Response &amp; Custom Orders</h4>
                  <p className="callout-desc">
                    Chat directly with our kitchen team on WhatsApp for availability and quick orders, or follow our culinary journey on Instagram.
                  </p>
                </div>
              </div>

              {initialProduct && (
                <div className="wa-selected-pill">
                  <span className="wa-selected-label">Selected Sweet:</span>
                  <span className="wa-selected-name">{initialProduct}</span>
                </div>
              )}

              <div className="action-buttons-group">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp action-btn"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat on WhatsApp</span>
                  <span className="action-btn-arrow">
                    <ArrowRight size={16} />
                  </span>
                </a>

                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-instagram action-btn"
                >
                  <InstagramIcon size={18} />
                  <span>Follow on Instagram</span>
                  <span className="action-btn-arrow">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--color-cream-light);
          position: relative;
          border-top: 1px solid var(--color-border);
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .contact-title-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--color-dark-brown);
          display: block;
        }

        .contact-card-wrapper {
          max-width: 960px;
          margin: 0 auto;
          width: 100%;
        }

        .contact-card {
          background-color: #ffffff;
          border: 1px solid rgba(182, 154, 98, 0.35);
          border-radius: var(--radius-lg);
          padding: 3rem 2.5rem;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          transition: var(--transition-card);
          will-change: transform, box-shadow;
          transform: translateZ(0);
        }
          will-change: transform, box-shadow;
          transform: translateZ(0);
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px -10px rgba(56, 37, 29, 0.12);
          border-color: var(--color-antique-gold);
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-card {
            padding: 1.75rem 1.15rem;
          }
        }

        .card-badge-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .card-logo {
          border-radius: var(--radius-xs);
          object-fit: contain;
        }

        .badge-inline {
          margin-bottom: 0;
        }

        .card-heading {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--color-burgundy);
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }

        @media (max-width: 600px) {
          .card-heading {
            font-size: 1.6rem;
          }
        }

        .card-subtext {
          font-family: var(--font-sans);
          font-size: 1.02rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin-bottom: 2.25rem;
          max-width: 780px;
        }

        /* Action Box */
        .kitchen-action-box {
          background: linear-gradient(145deg, #f0fdf4 0%, #e8f5e9 100%);
          border: 1px solid #c8e6c9;
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
          box-shadow: 0 4px 18px rgba(18, 140, 126, 0.08);
        }

        @media (max-width: 600px) {
          .kitchen-action-box {
            padding: 1.4rem 1.15rem;
          }
        }

        .action-box-content {
          display: flex;
          align-items: flex-start;
          gap: 1.15rem;
        }

        .callout-icon {
          color: #128c7e;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .action-box-titles {
          display: flex;
          flex-direction: column;
        }

        .callout-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: #075e54;
          margin-bottom: 0.35rem;
        }

        .callout-desc {
          font-size: 0.94rem;
          color: #2e7d32;
          line-height: 1.55;
          max-width: 650px;
        }

        .wa-selected-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #ffffff;
          border: 1px solid #a7f3d0;
          padding: 0.45rem 0.95rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          color: #065f46;
          align-self: flex-start;
        }

        .wa-selected-label {
          font-weight: 600;
          color: #047857;
        }

        .wa-selected-name {
          font-weight: 700;
          color: #064e3b;
        }

        .action-buttons-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          padding-top: 0.25rem;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.85rem 1.6rem;
          font-size: 0.92rem;
          border-radius: var(--radius-sm);
          transition: var(--transition-button);
          will-change: transform;
          cursor: pointer;
        }

        .action-btn:hover {
          transform: translateY(-2.5px);
        }

        .action-btn:active {
          transform: translateY(1px) scale(0.98);
          transition-duration: var(--transition-duration-tap);
        }

        .btn-whatsapp.action-btn:hover {
          background-color: #0d7f71;
          box-shadow: 0 10px 24px rgba(18, 140, 126, 0.35);
        }

        .btn-instagram {
          background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
          color: #ffffff;
          border: 1px solid rgba(131, 58, 180, 0.4);
          box-shadow: 0 4px 16px rgba(225, 48, 108, 0.25);
        }

        .btn-instagram:hover {
          filter: brightness(1.08);
          color: #ffffff;
          box-shadow: 0 10px 26px rgba(225, 48, 108, 0.4);
        }

        .action-btn-arrow {
          display: inline-flex;
          align-items: center;
          transition: transform var(--transition-duration-hover) var(--transition-ease-luxury);
        }

        .action-btn:hover .action-btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 540px) {
          .action-buttons-group {
            flex-direction: column;
            width: 100%;
          }

          .action-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
