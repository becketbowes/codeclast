import React from 'react';
import ideaforaIcon from '../../assets/img/ideaforaIcon.png';
import binaryliteralIcon from '../../assets/img/binaryliteralIcon.png';
import quizzlestickIcon from '../../assets/img/quizzlestickIcon.png';
import weathervainIcon from '../../assets/img/weathervainIcon.png';
import elevenhourclockIcon from '../../assets/img/elevenhourclockIcon.png';
import passwordIcon from '../../assets/img/passwordIcon.png'

function Portfolio() {
    return (
        <main>
            <div id="ideafora" className='article-contain'>
                <img src={ideaforaIcon} className="project-icon" alt="ideafora website icon"></img>
                <article className='textbox'>
                    <h3>/ideafora</h3>
                </article>
            </div>
            <div id="binaryliteral" className='article-contain'>
                <img src={binaryliteralIcon} className="project-icon" alt="binaryLiteral website icon"></img>
                <article className='textbox'>
                    <h3>/binaryliteral</h3>    
                </article>
            </div>
            <div id="quizzlestick" className='article-contain'>
                <img src={quizzlestickIcon} className="project-icon" alt="quizzlestick website icon"></img>
                <article className='textbox'>
                    <h3>/quizzlestick</h3>
                </article>
            </div>
            <div id="weathervain" className='article-contain'>
                <img src={weathervainIcon} className="project-icon" alt="weatherVain website icon"></img>
                <article className='textbox'>
                    <h3>/weathervain</h3>
                </article>
            </div>
            <div id="elevenhourclock" className='article-contain'>
                <img src={elevenhourclockIcon} className="project-icon" alt="eleven hour clock icon"></img>
                <article className='textbox'>
                    <h3>/elevenHourClock</h3>
                </article>
            </div>
            <div id="passwordgenerator" className='article-contain'>
                <img src={passwordIcon} className="project-icon" alt="password generator website icon"></img>
                <article className='textbox'>
                    <h3>/passwordGenerator</h3>
                </article>
            </div>
        </main>
    )
};

export default Portfolio;