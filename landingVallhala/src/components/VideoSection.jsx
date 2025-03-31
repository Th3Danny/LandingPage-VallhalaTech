import React, { useState } from 'react';
import '../css/VideoSection.css';
import logo from "../assets/img/Logo4.png"
import { FaPlay } from "react-icons/fa";
const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  
  const videos = [
    {
      id: 1,
      thumbnail: '/video-thumb-1.jpg',
      title: 'Introducción a ValhallaTech',
      description: 'Descubre quiénes somos y cómo podemos ayudarte a transformar tu negocio.',
      url: 'https://www.youtube.com/embed/video1'
    },
    {
      id: 2,
      thumbnail: '/video-thumb-2.jpg',
      title: 'Nuestros Casos de Éxito',
      description: 'Conoce los proyectos que hemos realizado y los resultados obtenidos.',
      url: 'https://www.youtube.com/embed/video2'
    },
    {
      id: 3,
      thumbnail: '/video-thumb-3.jpg',
      title: 'Tecnologías que Utilizamos',
      description: 'Explora las herramientas y tecnologías que implementamos en nuestros proyectos.',
      url: 'https://www.youtube.com/embed/video3'
    }
  ];

  return (
    <section id="videos" className="videos section">
      <div className="container">
        <h2 className="section-title">Videos Promocionales</h2>
        <div className="video-container">
          <div className="video-player">
            <iframe 
              src={videos[activeVideo].url} 
              title={videos[activeVideo].title}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnails">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className={`video-thumb ${index === activeVideo ? 'active' : ''}`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="thumb-image">
                  <img src={logo} alt={video.title} />
                  <div className="play-icon">
                    <i className="icon-play"> <FaPlay size={10} className="value-icon-svg" /></i>
                  </div>
                </div>
                <div className="thumb-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;