import React, { useEffect, useState } from 'react';
import '../styles/Highlight.css';
import HackathonImage from '../assets/hackathon_pic.jpg';
import CollectorateImage from '../assets/collectorate.jpg';
import DebuggingImage from '../assets/debugging_pic.jpg';
import NAACImage from '../assets/iedc_pic.jpg';
import ARVRImage from '../assets/arvr_pic.jpg';

const highlightData = [
  {
    id: 1,
    image: HackathonImage,
    title: 'Special Recognition Award at Hackathon 🏆',
    link: 'https://www.linkedin.com/posts/fasinfasi_specialrecognitionaward-hackathonjourney-activity-7286730168344227840-lRca',
  },
  {
    id: 2,
    image: CollectorateImage,
    title: 'College Representative at Collectorate 🏛️',
    link: 'https://www.linkedin.com/posts/fasinfasi_inspiration-gratitude-leadership-activity-7239523513911369728-Onmw',
  },
  {
    id: 3,
    image: ARVRImage,
    title: 'Head of AR/VR Program 🥽',
    link: 'https://www.linkedin.com/posts/fasinfasi_ar-vr-techinnovation-activity-7298030938603630592-U-ul',
  },
  {
    id: 4,
    image: NAACImage,
    title: 'Project Presentation for NAAC 👨‍🏫',
    link: 'https://www.linkedin.com/posts/fasinfasi_internetofthings-iot-blynk-activity-7232452781821874176-GOFE',
  },
  {
    id: 5,
    image: DebuggingImage,
    title: 'Coordinator of Debugging Competition 🐞',
    link: '',
  },
];

const Highlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightData.length);
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getClass = (index) => {
    const center = currentIndex;
    if (index === center) return 'highlight-card center';
    if (index === (center - 1 + highlightData.length) % highlightData.length) return 'highlight-card left';
    if (index === (center + 1) % highlightData.length) return 'highlight-card right';
    return 'highlight-card hidden';
  };

  return (
    <section className="highlight-section" id="highlight">
      <h2 className="highlight-title">Highlights</h2>
      <div className="highlight-carousel">
        {highlightData.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            className={getClass(index)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item.image} alt={item.title} className="highlight-image" />
            <div className="highlight-text">{item.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Highlight;