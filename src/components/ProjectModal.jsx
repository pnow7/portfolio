import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaYoutube, FaGithub, FaTimes } from 'react-icons/fa';
import { DiDocker } from 'react-icons/di';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/ProjectModal.css';

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
                            <div dangerouslySetInnerHTML={{ __html: project.description }} />
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
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                                    <FaGithub /> GitHub
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