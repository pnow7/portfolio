import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project, onDetailsClick, index }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXVal = ((y - centerY) / centerY) * -10;
        const rotateYVal = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXVal);
        setRotateY(rotateYVal);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            className="project-card-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                ref={cardRef}
                className="project-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => onDetailsClick(project)}
                animate={{ rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <div className="card-glow" />
                <div className="card-content">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="card-tags">
                        {project.cardTechs?.slice(0, 3).map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;