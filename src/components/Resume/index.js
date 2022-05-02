import React from 'react';

function Resume() {
    const pdf = "pdf -->"

    return (
        <article className='resumefield'>
            <h2 className='letterhead'>
                Becket Chambliss
            </h2>
            <div className="resumebody">
                <div>
                    <h3>Education:</h3>
                    BFA: Emily Carr Institute of Art and Design, 1999<br></br>
                    Summer Science, Cambridge University, UK, 2003<br></br>
                    MFA: Hunter College, 2006<br></br>
                    Full-Stack Bootcamp: Columbia University, 2022<br></br>
                </div>
                <div>
                    <h3>Experience:</h3>
                    Associate: Curt Marcus Gallery, 2001-2003<br></br>
                    Studio Manager: Rudolf Stingel Studio, 2006-present<br></br>
                </div>
                <div>
                    <h3>Skills:</h3>
                    <p>
                        Management skills<br></br>
                        Project oversight<br></br>
                        JavaScript<br></br>
                        HTML/CSS<br></br>
                        Photoshop<br></br>
                        Illustrator<br></br>
                        Rhino<br></br>
                        MERN stack (MongoDB, Express, React, Node)<br></br>
                        Object Oriented Programming<br></br>
                        Model/View/Controller<br></br>
                        SQL<br></br>
                        NoSQL<br></br>
                        Progressive Web App creation<br></br>
                    </p>
                    <h3>Currently Learning:</h3>
                    <p>
                        Swift/Apple Dev tools<br></br>
                        AWS platform integration<br></br>
                    </p>
                    <br></br>
                </div>
            </div>
            <button>{pdf}</button>
        </article>
    )
};

export default Resume;