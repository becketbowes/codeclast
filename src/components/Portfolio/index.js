import React from 'react';
import projects from '../../utils/projectfiles';

function Portfolio(isBig) {
    return (
        <main className='aligncontain'>
            <div className='project-area'>
            {projects.map((project) => (
                <div className='project-contain' key={project.name}>
                    <a href={project.link} target='blank'>
                        <img id={project.name} src={project.image} className="project-icon" alt={project.name}></img>
                    </a>
                    <a href={project.link} target='blank'>
                    <article id={`${project.name}text`} className='projecttextbox'>
                        <h3>/{project.name}</h3>
                        {project.text}<br></br><br></br>
                        {!isBig.isBig && (<button a href={project.link}>{project.button}</button>)}
                    </article>
                    </a>
                </div>
            ))}
            </div>
        </main>
    )
};

export default Portfolio;