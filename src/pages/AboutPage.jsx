import React from "react";
import { motion } from 'framer-motion';
import SkillList from "../components/SkillList";
import { hashtags, frontendSkills, backendSkills } from "../data/skills";
import profileImage from "../assets/profile.jpg";
import "../styles/AboutPage.css";

const AboutPage = () => {
    return (
        <div className="about-container">
            <motion.div
                className="profile-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="profile-img-wrapper">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="about-profile-img"
                    />
                    <div className="profile-glow"></div>
                </div>
                <h2 className="section-title">About Me</h2>
                <p className="about-desc">
                    Hello! I'm <b>Hyunjae Park</b>, a Full Stack Developer.<br />
                    I focus on creating immersive user experiences and efficient systems.
                </p>

                <div className="hashtag-list">
                    {hashtags.map((tag, index) => (
                        <motion.span
                            key={tag}
                            className="hashtag"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="skills-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <h3>Skills & Tools</h3>
                <div className="skills-grid">
                    <SkillList title="Frontend" skills={frontendSkills} />
                    <SkillList title="Backend" skills={backendSkills} />
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;