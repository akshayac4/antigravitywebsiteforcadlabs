import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X
} from 'lucide-react';
import ScrollMotion from './ScrollMotion';
import '../App.css';

export default function Layout() {
  const location = useLocation();
  const year = new Date().getFullYear();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappMessage = 'Hi Cad Labs, I’d like to discuss a Salesforce/Odoo project for my business.';
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Mondeal+Heights+B+Wing+6th+Floor+Sarkhej+Gandhinagar+Hwy+Ahmedabad+Gujarat+380015';

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      <ScrollMotion />

      {/* Navigation */}
      <nav className="navbar glass-panel">
        <div className="nav-content container">
          <div className="logo">
            <Link to="/" onClick={closeMenu} className="logo-link" aria-label="Cad Labs home">
              <img className="logo-image logo-image-full" src="/brand-logo.png" alt="Cad Labs Technology LLP" />
              <img className="logo-image logo-image-symbol" src="/brand-icon.svg" alt="" aria-hidden="true" />
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="nav-links desktop-only">
            <Link to="/" className={location.pathname === '/' ? 'text-primary font-bold' : ''}>Home</Link>
            <Link to="/services" className={location.pathname === '/services' ? 'text-primary font-bold' : ''}>Services</Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'text-primary font-bold' : ''}>Projects</Link>
            <Link to="/blogs" className={location.pathname === '/blogs' ? 'text-primary font-bold' : ''}>Blogs</Link>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Contact Us</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? <X size={28} className="text-main" /> : <Menu size={28} className="text-main" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-dropdown glass-panel animate-fade-in">
            <Link to="/" className={location.pathname === '/' ? 'text-primary font-bold' : ''} onClick={closeMenu}>Home</Link>
            <Link to="/services" className={location.pathname === '/services' ? 'text-primary font-bold' : ''} onClick={closeMenu}>Services</Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'text-primary font-bold' : ''} onClick={closeMenu}>Projects</Link>
            <Link to="/blogs" className={location.pathname === '/blogs' ? 'text-primary font-bold' : ''} onClick={closeMenu}>Blogs</Link>
            <a href="#contact" className="btn btn-primary text-center" onClick={closeMenu}>Contact Us</a>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="site-main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="contact" className="footer border-t" style={{ marginTop: 'auto' }}>
        <div className="container">
          <div className="footer-grid">
            <section className="footer-brand" aria-label="CAD Labs company information">
              <img
                className="footer-logo"
                src="/JPGS & PNGS/Cad Labs Technology LLP - Main - Black.png"
                alt="CAD Labs Technology LLP"
              />
              <p className="footer-tagline">Elevating businesses through technology.</p>
              
              <div className="footer-global-presence" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.35rem 0.85rem',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '50px',
                marginTop: '0.5rem',
                marginBottom: '1rem',
                width: 'fit-content'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: '9px',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  lineHeight: '1.1'
                }}>
                  <span>GLOBAL</span>
                  <span>PRESENCE</span>
                </div>

                <div style={{ width: '1px', height: '1.2rem', backgroundColor: 'var(--border)' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '13px', color: 'var(--text-main)', fontWeight: '600' }}>
                  <span aria-hidden="true" style={{ fontSize: '15px', display: 'inline-flex', alignItems: 'center' }}>🇮🇳</span>
                  <span>India</span>
                </div>

                <div style={{ width: '1px', height: '1.2rem', backgroundColor: 'var(--border)' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '13px', color: 'var(--text-main)', fontWeight: '600' }}>
                  <div style={{ display: 'flex', gap: '0.15rem', alignItems: 'center' }}>
                    <span aria-hidden="true" style={{ fontSize: '15px', display: 'inline-flex', alignItems: 'center' }}>🇺🇸</span>
                    <span aria-hidden="true" style={{ fontSize: '15px', display: 'inline-flex', alignItems: 'center' }}>🇨🇦</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1', fontSize: '11px', fontWeight: '600' }}>
                    <span>US &</span>
                    <span>Canada</span>
                  </div>
                </div>
              </div>

              <a className="footer-info-row" href="mailto:akshay@thecadlabs.com">
                <Mail size={18} aria-hidden="true" />
                <span>akshay@thecadlabs.com</span>
              </a>
              <div className="footer-info-row footer-address">
                <MapPin size={18} aria-hidden="true" />
                <span>Mondeal Heights, B Wing, 6th Floor, Sarkhej - Gandhinagar Hwy, near Novotel Hotel, Ahmedabad, Gujarat 380015</span>
              </div>
              <a className="footer-map-link" href={mapsUrl} target="_blank" rel="noreferrer">
                View on Google Maps
                <ExternalLink size={15} aria-hidden="true" />
              </a>
              <div className="footer-socials" aria-label="Social links">
                <a href="#" aria-label="LinkedIn">
                  <span aria-hidden="true">in</span>
                </a>
                <a href="#" aria-label="Twitter/X">
                  <span aria-hidden="true">X</span>
                </a>
                <a href="#" aria-label="YouTube">
                  <span aria-hidden="true">YT</span>
                </a>
              </div>
            </section>

            <nav className="footer-column footer-company-nav" aria-label="Company navigation">
              <span className="footer-section-label">Company</span>
              <Link to="/">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Portfolio</Link>
              <a href="#contact">Careers</a>
              <Link to="/blogs">Blog</Link>
            </nav>

            <section className="footer-column footer-contact-column" aria-label="Contact options">
              <span className="footer-section-label">Contact us</span>

              <div className="footer-contact-card">
                <div className="footer-contact-card-title">
                  <Globe2 size={18} aria-hidden="true" />
                  <span>India customers</span>
                </div>
                <a className="footer-contact-phone" href="tel:+917383497585">
                  +91 73834 97585
                </a>
                <div className="footer-contact-actions">
                  <a
                    className="footer-contact-button footer-contact-button-whatsapp"
                    href={`https://wa.me/917383497585?text=${encodedWhatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a className="footer-contact-button footer-contact-button-call" href="tel:+917383497585">
                    <Phone size={17} aria-hidden="true" />
                    Call
                  </a>
                </div>
                <p className="footer-alt-number">
                  Alt: <a href="tel:+918866617388">+91 88666 17388</a>
                </p>
              </div>

              <div className="footer-contact-card">
                <div className="footer-contact-card-title">
                  <Globe2 size={18} aria-hidden="true" />
                  <span>
                    US / Canada customers
                  </span>
                </div>
                <a className="footer-contact-phone" href="tel:+13828820867">
                  +1 (382) 882-0867
                </a>
                <div className="footer-contact-actions">
                  <a
                    className="footer-contact-button footer-contact-button-whatsapp"
                    href={`https://wa.me/13828820867?text=${encodedWhatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a className="footer-contact-button footer-contact-button-call" href="tel:+13828820867">
                    <Phone size={17} aria-hidden="true" />
                    Call
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="footer-bottom">
            <p>&copy; {year} CAD Labs Technology LLP. All rights reserved.</p>
            <div className="footer-legal-links">
              <a href="#">Privacy policy</a>
              <a href="#">Terms of service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
