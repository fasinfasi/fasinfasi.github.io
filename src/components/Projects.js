import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>AquaSync</h3>
        <p>A water-tracking app built with React Native and integrated with machine learning algorithms to analyze hydration data.</p>
        <a href="https://github.com/yourusername/AquaSync" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
      <div className="project">
        <h3>AgroAssist</h3>
        <p>An IoT-based automated irrigation system using sensors and ESP32 for optimizing water usage.</p>
        <a href="https://github.com/yourusername/AgroAssist" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </section>
  );
}

export default Projects;
