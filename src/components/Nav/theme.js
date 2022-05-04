import React from 'react';

function Theme() {
    //changes the css class of the root html document to change ensuing css variables
    const onClick = (e) => {
        document.documentElement.className = `theme-${e.target.className}`;
    }

    //rainbow div display in nav
    return (
        <div className="color" onClick={(e) => onClick(e)}>
            <div className="red"></div>
            <div className="orange"></div>
            <div className="yellow"></div>
            <div className="green"></div>
            <div className="blue"></div>
            <div className="indigo"></div>
            <div className="violet"></div>
            <div className="grey"></div>
        </div>
    )
}

export default Theme;