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
                    안녕하세요! 저는 배우는 단계에 있는 신입 개발자 <b>박현재</b>입니다.<br />
                    호기심이 많아 새로운 기술을 보면 직접 시도해보는 편이고,<br />
                    빠르게 변화하는 세상 속에서 다양한 도전을 통해 꾸준히 배우고 있습니다.
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