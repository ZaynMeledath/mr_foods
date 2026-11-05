import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PRODUCTS } from '../data/content';
import type { ProductItem } from '../data/content';
import { OrnamentalDivider } from './OrnamentalDivider';
import { ProductModal } from './ProductModal';
import { LUXURY_EASE, MOTION_DURATIONS } from '../utils/motion';

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
          transition={{ duration: MOTION_DURATIONS.section, ease: LUXURY_EASE }}
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
            <motion.div
              key={prod.id}
              className="product-card-wrap"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: MOTION_DURATIONS.section,
                delay: index * 0.16,
                ease: LUXURY_EASE,
              }}
            >
              <article className="product-card">
                {/* Product Media Box */}
                <div
                  className="product-media-wrap"
                  onClick={() => setSelectedProduct(prod)}
                  style={{ cursor: 'pointer' }}
                  title={`Discover more about ${prod.name}`}
                >
                  <img
                    src={prod.image}
                    alt={prod.imageAlt}
                    className="product-image"
                    loading="lazy"
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
                    <button
                      type="button"
                      className="discover-link"
                      onClick={() => setSelectedProduct(prod)}
                      aria-label={`Discover more about ${prod.name}`}
                    >
                      <span className="discover-link-text">
                        Discover More
                        <span className="link-underline" />
                      </span>
                      <span className="link-arrow">
                        <ArrowRight size={15} />
                      </span>
                    </button>

                    <button
                      type="button"
                      className="btn-card-order"
                      onClick={() => onSelectForEnquiry(prod.name)}
                    >
                      Enquire to Order
                    </button>
                  </div>
                </div>
              </article>
            </motion.div>
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

        .product-card-wrap {
          height: 100%;
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
          height: 100%;
          transition: var(--transition-card);
          will-change: transform, box-shadow;
          transform: translateZ(0);
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px -12px rgba(56, 37, 29, 0.16);
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
          transition: transform var(--transition-duration-card) var(--transition-ease-luxury);
          will-change: transform;
        }

        .product-card:hover .product-image {
          transform: scale(1.055);
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
          gap: 0.75rem;
          pointer-events: none;
          z-index: 2;
        }

        .badge-tag {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          line-height: 1.2;
          text-transform: uppercase;
          background-color: var(--color-burgundy);
          color: var(--color-cream);
          padding: 0.22rem 0.55rem;
          border: 1px solid var(--color-antique-gold);
          border-radius: var(--radius-xs);
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .badge-malayalam {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          line-height: 1;
          color: var(--color-cream);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
          font-weight: 600;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .product-badge-overlay {
            top: 0.75rem;
            left: 0.75rem;
            right: 0.75rem;
            gap: 0.5rem;
          }

          .badge-tag {
            font-size: 0.62rem;
            letter-spacing: 0.04em;
            padding: 0.18rem 0.42rem;
          }

          .badge-malayalam {
            font-size: 1.02rem;
          }
        }

        @media (max-width: 380px) {
          .product-badge-overlay {
            top: 0.6rem;
            left: 0.6rem;
            right: 0.6rem;
            gap: 0.4rem;
          }

          .badge-tag {
            font-size: 0.58rem;
            letter-spacing: 0.03em;
            padding: 0.16rem 0.36rem;
          }

          .badge-malayalam {
            font-size: 0.95rem;
          }
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
          transition: width var(--transition-duration-micro) var(--transition-ease-luxury);
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
          transition: transform var(--transition-duration-hover) var(--transition-ease-luxury);
        }

        .discover-link:hover .link-arrow,
        .product-card:hover .link-arrow {
          transform: translateX(4px);
        }

        .btn-card-order {
          background-color: transparent;
          color: var(--color-burgundy);
          border: 1px solid var(--color-burgundy);
          padding: 0.5rem 1.05rem;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-button);
          will-change: transform;
        }

        .btn-card-order:hover {
          background-color: var(--color-burgundy);
          color: var(--color-cream);
          box-shadow: 0 6px 18px rgba(88, 29, 39, 0.25);
          transform: translateY(-2px);
        }

        .btn-card-order:active {
          transform: translateY(0) scale(0.97);
          transition-duration: var(--transition-duration-tap);
        }
      `}</style>
    </section>
  );
};
