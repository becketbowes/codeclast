import React from 'react';
import Github from './Github';
import LinkedIn from './Linkedin';
import Signature from './Signature';

function Footer() {
    return (
        <footer>
            <div className="footerlinks">
                <Github></Github>
                <LinkedIn></LinkedIn>
            </div>
            <div>
                <Signature></Signature>
            </div>
        </footer>
    )
};

export default Footer;