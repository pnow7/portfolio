// src/pages/AboutPage.jsx
import React from "react";
import { motion } from 'framer-motion'; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillList from "../components/SkillList"; // [수정] 새로 만든 컴포넌트 import
import { hashtags, frontendSkills, backendSkills } from "../data/skills"; // [수정] 데이터 파일에서 import
import profileImage from "../assets/profile.jpg";

// ... (containerVariants, itemVariants 정의는 그대로 유지)
// 컨테이너 애니메이션 설정 (자식 요소에게 staggerChildren을 전달)
const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
            duration: 0.8
        }
    }
};

// 개별 아이템 애니메이션 설정
const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutPage = ({ onlySection }) => {
    // 기존에 있던 skill 데이터 배열(frontendSkills, backendSkills)은 skills.js로 이동하여 삭제되었습니다.

    const aboutSectionContent = (
        <motion.div 
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
        >
            <motion.h2 className="section-title" variants={itemVariants}>About Me</motion.h2>
            <section className="about-section about-section-style">
                <motion.div className="about-content-wrapper" variants={itemVariants}>
                    <img
                        src={profileImage}
                        alt="3D Character"
                        className="about-profile-img"
                    />
                    <p className="about-desc">
                        안녕하세요! 저는 <b>신입 풀스택 개발자 박현재</b>입니다.<br />
                        사용자 경험과 효율적인 시스템 설계를 중요하게 생각하며,<br />
                        다양한 기술을 활용해 문제를 해결하는 것을 즐깁니다.
                    </p>
                    {/* 해시태그 목록 */}
                    <div className="hashtag-list about-hashtags">
                        {hashtags.map(tag => (
                            <motion.span key={tag} className="hashtag" variants={itemVariants}>{tag}</motion.span>
                        ))}
                    </div>
                    {/* GitHub 버튼 등 다른 UI 요소 */}
                    {/* ... (GitHub 버튼 JSX는 생략, 원본 파일 그대로 유지) ... */}
                </motion.div>

                {/* [수정] SkillList 컴포넌트를 사용하여 기술 스택 렌더링 */}
                <motion.div className="skills-area" variants={itemVariants}>
                    <h3>Skill &amp; Tools</h3>
                    <div className="skills-tools-grid">
                        <SkillList title="Frontend" skills={frontendSkills} itemVariants={itemVariants} />
                        <SkillList title="Backend" skills={backendSkills} itemVariants={itemVariants} />
                    </div>
                </motion.div>
            </section>
        </motion.div>
    );

    return onlySection ? (
        aboutSectionContent
    ) : (
        <>
            <Header />
            <main>
                {aboutSectionContent}
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;