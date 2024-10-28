import React from 'react';
import '../styles/Projects.css';
import AquasyncImg from '../assets/aquasync_img.png';
import AgroAssistImg from '../assets/AgroAssistImg.png'
import RealEstateImg from '../assets/RealEstateImg.png'

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project">
          <img src={AquasyncImg} alt="AquaSync Project" className="project-image" />
          <h3>AquaSync</h3>
          <p>A water-tracking app built with React Native and integrated with machine learning algorithms to analyze hydration data.</p>
          <a href="https://github.com/fasinfasi/SmartWaterBottle/tree/fasin_patch2" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project">
          <img src={AgroAssistImg} alt="AgroAssist Project" className="project-image" />
          <h3>AgroAssist</h3>
          <p>An IoT-based automated irrigation system using sensors and ESP32 for optimizing water usage.</p>
          <a href="https://github.com/fasinfasi/Automated-irrigation-System" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project">
          <img src={RealEstateImg} alt="Third Project" className="project-image" />
          <h3>Real Estate Price Prediction</h3>
          <p>Description of the third project here. This can be a two-line description.</p>
          <a href="https://github.com/fasinfasi/Real-Estate-Prediction" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
