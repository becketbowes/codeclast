import React from 'react';
import Theme from './theme';
import codeclastLogo from '../../assets/img/codeclastfulllogo.png';

function Header({ currentContent, handleContentChange }) {
    //sends change page content request to useState in App.js
    const onClick = (e) => {
        handleContentChange(e.target.id);
    };

    //logo, theme and nav bar
    return (
        <header>
            <nav>
                <h1>
                    <img src={codeclastLogo} className="logo" alt="CODECLAST"></img>
                </h1>
                <Theme />
                <div className="navbox" onClick={(e) => onClick(e)}>
                    <h2 href="#about" id='about' className={currentContent === 'about' ? 'current' : 'link'}>/about</h2>
                    <h2 href="#portfolio" id='portfolio' className={currentContent === 'portfolio' ? 'current' : 'link'}>/portfolio</h2>
                    <h2 href="#resume" id='resume' className={currentContent === 'resume' ? 'current' : 'link'}>/resume</h2>
                    <h2 href="#contact" id='contact' className={currentContent === 'contact' ? 'current' : 'link'}>/contact</h2>
                </div>
            </nav>
        </header>
    )
};

export default Header;