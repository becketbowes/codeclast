import React from 'react';

function Theme() {
    const setTheme = (currentTheme) => {
        if (currentTheme === 'grey') {
            document.documentElement.className = 'theme-grey';
        }
        if (currentTheme === 'red') {
            document.documentElement.className = 'theme-red';
        }
        if (currentTheme === 'orange') {
            document.documentElement.className = 'theme-orange';
        }
        if (currentTheme === 'yellow') {
            document.documentElement.className = 'theme-yellow';
        }
        if (currentTheme === 'green') {
            document.documentElement.className = 'theme-green';
        }
        if (currentTheme === 'blue') {
            document.documentElement.className = 'theme-blue';
        }
        if (currentTheme === 'indigo') {
            document.documentElement.className = 'theme-indigo';
        }
        if (currentTheme === 'violet') {
            document.documentElement.className = 'theme-violet';
        }
    }

    return (
        <div className="color">
            <div onClick={() => setTheme('red')} className="red"></div>
            <div onClick={() => setTheme('orange')} className="orange"></div>
            <div onClick={() => setTheme('yellow')} className="yellow"></div>
            <div onClick={() => setTheme('green')} className="green"></div>
            <div onClick={() => setTheme('blue')} className="blue"></div>
            <div onClick={() => setTheme('indigo')} className="indigo"></div>
            <div onClick={() => setTheme('violet')} className="violet"></div>
            <div onClick={() => setTheme('grey')} className="black"></div>
        </div>
    )
}

export default Theme;