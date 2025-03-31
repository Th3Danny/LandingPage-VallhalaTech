import React from 'react';
import logo from "../assets/img/Logo4.png"
import '../css/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="slide-up">Bienvenido a <span className="text-gradient">ValhallaTech</span></h1>
          <p className="slide-up">Soluciones tecnológicas de vanguardia para impulsar tu negocio hacia el éxito digital.</p>
          <div className="hero-buttons slide-up">
            <a href="#services" className="btn btn-primary">Nuestros Servicios</a>
            <a href="#contact" className="btn btn-outline">Contáctanos</a>
          </div>
        </div>
        <div className="hero-image slide-in-right">
          <img src={logo} alt="VallhalaTech Technology" />
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about">
          <span className="scroll-text">Descubre Más</span>
          <i className="scroll-icon"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;