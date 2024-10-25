import React from 'react';
import '../styles/Hero.css';
import myImage from '../assets/fasin_img.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Hello 👋, I'm Fasin</h1>
          <b>ML Engineer</b>
          <p>
            I'm a dedicated self-taught person with a passion for technology. I am eager to contribute to this tech era with all my potential.<br />
            <b>I don't say I'm perfect, but I would say I can to be perfect🙂</b>
          </p>
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
