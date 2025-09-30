import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal"; // ProjectModal import
import projectsData from "../data/projects"; // 프로젝트 데이터

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
                                onCardClick={openModal}
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
                                    onCardClick={openModal}
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