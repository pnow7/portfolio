import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projectsData from "../data/projects";
import "../styles/ProjectsPage.css";

const ProjectsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="projects-container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                My Projects
            </motion.h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onDetailsClick={openModal}
                        index={index}
                    />
                ))}
            </div>

            {isModalOpen && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </div>
    );
};

export default ProjectsPage;