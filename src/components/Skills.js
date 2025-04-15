import React from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaStackOverflow  } from 'react-icons/fa';
import { SiArduino, SiMongodb, SiMysql, SiTensorflow, SiKeras, SiPandas, SiNumpy, SiFastapi, SiCplusplus, SiKaggle, SiPostman, SiLeetcode , SiJupyter, SiJavascript, SiGooglecolab, SiDialogflow } from 'react-icons/si';
import '../styles/Skills.css';
import PythonFlaskLogo from '../assets/python-flask-icon.png';
import ScikitLearnLogo from '../assets/ScikitLearnIcon.png';
import GitLogo from '../assets/Git-logo.png';
import FigmaLogo from '../assets/Figma-logo.png';
import ExpoGoLogo from '../assets/ExpoGo-logo.png';
import MatplotlibLogo from '../assets/MatplotlibLogo.png';
import BlynkLogo from '../assets/blynk_logo.png';
import OpenCVLogo from '../assets/OpenCV_logo.png';



function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      
      <h4>Languages:</h4>
      <ul>
        <li><FaPython color="#3776AB" /> Python</li>
        <li><SiJavascript color="#F7DF1E" /> JavaScript</li>
        <li><FaJava color="#007396" /> Java</li>
        <li><FaHtml5 color="#E34F26" /> HTML</li>
        <li><FaCss3Alt color="#1572B6" /> CSS</li>
        <li><SiCplusplus color="#00599C" /> C++</li>
      </ul>

      <h4>Frameworks / Libraries:</h4>
      <ul>
        <li><SiTensorflow color="#FF6F00" /> TensorFlow</li>
        <li><img src={ScikitLearnLogo} alt="ScikitLogo" className='logo' /> Scikit-learn</li>
        <li><SiKeras color="#D00000" /> Keras</li>
        <li><SiPandas color="#150458" /> Pandas</li>
        <li><img src={OpenCVLogo} alt="OpenCVLogo" className='logo' />OpenCV</li>
        <li><img src={MatplotlibLogo} alt="Matplotlib Logo" className='logo' /> Matplotlib</li>
        <li><SiNumpy color="#013243" /> Numpy</li>
        <li><FaReact color="#61DAFB" /> React</li>
        <li><SiFastapi color="#009688" /> FastAPI</li>
        <li><img src={PythonFlaskLogo} alt="Python Flask" className='logo' /> Flask</li>
      </ul>

      <h4>Databases:</h4>
      <ul>
        <li><SiMysql color="#4479A1" /> MySQL</li>
        <li><SiMongodb color="#47A248" /> MongoDB</li>
      </ul>

      <h4>Tools:</h4>
      <ul>
        <li><SiJupyter color="#F37626" /> Jupyter Notebook</li>
        <li><SiGooglecolab color="#F9AB00" /> Google Colab</li>
        <a href="https://www.kaggle.com/fasinfasi" target="_blank" rel="noopener noreferrer" className='link-li'>
          <li><SiKaggle color="#20BEFF" /> Kaggle</li>
        </a>
        <li><SiArduino color="#00979D" /> Arduino</li>
        <li><img src={BlynkLogo} alt="BlynkLogo" className='logo' />  Blynk</li>
        <li><SiPostman color="#FF6C37" /> Postman</li>
        <li><img src={GitLogo} alt="GitLogo" className='logo' /> Git</li>
        <a href="https://github.com/fasinfasi" target="_blank" rel="noopener noreferrer" className='link-li'>
          <li><FaGithub color="#181717" /> GitHub</li>
        </a>
        <li><SiDialogflow color="#FF9800" /> Dialogflow</li>
        <a href="https://stackoverflow.com/users/28130311/fasin-fasi?tab=profile" target="_blank" rel="noopener noreferrer" className='link-li'>
          <li><FaStackOverflow color="#F58025" /> StackOverflow</li>
        </a>
        <a href="https://leetcode.com/u/FasinFasi/" target="_blank" rel="noopener noreferrer" className='link-li'>
          <li><SiLeetcode color="#FFA116" /> LeetCode</li>
        </a>
        <li><img src={FigmaLogo} alt="Figma Logo" className='logo' />Figma</li>
        <li><img src={ExpoGoLogo} alt="ExpoGoLogo" className='logo' /> ExpoGO</li>
      </ul>
    </section>
  );
}

export default Skills;