import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.svg" alt="VallhalaTech Logo" />
            <h3>VallhalaTech</h3>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Compañía</h4>
              <ul>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#packages">Paquetes</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#services">Desarrollo Web</a></li>
                <li><a href="#services">Aplicaciones Móviles</a></li>
                <li><a href="#services">Soluciones Cloud</a></li>
                <li><a href="#services">Ciberseguridad</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Términos y Condiciones</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Política de Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VallhalaTech. Todos los derechos reservados.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="icon-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="icon-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="icon-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="icon-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;