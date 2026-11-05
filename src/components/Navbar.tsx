import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { LUXURY_EASE, HOVER_TRANSITION } from '../utils/motion';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar = ({ onOpenEnquiry }: NavbarProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Our Products', href: '#products' },
    { label: 'Our Heritage', href: '#heritage' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: LUXURY_EASE }}
        className={`navbar-root ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      >
        <div className="container navbar-container">
          {/* Logo & Brand Name */}
          <motion.a
            href="#hero"
            className="navbar-brand"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <motion.div
              className="brand-logo-mark"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src="/mr_group_logo.png"
                alt="MR Group Foods Logo"
                className="brand-logo-img"
                width="42"
                height="42"
              />
            </motion.div>
            <div className="brand-titles">
              <span className="brand-name">MR GROUP FOODS</span>
              <span className="brand-tagline">KERALA TRADITIONAL SWEETS</span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    <span>{link.label}</span>
                    <span className="nav-link-indicator" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action: Enquire Now CTA & Mobile Menu Toggle */}
          <div className="nav-actions">
            <motion.button
              type="button"
              className="btn btn-enquire"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={{ scale: 0.97, y: 0 }}
              transition={HOVER_TRANSITION}
              onClick={() => {
                if (onOpenEnquiry) {
                  onOpenEnquiry();
                } else {
                  handleNavClick('#contact');
                }
              }}
            >
              <span>Enquire Now</span>
              <motion.span
                className="enquire-arrow"
                whileHover={shouldReduceMotion ? undefined : { x: 2, y: -2 }}
                transition={HOVER_TRANSITION}
              >
                <ArrowUpRight size={15} />
              </motion.span>
            </motion.button>

            <motion.button
              type="button"
              className="mobile-menu-btn"
              whileTap={{ scale: 0.94 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="mobile-drawer-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-header">
                <div className="mobile-brand-wrapper">
                  <img
                    src="/mr_group_logo.png"
                    alt="MR Group Foods Logo"
                    className="brand-logo-img"
                    width="36"
                    height="36"
                  />
                  <div className="brand-titles">
                    <span className="brand-name text-burgundy">MR GROUP FOODS</span>
                    <span className="brand-tagline text-gold">TRADITIONAL KERALA SWEETS</span>
                  </div>
                </div>
                <motion.button
                  type="button"
                  className="mobile-close-btn"
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={22} />
                </motion.button>
              </div>

              <motion.nav
                className="mobile-nav-list"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="mobile-nav-link"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: LUXURY_EASE } },
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} className="text-gold" />
                  </motion.a>
                ))}
              </motion.nav>

              <div className="mobile-drawer-footer">
                <motion.button
                  type="button"
                  className="btn btn-primary w-full"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEnquiry) {
                      onOpenEnquiry();
                    } else {
                      handleNavClick('#contact');
                    }
                  }}
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation CSS */}
      <style>{`
        .navbar-root {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      padding 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s ease;
          border-bottom: 1px solid transparent;
        }

        .navbar-transparent {
          background-color: rgba(247, 240, 229, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 1.1rem 0;
          border-bottom: 1px solid rgba(182, 154, 98, 0.15);
        }

        .navbar-scrolled {
          background-color: rgba(247, 240, 229, 0.98);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 6px 24px -2px rgba(56, 37, 29, 0.08);
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(182, 154, 98, 0.28);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
        }

        .brand-logo-mark {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-logo-img {
          width: 42px;
          height: 42px;
          object-fit: contain;
          border-radius: var(--radius-xs);
          display: block;
        }

        .mobile-brand-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .brand-titles {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-burgundy);
          letter-spacing: 0.08em;
          line-height: 1.1;
        }

        .brand-tagline {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--color-antique-gold);
          letter-spacing: 0.15em;
          line-height: 1.2;
          margin-top: 2px;
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: block;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-dark-brown);
          letter-spacing: 0.03em;
          position: relative;
          padding: 0.35rem 0;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          transition: color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link-indicator {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--color-antique-gold);
          transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover {
          color: var(--color-burgundy);
        }

        .nav-link:hover .nav-link-indicator {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .btn-enquire {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background-color: transparent;
          color: var(--color-burgundy);
          border: 1px solid var(--color-burgundy);
          padding: 0.55rem 1.15rem;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          transition: var(--transition-button);
          will-change: transform;
        }

        .btn-enquire:hover {
          background-color: var(--color-burgundy);
          color: var(--color-cream);
          border-color: var(--color-burgundy);
          box-shadow: 0 6px 18px rgba(88, 29, 39, 0.22);
          transform: none;
        }

        .enquire-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: var(--color-burgundy);
          border: 1px solid rgba(182, 154, 98, 0.4);
          border-radius: var(--radius-sm);
          background-color: var(--color-cream-light);
          cursor: pointer;
        }

        @media (min-width: 992px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        /* Mobile Drawer */
        .mobile-drawer-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(56, 37, 29, 0.65);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          z-index: 1100;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-drawer-content {
          width: 85%;
          max-width: 340px;
          height: 100%;
          background-color: var(--color-cream);
          border-left: 2px solid var(--color-antique-gold);
          border-top-left-radius: var(--radius-lg);
          border-bottom-left-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
        }

        .mobile-close-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--color-burgundy);
          background-color: var(--color-cream-light);
          border: 1px solid var(--color-border);
          cursor: pointer;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1.5rem;
          flex: 1;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 0.5rem;
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--color-burgundy);
          border-bottom: 1px dashed rgba(182, 154, 98, 0.3);
          transition: all 0.25s ease;
        }

        .mobile-nav-link:hover {
          color: var(--color-antique-gold);
          padding-left: 0.75rem;
        }

        .mobile-drawer-footer {
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
        }

        .w-full {
          width: 100%;
        }
      `}</style>
    </>
  );
};
