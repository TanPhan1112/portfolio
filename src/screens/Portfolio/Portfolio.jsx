import React from 'react';
import './Portfolio.css';
import { Projects } from './Projects';

function Portfolio() {
    return (
        <div id="portfolio" className="portfolio-container">
            <h1>Portfolio</h1>
            <p>This is my github page. <a href="https://github.com/tanphan1112" target="_blank" rel="noopener noreferrer">View GitHub</a></p>
            <div className="projects">
                {Projects.map((project, index) => (
                    <div key={index} className="project">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.title} />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
            <p>This is the portfolio page.</p>
        </div>
    );
}

export default Portfolio;