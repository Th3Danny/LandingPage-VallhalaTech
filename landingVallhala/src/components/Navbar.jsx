import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import logo from "../assets/img/logo2.png"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="VallhalaTech Logo" />
            <span>VallhalaTech</span>
          </a>
        </div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Servicios</a></li>
            <li><a href="#packages" onClick={() => setMobileMenuOpen(false)}>Paquetes</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
          </ul>
        </div>
        
        <div className="cta-button">
          <a href="#contact" className="btn btn-primary">Cotizar Ahora</a>
        </div>
        
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;