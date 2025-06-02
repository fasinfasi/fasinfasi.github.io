import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import AquasyncImg from '../assets/aquasync_img.png';
import RealEstateImg from '../assets/RealEstateImg.png';
import FinancialImg from '../assets/Financial_img.jpg';
import ShoozyImg from '../assets/Shoozy_Img.jpg';
import CatDoImg from '../assets/CatDo_img.png';
import PotatoImg from '../assets/PotatoImg.jpg';


function TechStack({ skills }) {
  const [hovering, setHovering] = useState(false);

  const fullSkills = [...skills, ...skills]; // duplicate for smooth loop

  return (
    <div
      className="tech-stack-wrapper"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className={`ticker ${hovering ? 'animate' : ''}`}>
        {fullSkills.map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}



function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project">
          <img src={AquasyncImg} alt="AquaSync Project" className="project-image" />
          <h3>AquaSync</h3>
          <p>A water-tracking app built with React Native and integrated with machine learning algorithms to analyze hydration data.</p>
          <TechStack skills={['Flutter', 'IoT', 'Flask', 'MongoDB', 'Arduino', 'Firebase', 'Data Analysis', 'Figma']} />
          <a href="https://github.com/fasinfasi/SmartWaterBottle/tree/fasin_patch2" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project">
          <img src={ShoozyImg} alt="Shoozy-Shoe-Recommentation" className="project-image" />
          <h3>Shoozy</h3>
          <p>Content-based filtering that recommends shoes to users based on product similarity and customer preferences.</p>
          <TechStack skills={['Python', 'ML', 'NLP', 'TensorFlow', 'Pandas', 'Matplotlib', 'scikit-learn', 'Flask', 'Docker', 'Render', 'Excel', 'React.js', 'Node.js']} />
          <a href="https://github.com/fasinfasi/FootWear-recommender" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project">
          <img src={RealEstateImg} alt="Real-Estate Pic" className="project-image" />
          <h3>Real-Estate Prices</h3>
          <p>Estimates property prices in Bengaluru helping users make data-driven real estate decisions.</p>
          <TechStack skills={['Python','ML', 'Jupyter Notebook', 'Pandas', 'Pandas', 'Flask', 'HTML5', 'CSS3', 'Javascript', 'Kaggle']} />
          <a href="https://github.com/fasinfasi/Real-Estate-Prediction" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project">
          <img src={PotatoImg} alt="Potatoes image" className="project-image" />
          <h3>Potato Disease Prediction</h3>
          <p>A web-based application that helps farmers detect potato plant diseases by uploading or capturing leaf images.</p>
          <TechStack skills={['Python', 'FastAPI', 'ML', 'GCP', 'Jupyter Notebook', 'numpy', 'Matplotlib', 'Kaggle']} />
          <a href="https://github.com/fasinfasi/Potato_Disease_Prediction" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>

        <div className="project">
          <img src={FinancialImg} alt="Financial Data Image" className="project-image" />
          <h3>Financial Data Extraction</h3>
          <p>Developed a Streamlit-based web app using OpenAI's models to extract and analyze key financial insights from news articles.</p>
          <TechStack skills={['Python', 'OpenAI', 'Pandas', 'Streamlit', 'Prompt', 'API']} />
          <a href="https://github.com/fasinfasi/Financial-Data-Extraction" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>


        <div className="project">
          <img src={CatDoImg} alt="Cat&Dog Image" className="project-image" />
          <h3>Image Classifier</h3>
          <p>A web application that accurately classifies uploaded images as either a cat or a dog using a trained deep learning model.</p>
          <TechStack skills={['Python', 'Flask', 'ML', 'CNN', 'TensorFlow', 'Keras', 'Jupyter Notebook', 'numpy', 'Docker', 'Render', 'React.js',]} />
          <a href="https://github.com/fasinfasi/ImageClassification_cat_vs_dog" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        

      </div>
      <div className="more-projects">
        <a href="https://github.com/fasinfasi?tab=repositories" target="_blank" rel="noopener noreferrer" className="more-projects-link">
          More Projects
        </a>
      </div>

    </section>
  );
}

export default Projects;