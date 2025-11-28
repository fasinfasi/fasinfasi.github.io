import React from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaStackOverflow, FaRobot } from 'react-icons/fa';
import { SiArduino, SiMongodb, SiMysql, SiTensorflow, SiPytorch, SiKeras, SiPandas, SiNumpy, SiFastapi, SiCplusplus, SiKaggle, SiPostman, SiLeetcode , SiJupyter, SiJavascript, SiGooglecolab, SiDialogflow, SiMicrosoftexcel, SiPowerbi, SiDocker  } from 'react-icons/si';
import { GiBrain, GiMeshNetwork } from 'react-icons/gi';
import { FaComments } from 'react-icons/fa';
import '../styles/Skills.css';
import PythonFlaskLogo from '../assets/python-flask-icon.png';
import ScikitLearnLogo from '../assets/ScikitLearnIcon.png';
import GitLogo from '../assets/Git-logo.png';
import FigmaLogo from '../assets/Figma-logo.png';
import MatplotlibLogo from '../assets/MatplotlibLogo.png';
import OpenCVLogo from '../assets/OpenCV_logo.png';
import AWSLogo from '../assets/aws_logo.png';
import GCPLogo from '../assets/gcp_logo.png';
import MLFLOWLogo from '../assets/mlflow_logo.png';
import HuggingFaceLogo from '../assets/HuggingFace_logo.png';

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

      <h4>AI / ML Concepts:</h4>
      <ul>
        <li><FaComments color="#BBBE09"/> Natural Language Processing (NLP)</li>
        <li><GiBrain color="#E528D5"/> Deep Learning</li>
        <li><FaRobot color="#5c0de5ff"/> Generative AI</li>
        <li><GiMeshNetwork color="2F21F6"/> Convolutional Neural Networks (CNN)</li>
      </ul>

      <h4>Frameworks / Libraries:</h4>
      <ul>
        <li><SiTensorflow color="#FF6F00" /> TensorFlow</li>
        <li><img src={ScikitLearnLogo} alt="ScikitLogo" className='logo' /> Scikit-learn</li>
        <li><SiKeras color="#D00000" /> Keras</li>
        <li><SiPytorch color="#EE4C2C" /> PyTorch</li>
        <li><img src={HuggingFaceLogo} alt="HuggingFaceLogo" className='logo' /> HuggingFace</li>
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

      <h4>Cloud:</h4>
      <ul>
        <li><img src={AWSLogo} alt="AWS-logo" className='logo'/> AWS</li>
        <li><img src={GCPLogo} alt="GCP-logo" className='logo'/> Google Cloud Platform</li>
      </ul>

      <h4>Tools:</h4>
      <ul>
        <li><SiJupyter color="#F37626" /> Jupyter Notebook</li>
        <li><SiGooglecolab color="#F9AB00" /> Google Colab</li>
        <a href="https://www.kaggle.com/fasinfasi" target="_blank" rel="noopener noreferrer" className='link-li'>
          <li><SiKaggle color="#20BEFF" /> Kaggle</li>
        </a>
        <li><img src={MLFLOWLogo} alt="MLFLOW Logo" className='logo' />MLflow</li>
        <li><SiPowerbi color="#FF9800" /> Power BI</li>
        <li><SiDocker color="#0779C8" /> Docker</li>
        <li><SiPostman color="#FF6C37" /> Postman</li>
        <li><SiArduino color="#00979D" /> Arduino</li>
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
        <li><SiMicrosoftexcel  color="#13C851" /> Excel</li>
        <li>🚀 Render</li>
      </ul>
    </section>
  );
}

export default Skills;
