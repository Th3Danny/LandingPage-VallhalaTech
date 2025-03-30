import React from 'react';
import '../css/Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: 'icon-tech',
      title: 'Tecnología de Vanguardia',
      description: 'Utilizamos las herramientas y tecnologías más avanzadas del mercado.'
    },
    {
      id: 2,
      icon: 'icon-experience',
      title: 'Equipo Experimentado',
      description: 'Nuestros profesionales cuentan con amplia experiencia en el sector tecnológico.'
    },
    {
      id: 3,
      icon: 'icon-support',
      title: 'Soporte Personalizado',
      description: 'Ofrecemos atención dedicada para resolver todas tus dudas y necesidades.'
    },
    {
      id: 4,
      icon: 'icon-solutions',
      title: 'Soluciones a Medida',
      description: 'Adaptamos nuestros servicios a las necesidades específicas de tu negocio.'
    }
  ];

  return (
    <section id="benefits" className="benefits section">
      <div className="container">
        <h2 className="section-title">Ventajas y Beneficios</h2>
        <div className="benefits-content">
          <div className="benefits-grid grid-2">
            {benefits.map(benefit => (
              <div key={benefit.id} className="benefit-item">
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <div className="benefit-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="benefits-image">
            <img src="/benefits-image.png" alt="VallhalaTech Benefits" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;