import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project">
          <img src="../assets/aquasync_img.png" alt="AquaSync Project" className="project-image" />
          <h3>AquaSync</h3>
          <p>A water-tracking app built with React Native and integrated with machine learning algorithms to analyze hydration data.</p>
          <a href="https://github.com/yourusername/AquaSync" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project">
          <img src="path-to-image/agroassist.jpg" alt="AgroAssist Project" className="project-image" />
          <h3>AgroAssist</h3>
          <p>An IoT-based automated irrigation system using sensors and ESP32 for optimizing water usage.</p>
          <a href="https://github.com/yourusername/AgroAssist" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project">
          <img src="path-to-image/thirdproject.jpg" alt="Third Project" className="project-image" />
          <h3>Third Project</h3>
          <p>Description of the third project here. This can be a two-line description.</p>
          <a href="https://github.com/yourusername/ThirdProject" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
