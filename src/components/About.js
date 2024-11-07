import React from 'react';
import '../styles/About.css';
import myImage from '../assets/about_img.jpg';

function About() {
  return (
    <section id="about" className="about">
      <h2 class='about-head'>About Me</h2>
      <span class='s'>My Introduction</span>
      <div className="about-content">
        <img src={myImage} alt="About Me" className="about-image" />
        <div className="text-content">
          <p>
            I am a motivated and ambitious individual with 3+ years of coding experience, building a solid understanding of <b>machine learning</b>, <b>deep learning concepts</b>, algorithms and tools. I am entirely self-taught, having developed my technical skills and understanding through dedication, persistence, and enthusiasm for technology. I am really curious about <b>hardware</b> and <b>software</b> integration. I am particularly passionate about using technology to solve real-world problems, and I’m always exploring new ways to leverage machine learning for meaningful contributions to this ever-evolving tech landscape. I commited continuous learning and growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
