import React from 'react';
import pdf from '../../assets/pdf/BecketChamblissResume.pdf';

function Resume() {
    const pdfBtn = "pdf -->";

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
                    <h3>General Skills:</h3>
                    <p>
                        Management theory and experience<br></br>
                        Project oversight and job completion expertise<br></br>
                    </p>
                    <h3>Programming Structures:</h3>
                    <p>
                        Object Oriented Programing<br></br>
                        Function Oriented Programming<br></br>
                        Object Relational Mapping<br></br>
                        Model-View-Controller<br></br>
                        Progressive Web App creation<br></br>
                    </p>
                    <h3>Stack: MERN (MongoDB, Express.js, React, Node.js)</h3>
                    <h3>Front End:</h3>
                    <p>
                        React / JavaScript<br></br>
                        HTML / CSS / Webpack and service workers<br></br>
                        Graphics programs (Photoshop, Illustrator, Rhino, AutoCAD)<br></br>
                    </p>
                    <h3>Server Side:</h3>
                    <p>
                        Express, Node.js<br></br>
                        SQL (Sequelize, NodeJS)<br></br>
                        NoSQL (Mongo, Atlas, Mongoose, Apollo, GraphQL)<br></br>
                    </p>
                    <h3>Currently Learning:</h3>
                    <p>
                        Blockchain Integration and Contracts<br></br>
                        Swift/Apple Dev tools<br></br>
                        AWS platform integration<br></br>
                    </p>
                    <br></br>
                </div>
            </div>
            <a href={pdf} download>
            <button>{pdfBtn}</button>
            </a>
        </article>
    )
};

export default Resume;