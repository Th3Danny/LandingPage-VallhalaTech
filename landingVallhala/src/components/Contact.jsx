import React, { useState } from 'react';
import '../css/Contact.css';
import { FaInstagram, FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { 
  MdLocationOn , 
  MdEmail , 
  MdPhoneAndroid , 
  MdOutlineFacebook , 
} from 'react-icons/md';

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
    console.log('Form submitted:', formData);
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
                <MdLocationOn  size={28} className="contact-icon-svg" />
              </div>
              <div className="contact-text">
                <h3>Ubicación</h3>
                <p>Avenida Tecnológica 123, Ciudad Tech</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <MdEmail size={28} className="contact-icon-svg" />
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>info@vallhalatech.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <MdPhoneAndroid  size={28} className="contact-icon-svg" />
              </div>
              <div className="contact-text">
                <h3>Teléfono</h3>
                <p>+1 234 567 890</p>
              </div>
            </div>
            <div className="social-links">
              <h3>Síguenos</h3>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <MdOutlineFacebook  size={24} className="social-icon-svg" />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <FaSquareXTwitter size={24} className="social-icon-svg" />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <FaInstagram size={24} className="social-icon-svg" />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin size={24} className="social-icon-svg" />
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
                  placeholder="Tu nombre completo"
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
                  placeholder="tu@email.com"
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
                  placeholder="Opcional"
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
                  placeholder="¿Cómo podemos ayudarte?"
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
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <IoIosSend className="btn-icon" /> Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;