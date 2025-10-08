import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const parseMarkdown = (markdown) => {
        let html = markdown;
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/###\s(.*?)\n/g, '<h3>$1</h3>');
        html = html.replace(/^- (.*)/gm, '<li>$1</li>');
        html = html.replace(/\n\n/g, '</p><p>');
        html = html.replace(/\n/g, '<br />');
        return `<p>${html}</p>`;
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                
                <div className="modal-header" style={{ backgroundImage: project.gradientColors }}>
                    {project.team && <div className="team-badge-header">{project.team}</div>}
                    <h2>{project.title}</h2>
                </div>

                <div className="modal-body">
                    <div className="modal-description" dangerouslySetInnerHTML={{ __html: parseMarkdown(project.description) }} />

                    <div className="skills-section">
                        <h3>기술 스택</h3>
                        <div className="skills-list-container">
                            {project.skills.frontend && (
                                <div className="skill-group">
                                    <h4>프론트엔드</h4>
                                    <div className="skills-list">
                                        {project.skills.frontend.map((skill, index) => (
                                            <span key={index} className="skill-item frontend">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.skills.backend && (
                                <div className="skill-group">
                                    <h4>백엔드</h4>
                                    <div className="skills-list">
                                        {project.skills.backend.map((skill, index) => (
                                            <span key={index} className="skill-item backend">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.skills.tools && (
                                <div className="skill-group">
                                    <h4>기타 / 툴</h4>
                                    <div className="skills-list">
                                        {project.skills.tools.map((skill, index) => (
                                            <span key={index} className="skill-item tools">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {project.github && (
                    <p className="modal-github">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">GitHub 저장소로 이동</a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;