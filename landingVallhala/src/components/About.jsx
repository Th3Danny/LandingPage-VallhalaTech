import React from 'react';
import '../css/About.css';
import logo from "../assets/img/Logo4.png";
import { 
  MdLightbulbOutline,  // Innovación
  MdHighQuality,       // Calidad
  MdGppGood,           // Integridad
  MdGroups,            // Equipo (opcional)
  MdTrendingUp,        // Crecimiento (opcional)
  MdCode               // Tecnología (opcional)
} from 'react-icons/md';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Nosotros</h2>
        <div className="about-content grid-2">
          <div className="about-image">
            <img src={logo} alt="VallhalaTech Technology"/>
          </div>
          <div className="about-text">
            <h3>Nuestra <span className="highlight">Misión</span></h3>
            <p>
              En ValhallaTech, nos dedicamos a proporcionar soluciones tecnológicas innovadoras 
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
                  <MdLightbulbOutline size={40} className="value-icon-svg" />
                </div>
                <h4>Innovación</h4>
                <p>Buscamos constantemente nuevas ideas y enfoques</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <MdHighQuality size={40} className="value-icon-svg" />
                </div>
                <h4>Calidad</h4>
                <p>Excelencia en cada producto y servicio</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <MdGppGood size={40} className="value-icon-svg" />
                </div>
                <h4>Integridad</h4>
                <p>Actuamos con ética y transparencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;