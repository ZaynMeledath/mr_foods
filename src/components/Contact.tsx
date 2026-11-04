import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { InstagramIcon } from './InstagramIcon';
import { BRAND_INFO } from '../data/content';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE } from '../utils/motion';

interface ContactProps {
  initialProduct?: string;
}

export const Contact = ({ initialProduct }: ContactProps) => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: initialProduct || 'Both Unniyappam & Ariyunda',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppUrl = (customMsg?: string) => {
    const text = customMsg
      ? encodeURIComponent(customMsg)
      : encodeURIComponent(
          `Hello MR Foods! My name is ${formData.name || 'a customer'}. I would like to enquire about ordering traditional Kerala sweets (${formData.product}). ${formData.message ? `Details: ${formData.message}` : ''}`
        );
    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const url = generateWhatsAppUrl();
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="contact-header text-center"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: LUXURY_EASE }}
        >
          <div className="section-badge">Orders &amp; Enquiries</div>
          <h2 className="section-title">
            Bring Home a
            <span className="contact-title-italic"> Taste of Kerala.</span>
          </h2>
          <OrnamentalDivider size="md" />
          <p className="section-description">
            Have a craving for traditional Kerala sweets? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <motion.div
            className="contact-info-panel"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: LUXURY_EASE }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <img
                src="/mr_group_logo.png"
                alt="MR Foods"
                width="34"
                height="34"
                style={{ borderRadius: '6px', objectFit: 'contain' }}
              />
              <span className="section-badge" style={{ marginBottom: 0 }}>Direct from our Kitchen</span>
            </div>
            <h3 className="panel-heading">Connect With Our Family Business</h3>
            <p className="panel-subtext">
              We prepare each order with authentic homemade care. For celebration boxes,
              family gatherings, or tea-time batches, reach out directly.
            </p>

            {/* Direct WhatsApp Callout */}
            <motion.div
              className="whatsapp-callout-box"
              whileHover={shouldReduceMotion ? undefined : { y: -2, boxShadow: '0 8px 24px rgba(18, 140, 126, 0.15)' }}
              transition={{ duration: 0.25 }}
            >
              <div className="callout-icon">
                <MessageCircle size={26} />
              </div>
              <div className="callout-content">
                <h4 className="callout-title">Fastest Response via WhatsApp</h4>
                <p className="callout-desc">
                  Chat directly with our kitchen for quick orders and availability.
                </p>
              </div>
              <motion.a
                href={generateWhatsAppUrl('Hello MR Foods, I would like to enquire about your traditional Kerala sweets.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp callout-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Chat on WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* Contact Placeholders list */}
            <div className="contact-details-list">
              <div className="detail-item">
                <div className="detail-icon">
                  <Phone size={18} className="text-gold" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Phone (Configurable)</span>
                  <span className="detail-val">{BRAND_INFO.displayPhone}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <Mail size={18} className="text-gold" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Email (Configurable)</span>
                  <span className="detail-val">{BRAND_INFO.displayEmail}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Location (Placeholder)</span>
                  <span className="detail-val">{BRAND_INFO.displayAddress}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <InstagramIcon size={18} className="text-gold" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Instagram (Placeholder)</span>
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-val link-hover"
                  >
                    {BRAND_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Enquiry Form */}
          <motion.div
            className="contact-form-panel"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: LUXURY_EASE }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="submission-success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: LUXURY_EASE }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.1, 1] }}
                    transition={{ duration: 0.5, ease: LUXURY_EASE }}
                  >
                    <img
                      src="/mr_group_logo.png"
                      alt="MR Foods"
                      width="54"
                      height="54"
                      style={{ borderRadius: '8px', objectFit: 'contain', marginBottom: '0.85rem' }}
                    />
                  </motion.div>
                  <CheckCircle2 size={40} className="text-gold mb-3" />
                  <h3 className="success-title">Thank You, {formData.name}!</h3>
                  <p className="success-desc">
                    We have received your enquiry for <strong>{formData.product}</strong>.
                    Our team will reach out to you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  <div className="success-actions">
                    <motion.button
                      type="button"
                      className="btn btn-whatsapp"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleSendViaWhatsApp}
                    >
                      <MessageCircle size={18} />
                      <span>Send this Enquiry via WhatsApp</span>
                    </motion.button>
                    <motion.button
                      type="button"
                      className="btn btn-outline"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          product: 'Both Unniyappam & Ariyunda',
                          message: '',
                        });
                      }}
                    >
                      <span>Submit Another Enquiry</span>
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="enquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="form-header">
                    <h3 className="form-title">Send Us An Enquiry</h3>
                    <p className="form-desc">
                      Tell us what you crave and we will assist with your order.
                    </p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="customer-name" className="form-label">
                      Name <span className="req">*</span>
                    </label>
                    <input
                      id="customer-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Ananya Menon"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="customer-phone" className="form-label">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      id="customer-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98470 12345"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="customer-product" className="form-label">
                      Product Interested In
                    </label>
                    <select
                      id="customer-product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="Unniyappam">Unniyappam (The Little Sweetness of Kerala)</option>
                      <option value="Ariyunda">Ariyunda (Taste of Timeless Tradition)</option>
                      <option value="Both Unniyappam & Ariyunda">Both Unniyappam &amp; Ariyunda (Assorted)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="customer-message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="customer-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your occasion, preferred date, or questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-submit-row">
                    <motion.button
                      type="submit"
                      className="btn btn-primary form-submit-btn"
                      whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(88, 29, 39, 0.25)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Submit Enquiry</span>
                      <Send size={15} />
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="btn btn-whatsapp form-wa-btn"
                      whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(18, 140, 126, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle size={16} />
                      <span>Enquire on WhatsApp</span>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
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

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr;
            gap: 4rem;
          }
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
        }

        .panel-heading {
          font-family: var(--font-display);
          font-size: 1.85rem;
          color: var(--color-burgundy);
          margin-bottom: 0.75rem;
        }

        .panel-subtext {
          font-family: var(--font-sans);
          font-size: 0.98rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .whatsapp-callout-box {
          background-color: #E8F5E9;
          border: 1px solid #C8E6C9;
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          margin-bottom: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          transition: border-color 0.25s ease;
        }

        .callout-icon {
          color: #128C7E;
        }

        .callout-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: #075E54;
        }

        .callout-desc {
          font-size: 0.88rem;
          color: #2E7D32;
          margin-top: 2px;
        }

        .callout-btn {
          align-self: flex-start;
          margin-top: 0.25rem;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .detail-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background-color: var(--color-cream);
          border: 1px solid rgba(182, 154, 98, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-text {
          display: flex;
          flex-direction: column;
        }

        .detail-label {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-antique-gold);
        }

        .detail-val {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--color-dark-brown);
          font-weight: 500;
        }

        .link-hover:hover {
          color: var(--color-burgundy);
          text-decoration: underline;
        }

        /* Form Panel */
        .contact-form-panel {
          background-color: #fff;
          border: 1px solid var(--color-antique-gold);
          padding: 2.5rem 2.25rem;
          box-shadow: var(--shadow-card);
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-title {
          font-family: var(--font-display);
          font-size: 1.75rem;
          color: var(--color-burgundy);
          margin-bottom: 0.35rem;
        }

        .form-desc {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        .enquiry-form {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-dark-brown);
          letter-spacing: 0.02em;
        }

        .req {
          color: #b91c1c;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          background-color: var(--color-cream);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-main);
          transition: border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--color-antique-gold);
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(182, 154, 98, 0.15);
        }

        .form-submit-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }

        .form-submit-btn {
          flex: 1;
          min-width: 160px;
        }

        .form-wa-btn {
          flex: 1;
          min-width: 180px;
        }

        /* Success State */
        .submission-success-card {
          text-align: center;
          padding: 2.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mb-3 {
          margin-bottom: 1rem;
        }

        .success-title {
          font-family: var(--font-display);
          font-size: 1.85rem;
          color: var(--color-burgundy);
          margin-bottom: 0.75rem;
        }

        .success-desc {
          font-family: var(--font-sans);
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          max-width: 440px;
          margin-bottom: 2rem;
        }

        .success-desc strong {
          color: var(--color-burgundy);
        }

        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          width: 100%;
          max-width: 320px;
        }
      `}</style>
    </section>
  );
};
