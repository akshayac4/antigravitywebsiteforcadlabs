import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ScrollMotion from './ScrollMotion';
import '../App.css';

export default function Layout() {
  const location = useLocation();
  const year = new Date().getFullYear();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="container footer-content">
          <div className="footer-brand">
            <img className="footer-logo" src="/brand-logo.png" alt="Cad Labs Technology LLP" />
            <p className="text-muted mt-2">Elevating businesses through technology.</p>
          </div>
          <div className="footer-links">
            <p className="text-muted">&copy; {year} The Cad Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
