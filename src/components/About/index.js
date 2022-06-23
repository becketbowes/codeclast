import React from 'react';
import AvatarSmall from '../../assets/img/avatarsmall.jpg'
import Avatar from '../../assets/img/avatar.jpg';

function About(isBig) {
    //isBig being a media query for image size to return
    console.log(isBig);

    return (
        <article className='article-contain'>
            {isBig.isBig && (<img src={Avatar} className="avatar" alt="Hank Mamallian Snoopicus the Beagle, the codeclast mascot" />)}
            {!isBig.isBig && (<img src={AvatarSmall} className="avatar" alt="Hank Mamallian Snoopicus the Beagle, the codeclast mascot" />)}
            <div className='textbox'>
                <h3>This is H.M.S. Beagle, our Mascot.</h3>
                Like us, Snoop is chaotic good.<br></br><br></br>
                He believes everything is made, and it's our duty to make it better. We agree.<br></br><br></br>
            </div>
        </article>
    )
};

export default About;