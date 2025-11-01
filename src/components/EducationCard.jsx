import React from 'react';
import { motion } from 'framer-motion';
import "../styles/EducationCard.css";

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
        }
    })
};

const EducationCard = ({ item, index }) => {
    const cardStyle = {
        backgroundImage: item.color,
    };

    return (
        <motion.div
            className="education-card"
            style={cardStyle}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            custom={index}
        >
            <div className="card-content">
                <span className="edu-type-badge">{item.type}</span>
                <div className="edu-title-wrapper">
                    <h3 className="edu-title">{item.institution}</h3>
                    {item.githubLink && (
                        <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="github-icon-link" aria-label="교육 관련 GitHub 저장소">
                            <img
                                src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
                                alt="GitHub"
                                className="github-icon"
                            />
                        </a>
                    )}
                </div>
                <p className="edu-period">{item.period}</p>
                <p className="edu-description">{item.description}</p>
            </div>
        </motion.div>
    );
};

export default EducationCard;