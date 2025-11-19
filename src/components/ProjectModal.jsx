import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaYoutube, FaGithub, FaTimes, FaFileAlt } from 'react-icons/fa';
import { DiDocker } from 'react-icons/di';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/ProjectModal.css';

// 마크다운 문법을 제거하고 HTML을 반환하는 헬퍼 함수
// (외부 라이브러리 없이 기본적인 변환만 수행합니다.)
const cleanMarkdown = (markdownText) => {
    if (!markdownText) return null;

    // 1. 헤더 (###, ##, #) 제거
    let htmlContent = markdownText.replace(/#{1,3}\s/g, '');

    // 2. 볼드체/이탤릭체 (**text**, *text*) 제거 (텍스트만 남김)
    htmlContent = htmlContent.replace(/(\*\*|__)(.*?)\1/g, '$2');
    htmlContent = htmlContent.replace(/(\*|_)(.*?)\1/g, '$2');

    // 3. 리스트 항목 (* or - ) 제거
    htmlContent = htmlContent.replace(/[\*\-]\s/g, '');

    // 4. 수평선 (---) 제거
    htmlContent = htmlContent.replace(/^-{3,}$/gm, '');

    // 5. Trim()으로 제거된 줄바꿈을 <p> 태그와 <br>로 변환
    const paragraphs = htmlContent.split('\n').filter(p => p.trim() !== '');

    return paragraphs.map((text, index) => {
        // 콜론(:)이나 .을 포함하는 경우 문단으로 처리
        if (text.includes(':') || text.includes('.')) {
            // 들여쓰기된 줄은 제외
            if (text.trim().startsWith('-') || text.trim().startsWith('*')) {
                return <p key={index} className="list-item-clean">{text.trim()}</p>;
            }
            return <p key={index}>{text}</p>;
        }
        // 그 외 짧거나 중요한 구문은 <br> 처리하여 자연스러운 흐름 유지
        return <React.Fragment key={index}>{text}<br /></React.Fragment>;
    });
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-container"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={e => e.stopPropagation()}
                >
                    <button className="modal-close" onClick={onClose}>
                        <FaTimes />
                    </button>

                    <div className="modal-header">
                        <h2>{project.title}</h2>
                        <div className="modal-meta">
                            {project.team && <span className="badge team">{project.team}</span>}
                            {project.duration && <span className="badge duration">{project.duration}</span>}
                        </div>
                    </div>

                    <div className="modal-content-scroll">
                        {project.images && project.images.length > 0 && (
                            <div className="modal-gallery">
                                <Swiper
                                    modules={[Navigation, Pagination, A11y]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    className="project-swiper"
                                >
                                    {project.images.map((imageName, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="slide-wrapper">
                                                <img
                                                    src={`/${project.imageFolder}/${imageName}`}
                                                    alt={`Screenshot ${index + 1}`}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}

                        <div className="modal-description">
                            {/* dangerouslySetInnerHTML 대신 cleanMarkdown 함수 사용 */}
                            {cleanMarkdown(project.description)}
                        </div>

                        <div className="modal-skills">
                            <h3>Tech Stack</h3>
                            <div className="tech-groups">
                                {Object.entries(project.skills).map(([category, skills]) => (
                                    skills && (
                                        <div key={category} className="tech-group">
                                            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                                            <div className="tech-list">
                                                {skills.map((skill, i) => (
                                                    <span key={i} className="tech-pill">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>

                        <div className="modal-links">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
                                    <FaGithub /> GitHub
                                </a>
                            )}
                            {project.dockerGithub && (
                                <a href={project.dockerGithub} target="_blank" rel="noopener noreferrer" className="link-btn docker">
                                    <DiDocker /> Docker GitHub
                                </a>
                            )}
                            {project.pdf && (
                                <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="link-btn document">
                                    <FaFileAlt /> PDF 포트폴리오 보기
                                </a>
                            )}
                            {project.youtube && (
                                <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="link-btn youtube">
                                    <FaYoutube /> Demo
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;