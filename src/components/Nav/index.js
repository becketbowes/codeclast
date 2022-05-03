import React from 'react';
import Theme from './theme';
import codeclastLogo from '../../assets/img/codeclastfulllogo.png';

function Nav({ currentContent, handleContentChange }) {
    


    return (
        <header>
            <nav>
                <h1>
                    <img src={codeclastLogo} className="logo" alt="CODECLAST"></img>
                </h1>
                <Theme />
                <div className="navbox">
                    <h2 href="#about" onClick={() => handleContentChange('about')} className={currentContent === 'about' ? 'about active' : 'current'}>/about</h2>
                    <h2 href="#portfolio" onClick={() => handleContentChange('portfolio')} className={currentContent === 'portfolio' ? 'portfolio active' : 'current'}>/portfolio</h2>
                    <h2 href="#resume" onClick={() => handleContentChange('resume')} className={currentContent === 'resume' ? 'resume active' : 'current'}>/resume</h2>
                    <h2 href="#contact" onClick={() => handleContentChange('contact')} className={currentContent === 'contact' ? 'contact active' : 'current'}>/contact</h2>
                </div>
            </nav>
        </header>
    )
};

export default Nav;