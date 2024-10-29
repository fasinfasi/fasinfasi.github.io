import React from 'react';
import '../styles/Education.css'; // Assuming you have CSS styling here

const educationData = [
  {
    institution: "University of Calicut",
    degree: "Bachelor's in Computer Science",
    dates: "2022 - 2025",
    description: "Studied core subjects in computer science, participated in various tech events, and completed projects on Internet of Things(IoT) with mobile application."
  },
  {
    institution: "CHSS Chentrappinni",
    degree: "Computer Science",
    dates: "2020 - 2022",
    description: "Focused on foundational subjects with a strong emphasis on mathematics, science and programming."
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div className="education-item" key={index}>
            <h3 className="institution">{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="dates">{edu.dates}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
