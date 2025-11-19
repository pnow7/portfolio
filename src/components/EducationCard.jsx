import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import "../styles/EducationCard.css";

const EducationCard = ({ item, index }) => {
    return (
        <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
            <div className="edu-timeline-dot"></div>
            <div className="edu-content">
                <div className="edu-header">
                    <span className="edu-type">{item.type}</span>
                    <span className="edu-period">{item.period}</span>
                </div>
                <h3 className="edu-title">{item.institution}</h3>
                <p className="edu-desc">{item.description}</p>
                {item.githubLink && (
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="edu-link">
                        <FaGithub /> GitHub
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default EducationCard;