import React from 'react';
import codeclastLogo from '../../assets/img/codeclastfulllogo.png';

function Nav() {
    return (
        <header>
            <nav>
                <h1>
                    <img src={codeclastLogo} className="logo" alt="CODECLAST"></img>
                </h1>
                <div className="color">
                    <div className="red"></div>
                    <div className="orange"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                    <div className="blue"></div>
                    <div className="indigo"></div>
                    <div className="violet"></div>
                    <div className="black"></div>
                </div>
                <div className="navbox">
                    <h2 className="about">/about</h2>
                    <h2 className="portfolio">/portfolio</h2>
                    <h2 className="resume">/resume</h2>
                    <h2 className="contact">/contact</h2>
                </div>
            </nav>
        </header>
    )
};

export default Nav;