import React from 'react';

const ProjectCard = ({ project, onCardClick }) => {
    return (
        <div className="project-card" onClick={() => onCardClick(project)}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <div className="project-badges">
                {project.team && <span className="project-team-badge">{project.team}</span>}
            </div>
        </div>
    );
};

export default ProjectCard;