import React, { useState } from 'react';
// [추가] Framer Motion import
import { motion } from 'framer-motion'; 
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

    // [추가] Framer Motion 애니메이션 속성 정의
    const sectionVariants = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
    };

    const sectionProps = {
        variants: sectionVariants,
        initial: "initial",
        whileInView: "whileInView",
        viewport: { once: false, amount: 0.3 }, // 섹션의 30%가 보일 때 애니메이션 한 번 실행
        transition: { duration: 0.8, delay: 0.1 }
    };


    const sectionContent = (
        // [수정] section 태그를 motion.section으로 변경하고 애니메이션 속성 적용
        <motion.section 
            className="projects-section"
            {...sectionProps}
        >
            <h2 className="section-title">My Projects</h2>
            <div className="projects-list">
                {projectsData.map((project, index) => ( // [수정] index 추가
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onDetailsClick={openModal}
                        index={index} // [추가] index prop 전달
                    />
                ))}
            </div>
        </motion.section>
    );


    return (
        onlySection ? (
            <div>
                {sectionContent}
                {isModalOpen && (
                    <ProjectModal project={selectedProject} onClose={closeModal} />
                )}
            </div>
        ) : (
            <>
                <Header />
                <main>
                    {sectionContent} {/* sectionContent 변수 사용 */}
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