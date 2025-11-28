import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa6';
import XIcon from '../assets/XLogo.png'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out <br></br>I love to connect with people😍 just say 'Hi✋🏻'</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:fasinfasi17@gmail.com">fasinfasi17@gmail.com</a></p>
        <div className="contact-social-icons">
          <a href="https://www.linkedin.com/in/fasinfasi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/fasinfasi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://x.com/FasinFasi17" target="_blank" rel="noopener noreferrer">
          <img src={XIcon} alt="Close" class='social-logo' />
          </a>
          <a href="https://discord.com/fasinfasi " target="_blank" rel="noopener noreferrer">
            <FaDiscord className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
