import React from 'react';
import './Portfolio.css';
import { Projects } from './Projects';

function Portfolio() {
    return (
        <div id="portfolio" className="portfolio-container">
            <h1>Portfolio</h1>
            <p>This is my github page. <a href="https://github.com/tanphan1112" target="_blank" rel="noopener noreferrer">View GitHub</a></p>
            <div className="portfolio-grid">
                {Projects.map((project, index) => (
                    <div key={index} className="project">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.title} /></a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;