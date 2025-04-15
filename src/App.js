import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Highlight from './components/Highlight';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Education />
            <Highlight />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
