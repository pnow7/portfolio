import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projectsData from "../data/projects";

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

    return (
        onlySection ? (
            <div className="main-section">
                <section className="projects-section">
                    <h2 className="section-title">My Projects</h2>
                    <div className="projects-list">
                        {projectsData.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onDetailsClick={openModal}
                            />
                        ))}
                    </div>
                </section>
                {isModalOpen && (
                    <ProjectModal project={selectedProject} onClose={closeModal} />
                )}
            </div>
        ) : (
            <>
                <Header />
                <main className="main-section">
                    <section className="projects-section">
                        <h2 className="section-title">My Projects</h2>
                        <div className="projects-list">
                            {projectsData.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onDetailsClick={openModal}
                                />
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
                {isModalOpen && (
                    <ProjectModal project={selectedProject} onClose={closeModal} />
                )}
            </>
        )
    );
};

export default ProjectsPage;