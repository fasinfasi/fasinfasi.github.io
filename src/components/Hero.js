import React from 'react';
import '../styles/Hero.css';
import myImage from '../assets/hero_img.png';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/fasinfasi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/fasinfasi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
      </div>
      <div className="hero-content">
        <div className="text-content">
          <h1 class='name-head'>Hello 👋, I'm Fasin</h1>
          <p>I ❤️ Machine</p>
          <p>Machine learning | Data Science | Deep Learning |<br/>Internet of Things | Tech Integrator</p>
          <b>' Teaching machine to <span class='learn-txt'>learn</span>, shaping tomorrow '</b>
          <a href="#contact" className="hero-btn">Get In Touch</a>
        </div>
        <div className="image-content">
          <img src={myImage} alt="Fasin" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
