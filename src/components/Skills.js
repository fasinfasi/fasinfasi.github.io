import React from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa';
import { SiArduino, SiMongodb, SiMysql, SiTensorflow, SiKeras, SiPandas, SiNumpy, SiJupyter, SiJavascript, SiGooglecolab, SiDialogflow } from 'react-icons/si';
import '../styles/Skills.css';
import PythonFlaskLogo from '../assets/python-flask-icon.png'
import ScikitLearnLogo from '../assets/ScikitLearnIcon.png'
import GitLogo from '../assets/Git-logo.png'
import FigmaLogo from '../assets/Figma-logo.png'
import ExpoGoLogo from '../assets/ExpoGo-logo.png'


function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      
      <h4>Languages:</h4>
      <ul>
        <li><FaPython color="#3776AB" /> Python</li>
        <li><FaJava color="#007396" /> Java</li>
        <li><FaHtml5 color="#E34F26" /> HTML</li>
        <li><FaCss3Alt color="#1572B6" /> CSS</li>
        <li><SiJavascript color="#F7DF1E" /> JavaScript</li>
      </ul>

      <h4>Frameworks / Libraries:</h4>
      <ul>
        <li><SiTensorflow color="#FF6F00" /> TensorFlow</li>
        <li><img src={ScikitLearnLogo} alt="ScikitLogo" className='logo' /> Scikit-learn</li>
        <li><SiKeras color="#D00000" /> Keras</li>
        <li><SiPandas color="#150458" /> Pandas</li>
        <li><SiNumpy color="#013243" /> Numpy</li>
        <li><FaReact color="#61DAFB" /> React</li>
        <li><img src={PythonFlaskLogo} alt="Python Flask" className='logo' /> Flask</li>
      </ul>

      <h4>Databases:</h4>
      <ul>
        <li><SiMysql color="#4479A1" /> MySQL</li>
        <li><SiMongodb color="#47A248" /> MongoDB</li>
      </ul>

      <h4>Tools:</h4>
      <ul>
        <li><SiArduino color="#00979D" /> Arduino</li>
        <li><SiJupyter color="#F37626" /> Jupyter Notebook</li>
        <li><SiGooglecolab color="#F9AB00" /> Google Colab</li>
        <li><img src={GitLogo} alt="GitLogo" className='logo' /> Git</li>
        <li><FaGithub color="#181717" /> GitHub</li>
        <li><SiDialogflow color="#FF9800" /> Dialogflow</li>
        <li><img src={FigmaLogo} alt="Figma Logo" className='logo' />Figma</li>
        <li><img src={ExpoGoLogo} alt="ExpoGoLogo" className='logo' /> ExpoGO</li>
      </ul>
    </section>
  );
}

export default Skills;
