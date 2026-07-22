import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ROUTES } from '../constants/routes';
import { Button } from '../components/Button';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Solutions', path: ROUTES.SOLUTIONS },
    { label: 'TBR Framework™', path: ROUTES.TBR_FRAMEWORK },
    { label: 'Methodologies', path: ROUTES.METHODOLOGIES },
  ];

  return (
    <div className="app-layout">
      {/* Background Abstract Grid */}
      <div className="grid-background-overlay"></div>
      
      {/* Navigation Header */}
      <header className="site-header">
        <div className="header-container container">
          <Link to={ROUTES.HOME} className="brand-logo-area" aria-label="Marketers Cafe Home">
            <img src="logo-marketers-cafe.png" alt="Marketers Cafe Logo" className="brand-logo-img" />
            <span className="brand-logo-text">Marketers Cafe</span>
          </Link>

          <nav className="desktop-navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <Link to={ROUTES.CONTACT}>
              <Button variant="outline" icon={<ArrowUpRight size={14} />}>
                Schedule Meeting
              </Button>
            </Link>
            
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-navigation-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mobile-nav-divider"></div>
            <Link to={ROUTES.CONTACT} className="mobile-nav-cta">
              <Button variant="solid" icon={<ArrowUpRight size={14} />} className="w-full">
                Schedule Meeting
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="main-content-wrapper">
        {children}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container container">
          <div className="footer-top-grid">
            <div className="footer-brand-column">
              <div className="brand-logo-area">
                <img src="logo-marketers-cafe.png" alt="Marketers Cafe Logo" className="brand-logo-img" />
                <span className="brand-logo-text">Marketers Cafe</span>
              </div>
              <p className="footer-brand-purpose">
                Building the Brands People Choose. We help businesses earn customer trust, build enduring brands, and achieve sustainable revenue growth.
              </p>
            </div>
            
            <div className="footer-links-column">
              <h4 className="footer-heading">Capabilities</h4>
              <nav className="footer-nav">
                <Link to={ROUTES.SOLUTIONS} className="footer-link">Growth Solutions</Link>
                <Link to={ROUTES.TBR_FRAMEWORK} className="footer-link">TBR Framework™</Link>
                <Link to={ROUTES.METHODOLOGIES} className="footer-link">Our Methodology</Link>
              </nav>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-heading">Company</h4>
              <nav className="footer-nav">
                <Link to={ROUTES.ABOUT} className="footer-link">About Us</Link>
                <Link to={ROUTES.CONTACT} className="footer-link">Get in Touch</Link>
              </nav>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-heading">Digital HQ</h4>
              <p className="footer-info-text">HQ BLR, HYD</p>
              <p className="footer-info-text">hello@marketerscafe.net</p>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Marketers Cafe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default MainLayout;
