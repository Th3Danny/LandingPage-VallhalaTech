import React from 'react';
import '../css/Services.css';
import { MdPhoneAndroid, MdWeb, MdCloud, MdSecurity, MdOutlinePsychology, MdBusinessCenter } from "react-icons/md";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <MdWeb size={40} />,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web atractivos, funcionales y optimizados para todos los dispositivos.'
    },
    {
      id: 2,
      icon: <MdPhoneAndroid size={40} />,
      title: 'Desarrollo de Aplicaciones',
      description: 'Diseñamos y desarrollamos aplicaciones móviles y de escritorio para potenciar tu negocio.'
    },
    // {
    //   id: 3,
    //   icon: <MdCloud size={40} />,
    //   title: 'Soluciones en la Nube',
    //   description: 'Implementamos y gestionamos infraestructuras cloud para maximizar eficiencia y seguridad.'
    // },
    // {
    //   id: 4,
    //   icon: <MdSecurity size={40} />,
    //   title: 'Ciberseguridad',
    //   description: 'Protegemos tus activos digitales con las últimas tecnologías y prácticas de seguridad.'
    // },
    // {
    //   id: 5,
    //   icon: <MdOutlinePsychology size={40} />,
    //   title: 'Inteligencia Artificial',
    //   description: 'Implementamos soluciones de IA para automatizar procesos y obtener insights valiosos.'
    // },
    {
      id: 6,
      icon: <MdBusinessCenter size={40} />,
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
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Saber más</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;