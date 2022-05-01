import React from 'react';
import Avatar from '../../assets/img/avatar.jpg'

function About() {
    return (
        <article className='about-contain'>
            <img src={Avatar} className="avatar" alt="Hank Mamallian Snoopicus the Beagle, the codeclast mascot" />
            <div className='textbox'>
                <h3>This is HMS Beagle, our Mascot.</h3>
                Like us, Snoop is a pragmatic idealist who thinks that the world can change, but only if we are willing to do the work.<br></br><br></br>
                The advent of blockchain technologies and W3 ideas bring promises of new paradigms in tech, engineering, design and human interaction, but the quality of these new paradigms will depend dearly on the honesty and integrity of those of us who write the technologies at the outset. We intend to bring the sort of integrity and diligence that will inform a better a better world to come, and make the Beagle proud.<br></br><br></br>
            </div>
        </article>
    )
};

export default About;