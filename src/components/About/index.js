import React from 'react';
import AvatarSmall from '../../assets/img/avatarsmall.jpg'
import Avatar from '../../assets/img/avatar.jpg';

function About(isBig) {
    //isBig being a media query for image size to return

    return (
        <article className='article-contain'>
            {isBig && (<img src={Avatar} className="avatar" alt="Hank Mamallian Snoopicus the Beagle, the codeclast mascot" />)}
            {!isBig && (<img src={AvatarSmall} className="avatar" alt="Hank Mamallian Snoopicus the Beagle, the codeclast mascot" />)}
            <div className='textbox'>
                <h3>This is H.M.Snoopicus Beagle, our Mascot.</h3>
                Like us, Snoop is a pragmatic idealist who thinks that the world can change, but only if we are willing to do the work.<br></br><br></br>
                The advent of blockchain technologies and W3 ideas bring promises of new paradigms in tech, engineering, design and human interaction, but the quality of these new paradigms will depend dearly on the honesty and integrity of those of us who write the technologies at the outset. We intend to bring the sincerity and grit that will inform the world we live in tomorrow.<br></br><br></br>
            </div>
        </article>
    )
};

export default About;