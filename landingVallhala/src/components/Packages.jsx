import React, { useState } from 'react';
import '../css/Packages.css';

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const packages = {
    web: [
      {
        id: 1,
        name: 'Landing Page',
        price: '$4,000',
        features: [
          'Diseño Personalizado',
          'Responsive Design',
          'Formulario de Contacto',
          'SEO Básico',
          'Integración de Redes Sociales'
        ],
        popular: false
      },
      {
        id: 2,
        name: 'Página Corporativa',
        price: '$7,500',
        features: [
          'Hasta 5 Secciones',
          'Diseño Premium',
          'Panel de Administración',
          'SEO Avanzado',
          'Análisis de Tráfico',
          'Soporte Técnico (1 mes)'
        ],
        popular: true
      },
      {
        id: 3,
        name: 'E-Commerce',
        price: '$12,000',
        features: [
          'Tienda Online Completa',
          'Hasta 100 Productos',
          'Pasarela de Pagos',
          'Sistema de Inventario',
          'Panel Administrativo Avanzado',
          'SEO Profesional',
          'Soporte Técnico (3 meses)'
        ],
        popular: false
      }
    ],
    app: [
      {
        id: 1,
        name: 'App Básica',
        price: '$2,499',
        features: [
          'Diseño Personalizado',
          'Funcionalidades Básicas',
          'Compatible con iOS/Android',
          'Publicación en Tiendas',
          'Soporte Técnico (1 mes)'
        ],
        popular: false
      },
      {
        id: 2,
        name: 'App Premium',
        price: '$4,999',
        features: [
          'Diseño Ultra Moderno',
          'Funcionalidades Avanzadas',
          'Integración con APIs',
          'Sistema de Notificaciones',
          'Analítica Detallada',
          'Soporte Técnico (3 meses)'
        ],
        popular: true
      },
      {
        id: 3,
        name: 'App Empresarial',
        price: '$8,999',
        features: [
          'Solución Completa a Medida',
          'Integración con Sistemas Existentes',
          'Panel de Administración Avanzado',
          'Seguridad de Nivel Empresarial',
          'Soporte Técnico Premium (6 meses)',
          'Actualizaciones Incluidas'
        ],
        popular: false
      }
    ],
    cloud: [
      {
        id: 1,
        name: 'Cloud Básico',
        price: '$399/mes',
        features: [
          'Almacenamiento 500GB',
          'Backup Diario',
          'Soporte 8/5',
          'Seguridad Estándar'
        ],
        popular: false
      },
      {
        id: 2,
        name: 'Cloud Business',
        price: '$799/mes',
        features: [
          'Almacenamiento 2TB',
          'Backup Cada 6 Horas',
          'Soporte 16/7',
          'Seguridad Avanzada',
          'Escalabilidad Automática'
        ],
        popular: true
      },
      {
        id: 3,
        name: 'Cloud Enterprise',
        price: '$1,499/mes',
        features: [
          'Almacenamiento Ilimitado',
          'Backup en Tiempo Real',
          'Soporte 24/7',
          'Seguridad de Nivel Militar',
          'Alta Disponibilidad',
          'Entorno Multi-región'
        ],
        popular: false
      }
    ]
  };

  return (
    <section id="packages" className="packages section">
      <div className="container">
        <h2 className="section-title">Nuestros Paquetes</h2>
        
        <div className="package-categories">
          <button 
            className={`category-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Desarrollo Web
          </button>
          <button 
            className={`category-btn ${activeCategory === 'app' ? 'active' : ''}`}
            onClick={() => setActiveCategory('app')}
          >
            Aplicaciones Móviles
          </button>
          <button 
            className={`category-btn ${activeCategory === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cloud')}
          >
            Servicios Cloud
          </button>
        </div>
        
        <div className="packages-grid grid-3">
          {packages[activeCategory].map(pkg => (
            <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">Popular</div>}
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">{pkg.price}</div>
              <ul className="package-features">
                {pkg.features.map((feature, index) => (
                  <li key={index}>
                    <i className="icon-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary package-btn">Seleccionar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;