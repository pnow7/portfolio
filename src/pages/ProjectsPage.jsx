import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projectsData from "../data/projects";
import "../styles/ProjectsPage.css";

const ProjectsPage = ({ onlySection }) => {
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

    const sectionVariants = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
    };

    const sectionProps = {
        variants: sectionVariants,
        initial: "initial",
        whileInView: "whileInView",
        viewport: { once: false, amount: 0.3 },
        transition: { duration: 0.8, delay: 0.1 }
    };


    const sectionContent = (
        <motion.section 
            className="projects-section"
            {...sectionProps}
        >
            <h2 className="section-title">My Projects</h2>
            <div className="projects-list">
                {projectsData.map((project, index) => ( 
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onDetailsClick={openModal}
                        index={index} 
                    />
                ))}
            </div>
        </motion.section>
    );


    return (
        <>
            {sectionContent}
            {isModalOpen && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </>
    );
};

export default ProjectsPage;