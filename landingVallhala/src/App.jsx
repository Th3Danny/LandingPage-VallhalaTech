import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Benefits from './components/Benefits';
import VideoSection from './components/VideoSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Packages />
      <VideoSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
