import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Nosotros</h2>
        <div className="about-content grid-2">
          <div className="about-image">
            <img src="/about-image.png" alt="About VallhalaTech" />
          </div>
          <div className="about-text">
            <h3>Nuestra <span className="highlight">Misión</span></h3>
            <p>
              En VallhalaTech, nos dedicamos a proporcionar soluciones tecnológicas innovadoras 
              que transforman la manera en que las empresas operan en el mundo digital. 
              Nuestro equipo de expertos trabaja incansablemente para ofrecer productos y 
              servicios de la más alta calidad.
            </p>
            
            <h3>Nuestra <span className="highlight">Visión</span></h3>
            <p>
              Aspiramos a ser líderes en el sector tecnológico, reconocidos por nuestra 
              excelencia, innovación y compromiso con el éxito de nuestros clientes. 
              Buscamos crear un futuro donde la tecnología sea accesible, eficiente y 
              transformadora para todos.
            </p>
            
            <h3>Nuestros <span className="highlight">Valores</span></h3>
            <div className="values-grid grid-3">
              <div className="value-item">
                <div className="value-icon">
                  <i className="icon-innovation"></i>
                </div>
                <h4>Innovación</h4>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <i className="icon-quality"></i>
                </div>
                <h4>Calidad</h4>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <i className="icon-integrity"></i>
                </div>
                <h4>Integridad</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;