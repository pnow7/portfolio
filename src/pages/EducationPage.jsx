import React from 'react';
import { motion } from 'framer-motion';
import educationData from "../data/education";
import EducationCard from "../components/EducationCard";
import "../styles/EducationPage.css";

const EducationPage = () => {
    return (
        <div className="education-container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Education & Experience
            </motion.h2>
            <div className="education-grid">
                {educationData.map((item, index) => (
                    <EducationCard
                        key={index}
                        item={item}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default EducationPage;