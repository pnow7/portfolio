import React from 'react';
import { motion } from 'framer-motion'; 
import educationData from "../data/education";
import EducationCard from "../components/EducationCard"; 
import "../styles/EducationPage.css";

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

const EducationPage = ({ onlySection }) => {
    return (
        onlySection ? (
            <motion.section 
                className="education-section" 
                {...sectionProps}
            >
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    {educationData.map((item, index) => (
                        <EducationCard 
                            key={index} 
                            item={item} 
                            index={index} 
                        />
                    ))}
                </div>
            </motion.section>
        ) : (
            <></>
        )
    );
};

export default EducationPage;