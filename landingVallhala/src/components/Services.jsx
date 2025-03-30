import React from 'react';
import '../css/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'icon-web',
      title: 'Desarrollo Web',
      description: 'Creamos sitios web atractivos, funcionales y optimizados para todos los dispositivos.'
    },
    {
      id: 2,
      icon: 'icon-app',
      title: 'Desarrollo de Aplicaciones',
      description: 'Diseñamos y desarrollamos aplicaciones móviles y de escritorio para potenciar tu negocio.'
    },
    {
      id: 3,
      icon: 'icon-cloud',
      title: 'Soluciones en la Nube',
      description: 'Implementamos y gestionamos infraestructuras cloud para maximizar eficiencia y seguridad.'
    },
    {
      id: 4,
      icon: 'icon-security',
      title: 'Ciberseguridad',
      description: 'Protegemos tus activos digitales con las últimas tecnologías y prácticas de seguridad.'
    },
    {
      id: 5,
      icon: 'icon-ai',
      title: 'Inteligencia Artificial',
      description: 'Implementamos soluciones de IA para automatizar procesos y obtener insights valiosos.'
    },
    {
      id: 6,
      icon: 'icon-consulting',
      title: 'Consultoría Tecnológica',
      description: 'Asesoramos en la estrategia digital para optimizar tus procesos y tecnologías.'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid grid-3">
          {services.map(service => (
            <div key={service.id} className="service-card card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Saber más <i className="icon-arrow-right"></i></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
