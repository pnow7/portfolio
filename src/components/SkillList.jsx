import React from 'react';
import { motion } from 'framer-motion';
import "../styles/SkillList.css";

const SkillList = ({ title, skills, itemVariants }) => (
    <div className="skills-col">
        <h4>{title}</h4>
        <motion.ul className="skills-list">
            {skills.map(skill => (
                <motion.li key={skill.name} variants={itemVariants}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                </motion.li>
            ))}
        </motion.ul>
    </div>
);

export default SkillList;