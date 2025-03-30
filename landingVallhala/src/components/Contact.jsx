import React, { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <div className="contact-content grid-2">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="icon-location"></i>
              </div>
              <div className="contact-text">
                <h3>Ubicación</h3>
                <p>Avenida Tecnológica 123, Ciudad Tech</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="icon-email"></i>
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>info@vallhalatech.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="icon-phone"></i>
              </div>
              <div className="contact-text">
                <h3>Teléfono</h3>
                <p>+1 234 567 890</p>
              </div>
            </div>
            <div className="social-links">
              <h3>Síguenos</h3>
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
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;