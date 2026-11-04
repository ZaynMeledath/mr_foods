import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { GALLERY_ITEMS } from '../data/content';
import type { GalleryItem } from '../data/content';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE } from '../utils/motion';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'delicacies' | 'ingredients' | 'heritage'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="gallery-header text-center"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: LUXURY_EASE }}
        >
          <div className="section-badge">Moments &amp; Textures</div>
          <h2 className="section-title">
            The MR Foods
            <span className="gallery-title-italic"> Visual Gallery</span>
          </h2>
          <OrnamentalDivider size="md" />
          <p className="section-description">
            A glimpse into the textures, heritage vessels, pure ingredients, and timeless food culture
            that define our Kerala delicacies.
          </p>

          {/* Filter Pills */}
          <div className="gallery-filter-tabs">
            {(
              [
                { id: 'all', label: 'All Moments' },
                { id: 'delicacies', label: 'Signature Sweets' },
                { id: 'ingredients', label: 'Raw Ingredients' },
                { id: 'heritage', label: 'Kerala Heritage' },
              ] as const
            ).map((tab) => (
              <motion.button
                key={tab.id}
                type="button"
                className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Editorial Masonry / Grid */}
        <motion.div
          layout
          className="gallery-grid"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: LUXURY_EASE }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                className="gallery-grid-item"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.92, y: 10, transition: { duration: 0.2 } }
                }
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.04, 0.16),
                  ease: LUXURY_EASE,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                onClick={() => setActiveLightboxItem(item)}
              >
                <div className="gallery-card-inner">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image"
                    loading="lazy"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                    transition={{ duration: 0.65, ease: LUXURY_EASE }}
                  />
                  <div className="gallery-hover-overlay">
                    <div className="gallery-hover-content">
                      <Maximize2 size={20} className="hover-zoom-icon" />
                      <h3 className="hover-title">{item.title}</h3>
                      <p className="hover-caption">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setActiveLightboxItem(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="lightbox-dialog"
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.35, ease: LUXURY_EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                type="button"
                className="lightbox-close-btn"
                whileHover={{ rotate: 90, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveLightboxItem(null)}
                aria-label="Close photo preview"
              >
                <X size={22} />
              </motion.button>

              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="lightbox-img"
              />

              <div className="lightbox-info">
                <h3 className="lightbox-title">{activeLightboxItem.title}</h3>
                <p className="lightbox-caption">{activeLightboxItem.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-section {
          background-color: var(--color-cream);
          position: relative;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .gallery-title-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--color-dark-brown);
          display: block;
        }

        .gallery-filter-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;
          margin-top: 2rem;
        }

        .filter-btn {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.5rem 1.15rem;
          background-color: var(--color-cream-light);
          color: var(--color-text-muted);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-btn:hover {
          color: var(--color-burgundy);
          border-color: var(--color-antique-gold);
        }

        .filter-btn.active {
          background-color: var(--color-burgundy);
          color: var(--color-cream);
          border-color: var(--color-burgundy);
          box-shadow: 0 4px 12px rgba(88, 29, 39, 0.2);
        }

        /* Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 600px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .gallery-grid-item {
          cursor: pointer;
        }

        .gallery-card-inner {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          background-color: var(--color-coconut-beige);
          border: 1px solid rgba(182, 154, 98, 0.25);
          box-shadow: var(--shadow-subtle);
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 20%, rgba(56, 37, 29, 0.88) 100%);
          opacity: 0;
          display: flex;
          align-items: flex-end;
          padding: 1.5rem 1.25rem;
          transition: opacity 0.35s ease;
        }

        .gallery-grid-item:hover .gallery-hover-overlay {
          opacity: 1;
        }

        .gallery-hover-content {
          color: #fff;
          transform: translateY(10px);
          transition: transform 0.35s ease;
        }

        .gallery-grid-item:hover .gallery-hover-content {
          transform: translateY(0);
        }

        .hover-zoom-icon {
          color: var(--color-antique-gold);
          margin-bottom: 0.4rem;
        }

        .hover-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-cream);
          margin-bottom: 0.2rem;
        }

        .hover-caption {
          font-family: var(--font-sans);
          font-size: 0.76rem;
          line-height: 1.4;
          color: rgba(247, 240, 229, 0.8);
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(30, 18, 14, 0.88);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1300;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .lightbox-dialog {
          position: relative;
          max-width: 800px;
          width: 100%;
          background-color: var(--color-cream-light);
          border: 1px solid var(--color-antique-gold);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .lightbox-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.65);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          border: none;
          cursor: pointer;
        }

        .lightbox-img {
          width: 100%;
          max-height: 65vh;
          object-fit: contain;
          background-color: #111;
          display: block;
        }

        .lightbox-info {
          padding: 1.25rem 1.75rem;
          background-color: var(--color-cream-light);
        }

        .lightbox-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-burgundy);
          margin-bottom: 0.35rem;
        }

        .lightbox-caption {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  );
};
