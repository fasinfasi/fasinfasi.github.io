import React from 'react';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations, opportunities, or just to say hi!</p>

      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaTwitter /> Twitter
        </a>
        <a href="https://discord.com/users/yourdiscordid" target="_blank" rel="noopener noreferrer">
          <FaDiscord /> Discord
        </a>
        <a href="mailto:your.email@example.com">
          <FaEnvelope /> Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
