import React, { useRef, useState } from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project, onDetailsClick }) => {

    const cardRef = useRef(null);
    
    const [style, setStyle] = useState({
        backgroundImage: project.cardColor,
    });
    
    const [overlayStyle, setOverlayStyle] = useState({ filter: 'opacity(0)' });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        
        const rotateY = (-1 / 12) * x + 10;
        const rotateX = (1 / 12) * y - 5;
        
        const backgroundPosition = `${x / 5 + y / 5}%`;
        const opacity = Math.min(x / 200, 1); 
        
        setStyle({
            transform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.1s',
            backgroundImage: project.cardColor,
        });
        
        setOverlayStyle({
            backgroundPosition: backgroundPosition,
            filter: `opacity(${opacity}) brightness(1.2)`,
            transition: 'opacity 0.1s',
        });
    };

    const handleMouseOut = () => {
        setStyle({
            transform: 'perspective(350px) rotateY(0deg) rotateX(0deg)',
            transition: 'transform 0.3s', 
            backgroundImage: project.cardColor,
        });
        setOverlayStyle({
            filter: 'opacity(0)',
            transition: 'opacity 0.3s',
        });
    };

    const handleCardClick = () => {
        if (onDetailsClick) {
            onDetailsClick(project);
        }
    }

    return (
        <div 
            className="project-card-container" 
            ref={cardRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseOut} 
            onClick={handleCardClick} 
            style={style}
        >
            <div className="project-card-overlay" style={overlayStyle}></div>
            
            <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-badges">
                    {project.team && <span className="project-team-badge">{project.team}</span>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;