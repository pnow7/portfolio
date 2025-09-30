import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    // Markdown을 HTML로 변환하는 함수
    const parseMarkdown = (markdown) => {
        let html = markdown;
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // 볼드체
        html = html.replace(/###\s(.*?)\n/g, '<h3>$1</h3>'); // h3 제목
        html = html.replace(/^- (.*)/gm, '<li>$1</li>'); // 리스트 항목
        html = html.replace(/\n\n/g, '</p><p>'); // 단락
        html = html.replace(/\n/g, '<br />'); // 줄바꿈
        return `<p>${html}</p>`;
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <h2>{project.title}</h2>
                <div className="modal-hashtags">
                    {project.team && <span className="modal-hashtag team-badge">{project.team}</span>}
                    {project.skills.map((skill, index) => (
                        <span key={index} className="modal-hashtag">{skill}</span>
                    ))}
                </div>
                <div className="modal-description" dangerouslySetInnerHTML={{ __html: parseMarkdown(project.description) }} />
                {project.github && (
                    <p className="modal-github"><a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">GitHub 저장소로 이동</a></p>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;