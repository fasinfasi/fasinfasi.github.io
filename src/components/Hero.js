import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import myImage from '../assets/hero_img.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import XIcon from '../assets/XLogo.png';

function Hero() {

  const quotes = [
    "Teaching machines to learn; I'm the teacher",
    "AI learns from data; I learn from mistakes", 
    "Will technology build future? I build technology",
    "AI predict the future; I prepare it",
    "Algorithm find patterns; I find possibility",
    "Machines compute; I create",
    "AI sees the world in numbers; I give meaning",
    "Tech evolve every day; I evolve with it"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/fasinfasi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/fasinfasi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://x.com/FasinFasi17" target="_blank" rel="noopener noreferrer">
          <img src={XIcon} alt="Close" className='social-logo' />
        </a>
      </div>

      <div className="hero-content">
        <div className="text-content">
          <h1 className='name-head'>Hello 👋, I'm Fasin</h1>

          <p>I ❤️ Machines</p>
          <p>Machine learning | Generative AI | NLP | Deep Learning | Data Analysis | Computer Vision</p>

          <b>Who I'm</b>
          <div className="quote-wrapper">
            <b key={currentQuote} className="morphing-quote">
              " {quotes[currentQuote]} "
            </b>
          </div>

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
