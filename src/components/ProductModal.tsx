import { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { ProductItem } from '../data/content';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE } from '../utils/motion';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onSelectForEnquiry: (productName: string) => void;
}

export const ProductModal = ({
  product,
  onClose,
  onSelectForEnquiry,
}: ProductModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  return (
    <>
      <AnimatePresence>
        {product && (
          <motion.div
            className="product-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={onClose}
          >
            <motion.div
              className="product-modal-dialog"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.35, ease: LUXURY_EASE }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-product-title"
            >
              <motion.button
                type="button"
                className="modal-close-btn"
                whileHover={{ rotate: 90, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                aria-label="Close product details"
              >
                <X size={20} />
              </motion.button>

              <div className="modal-grid">
                {/* Product Photography */}
                <div className="modal-media">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="modal-image"
                  />
                  <div className="modal-image-badge">
                    <span>{product.malayalamName}</span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="modal-content">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <img
                      src="/mr_group_logo.png"
                      alt="MR Foods"
                      width="26"
                      height="26"
                      style={{ borderRadius: '4px', objectFit: 'contain' }}
                    />
                    <span className="section-badge" style={{ marginBottom: 0 }}>
                      {product.tagline}
                    </span>
                  </div>

                  <h3 id="modal-product-title" className="modal-title">
                    {product.name}
                  </h3>
                  <p className="modal-headline font-serif text-gold">
                    &ldquo;{product.headline}&rdquo;
                  </p>

                  <OrnamentalDivider size="sm" className="modal-divider" />

                  <p className="modal-description">{product.description}</p>

                  {/* Authentic Ingredients & Taste Profile */}
                  <div className="modal-spec-block">
                    <h4 className="spec-heading">Key Traditional Ingredients</h4>
                    <div className="ingredients-pills">
                      {product.details.keyIngredients.map((item) => (
                        <span key={item} className="ingredient-pill">
                          <CheckCircle2 size={13} className="text-gold" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-spec-block">
                    <h4 className="spec-heading">Flavour &amp; Texture Profile</h4>
                    <p className="spec-text">{product.details.profile}</p>
                  </div>

                  <div className="modal-spec-block">
                    <h4 className="spec-heading">Traditional Serving Note</h4>
                    <p className="spec-text font-serif italic">
                      {product.details.servingNote}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="modal-actions">
                    <motion.button
                      type="button"
                      className="btn btn-primary"
                      whileHover={{
                        y: -2,
                        boxShadow: '0 6px 20px rgba(88, 29, 39, 0.25)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => {
                        onSelectForEnquiry(product.name);
                        onClose();
                      }}
                    >
                      <span>Enquire to Order {product.name}</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .product-modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(56, 37, 29, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .product-modal-dialog {
          position: relative;
          background-color: var(--color-cream-light);
          border: 1px solid var(--color-antique-gold);
          box-shadow: 0 25px 60px -10px rgba(56, 37, 29, 0.45);
          width: 100%;
          max-width: 860px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: var(--radius-sm);
        }

        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: var(--color-cream);
          border: 1px solid var(--color-border);
          color: var(--color-burgundy);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .modal-close-btn:hover {
          background-color: var(--color-burgundy);
          color: var(--color-cream);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr 1.15fr;
          }
        }

        .modal-media {
          position: relative;
          background-color: var(--color-coconut-beige);
          min-height: 300px;
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-image-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background-color: rgba(88, 29, 39, 0.9);
          color: var(--color-cream);
          padding: 0.35rem 0.85rem;
          border: 1px solid var(--color-antique-gold);
          font-family: var(--font-serif);
          font-size: 1.15rem;
          letter-spacing: 0.05em;
        }

        .modal-content {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .modal-title {
          font-size: 2.25rem;
          color: var(--color-burgundy);
          margin-bottom: 0.25rem;
          line-height: 1.15;
        }

        .modal-headline {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
        }

        .modal-divider {
          margin: 0.5rem 0 1.25rem;
        }

        .modal-description {
          font-size: 0.98rem;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }

        .modal-spec-block {
          margin-bottom: 1.25rem;
        }

        .spec-heading {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-burgundy);
          margin-bottom: 0.45rem;
        }

        .ingredients-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ingredient-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          background-color: var(--color-cream);
          border: 1px solid var(--color-border);
          padding: 0.3rem 0.65rem;
          color: var(--color-text-main);
          font-weight: 500;
        }

        .spec-text {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }

        .modal-actions {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border);
        }
      `}</style>
    </>
  );
};
