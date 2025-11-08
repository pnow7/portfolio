import React from 'react';
import '../styles/ProjectModal.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const parseMarkdown = (markdown) => {
        let html = markdown.trim();

        html = html.replace(/###\s(.*?)\n/g, '<h3>$1</h3>');
        html = html.replace(/^- (.*)/gm, '<li>$1</li>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        const lines = html.split('\n');
        let processedHtml = '';
        let paragraph = '';

        lines.forEach(line => {
            line = line.trim();
            if (line.startsWith('<h3>') || line.startsWith('<li>') || line.startsWith('<strong>')) {
                if (paragraph) {
                    processedHtml += `<p>${paragraph}</p>`;
                    paragraph = '';
                }
                processedHtml += line;
            } else if (line === '') {
                if (paragraph) {
                    processedHtml += `<p>${paragraph}</p>`;
                    paragraph = '';
                }
            } else {
                if (paragraph) {
                    paragraph += ' ' + line;
                } else {
                    paragraph = line;
                }
            }
        });

        if (paragraph) {
            processedHtml += `<p>${paragraph}</p>`;
        }

        return processedHtml;
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>

                <div className="modal-header" style={{ backgroundImage: project.gradientColors }}>
                    {project.team && <div className="team-badge-header">{project.team}</div>}
                    <h2>{project.title}</h2>
                    {project.duration && <div className="modal-duration">🗓️ {project.duration}</div>}
                </div>

                <div className="modal-body">
                    {project.images && project.images.length > 0 && (
                        <div className="image-gallery-section">
                            <h3>아키텍처 및 화면설계</h3>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                // autoHeight={true}
                                className="project-swiper"
                            >
                                {project.images.map((imageName, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiper-image-wrapper">
                                            <img
                                                src={`/${project.imageFolder}/${imageName}`}
                                                alt={`Project Screenshot ${index + 1}`}
                                                className="project-image"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}


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
                {project.id === 1 && (
                    <p className="modal-github">
                        <a 
                            href="/ai2th/AI포트폴리오_박현재.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="modal-link modal-pdf-link"
                        >
                            포트폴리오 PDF 새 탭에서 보기
                        </a>
                    </p>
                )}
                {project.id === 2 && (
                    <p className="modal-github">
                        <a 
                            href="/full3th/3차포트폴리오_박현재.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="modal-link modal-pdf-link"
                        >
                            포트폴리오 PDF 새 탭에서 보기
                        </a>
                    </p>
                )}
                {project.id === 3 && (
                    <p className="modal-github">
                        <a 
                            href="/full2th/2차포트폴리오_박현재.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="modal-link modal-pdf-link"
                        >
                            포트폴리오 PDF 새 탭에서 보기
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;