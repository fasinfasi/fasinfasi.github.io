import React from 'react';
import '../styles/Header.css';
import logo from '../assets/my_logo.png';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <ul className="nav-links">
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
