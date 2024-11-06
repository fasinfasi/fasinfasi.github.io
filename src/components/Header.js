import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/my_logo.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" /> {/* Logo image */}
                <button className="menu-icon" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
