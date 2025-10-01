import React from 'react';

const ProjectCard = ({ project, onDetailsClick }) => {
    // cardColor를 사용하여 카드 배경에 적용
    const cardStyle = {
        backgroundImage: project.cardColor,
    };
    
    return (
        <div className="project-card" style={cardStyle}> 
            {/* 카드 본문 (마우스 오버 시 가려짐) */}
            <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-badges">
                    {project.team && <span className="project-team-badge">{project.team}</span>}
                </div>
            </div>

            {/* 마우스 오버 시 나타나는 오버레이 */}
            <div className="card-overlay">
                <h3 className="overlay-title">{project.title}</h3>
                <button className="details-btn" onClick={() => onDetailsClick(project)}>
                    자세히 보기
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;