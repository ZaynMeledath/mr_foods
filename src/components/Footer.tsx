import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { InstagramIcon } from './InstagramIcon';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_INFO } from '../data/content';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE, MOTION_DURATIONS } from '../utils/motion';

interface FooterProps {
  onSelectProduct: (productName: string) => void;
}

export const Footer = ({ onSelectProduct }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-root">
      {/* Decorative top border */}
      <motion.div
        className="footer-gold-trim"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: MOTION_DURATIONS.reveal, ease: LUXURY_EASE }}
      />

      <div className="container footer-container">
        {/* Main Footer Grid with Staggered Fade Up */}
        <motion.div
          className="footer-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {/* Brand Bio Column */}
          <motion.div
            className="footer-col brand-col"
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE } },
            }}
          >
            <div className="footer-brand-header">
              <img
                src="/mr_group_logo.png"
                alt="MR Group Foods Logo"
                className="footer-logo-img"
                width="48"
                height="48"
              />
              <div className="footer-brand-title">
                <span className="brand-title-main">MR GROUP FOODS</span>
                <span className="brand-title-sub">KERALA TRADITIONAL SWEETS</span>
              </div>
            </div>

            <p className="footer-bio">
              A family-owned Kerala food business dedicated to preserving and sharing the
              authentic flavours of our homeland through two beloved delicacies: Unniyappam and Ariyunda.
            </p>

            <div className="footer-tagline-box">
              <span className="tagline-text">&ldquo;{BRAND_INFO.footerTagline}&rdquo;</span>
            </div>
          </motion.div>

          {/* Quick Navigation Links */}
          <motion.div
            className="footer-col"
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE } },
            }}
          >
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#story" onClick={(e) => { e.preventDefault(); scrollTo('#story'); }}>
                  Our Story
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); scrollTo('#products'); }}>
                  Our Products
                </a>
              </li>
              <li>
                <a href="#heritage" onClick={(e) => { e.preventDefault(); scrollTo('#heritage'); }}>
                  Our Heritage
                </a>
              </li>
              <li>
                <a href="#craft" onClick={(e) => { e.preventDefault(); scrollTo('#craft'); }}>
                  Our Craft
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('#gallery'); }}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>
                  Contact &amp; Enquiry
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Product Links */}
          <motion.div
            className="footer-col"
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE } },
            }}
          >
            <h4 className="footer-col-title">Our Delicacies</h4>
            <ul className="footer-links">
              <li>
                <button
                  type="button"
                  className="footer-btn-link"
                  onClick={() => {
                    scrollTo('#products');
                    onSelectProduct('Unniyappam');
                  }}
                >
                  Unniyappam (ഉണ്ണിയപ്പം)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-btn-link"
                  onClick={() => {
                    scrollTo('#products');
                    onSelectProduct('Ariyunda');
                  }}
                >
                  Ariyunda (അരിയുണ്ട)
                </button>
              </li>
            </ul>

            <div className="footer-social-section">
              <h5 className="social-heading">Follow Our Journey</h5>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
                <span>{BRAND_INFO.instagramHandle}</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="footer-col"
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: MOTION_DURATIONS.section, ease: LUXURY_EASE } },
            }}
          >
            <h4 className="footer-col-title">Contact &amp; Orders</h4>
            <div className="footer-contact-items">
              <div className="f-contact-item">
                <Phone size={16} className="text-gold" />
                <span>{BRAND_INFO.displayPhone}</span>
              </div>
              <div className="f-contact-item">
                <Mail size={16} className="text-gold" />
                <span>{BRAND_INFO.displayEmail}</span>
              </div>
              <div className="f-contact-item">
                <MapPin size={16} className="text-gold" />
                <span>{BRAND_INFO.displayAddress}</span>
              </div>
            </div>

            <div className="footer-wa-action">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Hello%20MR%20Group%20Foods,%20I%20would%20like%20to%20enquire%20about%20ordering%20traditional%20sweets.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp footer-wa-btn"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <OrnamentalDivider color="gold" size="lg" className="footer-divider" />

        {/* Copyright & Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} {BRAND_INFO.name}. All rights reserved. Handcrafted Kerala Traditional Delicacies.
          </p>
          <p className="footer-sub-note">
            Preserving Kerala&apos;s culinary heritage, one sweet at a time.
          </p>
        </div>
      </div>

      <style>{`
        .footer-root {
          background-color: var(--color-burgundy);
          color: var(--color-cream);
          position: relative;
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
        }

        .footer-gold-trim {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--color-antique-gold), transparent);
          transform-origin: center;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.4fr 0.9fr 1fr 1.1fr;
            gap: 2.5rem;
          }
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .footer-logo-img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          border-radius: var(--radius-xs);
          display: block;
        }

        .footer-brand-title {
          display: flex;
          flex-direction: column;
        }

        .brand-title-main {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-cream);
          letter-spacing: 0.08em;
          line-height: 1.1;
        }

        .brand-title-sub {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--color-antique-gold);
          letter-spacing: 0.15em;
          margin-top: 2px;
        }

        .footer-bio {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.7;
          color: rgba(247, 240, 229, 0.8);
          margin-bottom: 1.25rem;
        }

        .footer-tagline-box {
          border-left: 2px solid var(--color-antique-gold);
          padding-left: 0.85rem;
        }

        .tagline-text {
          font-family: var(--font-serif);
          font-size: 1.02rem;
          font-style: italic;
          color: var(--color-gold-light);
        }

        .footer-col-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-gold-light);
          margin-bottom: 1.25rem;
          letter-spacing: 0.05em;
        }

        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-logo-img {
          transition: transform var(--transition-duration-hover) var(--transition-ease-luxury);
          will-change: transform;
        }

        .footer-logo-img:hover {
          transform: scale(1.06);
        }

        .footer-links a,
        .footer-btn-link {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          color: rgba(247, 240, 229, 0.8);
          transition: color var(--transition-duration-hover) var(--transition-ease-luxury),
                      transform var(--transition-duration-hover) var(--transition-ease-luxury);
          text-align: left;
          padding: 0;
          background: none;
          border: none;
          cursor: pointer;
          will-change: transform;
        }

        .footer-links a:hover,
        .footer-btn-link:hover {
          color: var(--color-gold-light);
          transform: translateX(4px);
        }

        .footer-social-section {
          margin-top: 1.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(182, 154, 98, 0.25);
        }

        .social-heading {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-antique-gold);
          margin-bottom: 0.65rem;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--color-cream);
          transition: color var(--transition-duration-hover) var(--transition-ease-luxury),
                      transform var(--transition-duration-hover) var(--transition-ease-luxury);
          will-change: transform;
        }

        .footer-social-link:hover {
          color: var(--color-gold-light);
          transform: translateX(4px);
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .f-contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
          color: rgba(247, 240, 229, 0.85);
        }

        .footer-wa-action {
          margin-top: 0.5rem;
        }

        .footer-wa-btn {
          width: 100%;
          padding: 0.65rem 1rem;
          font-size: 0.82rem;
          transition: var(--transition-button);
          will-change: transform;
        }

        .footer-wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(18, 140, 126, 0.38);
        }

        .footer-wa-btn:active {
          transform: translateY(0) scale(0.98);
          transition-duration: var(--transition-duration-tap);
        }

        .footer-divider {
          margin: 2rem auto;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          text-align: center;
        }

        .copyright-text {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: rgba(247, 240, 229, 0.7);
        }

        .footer-sub-note {
          font-family: var(--font-serif);
          font-size: 0.85rem;
          font-style: italic;
          color: var(--color-antique-gold);
        }
      `}</style>
    </footer>
  );
};
