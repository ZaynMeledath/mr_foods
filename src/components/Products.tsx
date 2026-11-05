import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PRODUCTS } from '../data/content';
import type { ProductItem } from '../data/content';
import { OrnamentalDivider } from './OrnamentalDivider';
import { ProductModal } from './ProductModal';
import { LUXURY_EASE, HOVER_TRANSITION, CARD_HOVER_TRANSITION } from '../utils/motion';

interface ProductsProps {
  onSelectForEnquiry: (productName: string) => void;
}

export const Products = ({ onSelectForEnquiry }: ProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="products" className="products-section section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="products-header text-center"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: LUXURY_EASE }}
        >
          <div className="section-badge">Signature Delicacies</div>
          <h2 className="section-title">
            Made from Tradition.
            <span className="products-title-italic"> Loved by Generations.</span>
          </h2>
          <OrnamentalDivider size="md" />
          <p className="section-description">
            We focus exclusively on two quintessential Kerala delicacies, perfected with time-honoured recipes,
            uncompromising quality, and genuine homemade warmth.
          </p>
        </motion.div>

        {/* Two Signature Product Showcase Cards */}
        <div className="products-grid">
          {PRODUCTS.map((prod, index) => (
            <motion.article
              key={prod.id}
              className="product-card"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.85,
                delay: index * 0.18,
                ease: LUXURY_EASE,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -8,
                      boxShadow: '0 24px 48px -12px rgba(56, 37, 29, 0.16)',
                      transition: CARD_HOVER_TRANSITION,
                    }
              }
            >
              {/* Product Media Box */}
              <div
                className="product-media-wrap"
                onClick={() => setSelectedProduct(prod)}
                style={{ cursor: 'pointer' }}
                title={`Discover more about ${prod.name}`}
              >
                <motion.img
                  src={prod.image}
                  alt={prod.imageAlt}
                  className="product-image"
                  loading="lazy"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.055,
                          transition: { duration: 0.7, ease: LUXURY_EASE },
                        }
                  }
                />
                <div className="product-overlay-gradient" />
                <div className="product-badge-overlay">
                  <span className="badge-tag">{prod.tagline}</span>
                  <span className="badge-malayalam">{prod.malayalamName}</span>
                </div>
              </div>

              {/* Product Body Content */}
              <div className="product-card-body">
                <div className="product-header-row">
                  <h3
                    className="product-name"
                    onClick={() => setSelectedProduct(prod)}
                    style={{ cursor: 'pointer' }}
                    title={`Discover more about ${prod.name}`}
                  >
                    {prod.name}
                  </h3>
                  <motion.div
                    className="product-accent-icon"
                    aria-hidden="true"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { rotate: [0, 10, -10, 0] }
                    }
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                  >
                    <Sparkles size={16} className="text-gold" />
                  </motion.div>
                </div>

                <p className="product-headline font-serif">
                  &ldquo;{prod.headline}&rdquo;
                </p>

                <p className="product-desc">{prod.description}</p>

                {/* Key Ingredients Summary */}
                <div className="product-ingredients-bar">
                  <span className="bar-label">Ingredients:</span>
                  <span className="bar-list">
                    {prod.details.keyIngredients.join(' • ')}
                  </span>
                </div>

                {/* Card Actions */}
                <div className="product-card-footer">
                  <motion.button
                    type="button"
                    className="discover-link"
                    onClick={() => setSelectedProduct(prod)}
                    aria-label={`Discover more about ${prod.name}`}
                    whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                    transition={HOVER_TRANSITION}
                  >
                    <span className="discover-link-text">
                      Discover More
                      <span className="link-underline" />
                    </span>
                    <motion.span
                      className="link-arrow"
                      whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                      transition={HOVER_TRANSITION}
                    >
                      <ArrowRight size={15} />
                    </motion.span>
                  </motion.button>

                  <motion.button
                    type="button"
                    className="btn-card-order"
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -2,
                            backgroundColor: 'var(--color-burgundy)',
                            color: 'var(--color-cream)',
                            boxShadow: '0 6px 18px rgba(88, 29, 39, 0.25)',
                          }
                    }
                    whileTap={{ scale: 0.97, y: 0 }}
                    transition={HOVER_TRANSITION}
                    onClick={() => onSelectForEnquiry(prod.name)}
                  >
                    Enquire to Order
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForEnquiry={onSelectForEnquiry}
      />

      <style>{`
        .products-section {
          background-color: var(--color-cream);
          position: relative;
        }

        .products-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .products-title-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--color-dark-brown);
          display: block;
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.75rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (min-width: 900px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3.25rem;
          }
        }

        .product-card {
          background-color: var(--color-cream-light);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          transition: border-color 0.35s ease;
        }

        .product-card:hover {
          border-color: var(--color-antique-gold);
        }

        .product-media-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 12;
          background-color: var(--color-coconut-beige);
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .product-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(56, 37, 29, 0.4) 100%);
          pointer-events: none;
        }

        .product-badge-overlay {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: none;
        }

        .badge-tag {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background-color: var(--color-burgundy);
          color: var(--color-cream);
          padding: 0.3rem 0.75rem;
          border: 1px solid var(--color-antique-gold);
          border-radius: var(--radius-xs);
        }

        .badge-malayalam {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--color-cream);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
          font-weight: 600;
        }

        .product-card-body {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .product-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.35rem;
        }

        .product-name {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-burgundy);
          letter-spacing: 0.02em;
        }

        .product-headline {
          font-size: 1.18rem;
          color: var(--color-antique-gold);
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .product-desc {
          font-family: var(--font-sans);
          font-size: 0.96rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .product-ingredients-bar {
          background-color: var(--color-cream);
          border: 1px dashed rgba(182, 154, 98, 0.4);
          border-radius: var(--radius-sm);
          padding: 0.65rem 0.95rem;
          font-size: 0.8rem;
          margin-bottom: 1.75rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .bar-label {
          font-weight: 700;
          color: var(--color-burgundy);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .bar-list {
          color: var(--color-text-muted);
        }

        .product-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border);
          gap: 1rem;
        }

        .discover-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-sans);
          font-size: 0.86rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-burgundy);
          padding: 0.35rem 0.25rem;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          z-index: 2;
        }

        .discover-link-text {
          position: relative;
          display: inline-block;
        }

        .link-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--color-antique-gold);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .discover-link:hover .link-underline {
          width: 100%;
        }

        .discover-link:hover {
          color: var(--color-antique-gold);
        }

        .link-arrow {
          display: inline-flex;
          align-items: center;
        }

        .btn-card-order {
          background-color: transparent;
          color: var(--color-burgundy);
          border: 1px solid var(--color-burgundy);
          padding: 0.45rem 0.95rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-button);
          will-change: transform;
        }
      `}</style>
    </section>
  );
};
