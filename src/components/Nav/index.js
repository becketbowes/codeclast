import React from 'react';
import Theme from './theme';
import codeclastLogo from '../../assets/img/codeclastfulllogo.png';

function Nav({ currentContent, handleContentChange }) {
    //sends change page content request to useState in App.js, colors active button 
    const onClick = (e) => {
        handleContentChange(e.target.className);
        Set.e.target.id("active");
    }

    //logo, theme and nav bar
    return (
        <header>
            <nav>
                <h1>
                    <img src={codeclastLogo} className="logo" alt="CODECLAST"></img>
                </h1>
                <Theme />
                <div className="navbox" onClick={(e) => onClick(e)}>
                    <h2 href="#about" className='about' id={currentContent === 'active' ? 'x' : 'about'}>/about</h2>
                    <h2 href="#portfolio" className='portfolio' id={currentContent === 'active' ? 'x' : 'portfolio'}>/portfolio</h2>
                    <h2 href="#resume" className='resume' id={currentContent === 'active' ? 'x' : 'resume'}>/resume</h2>
                    <h2 href="#contact" className='contact' id={currentContent === 'active' ? 'x' : 'contact'}>/contact</h2>
                </div>
            </nav>
        </header>
    )
};

export default Nav;