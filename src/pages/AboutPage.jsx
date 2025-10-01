import React from "react";
// [추가] Framer Motion import
import { motion } from 'framer-motion'; 
import Header from "../components/Header";
import profileImage from "../assets/profile.jpg";
import Footer from "../components/Footer";

const hashtags = [
    "#성장지향", "#문제해결", "#책임감", "#협업", "#꾸준함", "#긍정적", "#도전", "#유연함"
];

const frontendSkills = [
    { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
    { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "JSP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
];

const backendSkills = [
    { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Spring", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
    { name: "Oracle", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" },
    { name: "SQL Developer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" },
];

// 컨테이너 애니메이션 설정 (자식 요소에게 staggerChildren을 전달)
const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15, // 0.15초 간격으로 자식 요소 순차 등장
            duration: 0.8
        }
    }
};

// 개별 아이템 애니메이션 설정
const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutPage = ({ onlySection }) => (
    onlySection ? (
        // [수정] 최상위 div에 motion.div 및 containerVariants 적용
        <motion.div 
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }} // 뷰포트 진입 시 애니메이션 실행
        >
            {/* [수정] h2 태그에 itemVariants 적용하여 순차 등장에 포함 */}
            <motion.h2 className="section-title" variants={itemVariants}>About Me</motion.h2>
            <section className="about-section about-section-style">
                {/* [수정] about-content-wrapper에 itemVariants 적용 */}
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
                    <div className="hashtag-list about-hashtags">
                        {/* [수정] hashtag span에도 itemVariants를 적용하여 깊은 순차 등장 효과 */}
                        {hashtags.map(tag => (
                            <motion.span key={tag} className="hashtag" variants={itemVariants}>{tag}</motion.span>
                        ))}
                    </div>
                    <a
                        href="https://github.com/pnow7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn about-github-btn"
                        aria-label="GitHub 프로필 페이지로 이동"
                    >
                        <svg width="20" height="20" fill="currentColor" style={{ verticalAlign: "middle", marginRight: 6 }} viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                        GitHub
                    </a>
                </motion.div>
                {/* [수정] skills-tools-area에 itemVariants 적용 */}
                <motion.div className="skills-tools-area" variants={itemVariants}>
                    <h3>Skill &amp; Tools</h3>
                    <div className="skills-tools-grid">
                        <div className="skills-col">
                            <h4>Frontend</h4>
                            {/* NOTE: Skill 아이콘 리스트는 한 번에 등장하도록 유지 */}
                            <ul className="skills-list">
                                {frontendSkills.map(skill => (
                                    <li key={skill.name}>
                                        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="skills-col">
                            <h4>Backend</h4>
                            <ul className="skills-list">
                                {backendSkills.map(skill => (
                                    <li key={skill.name}>
                                        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    ) : (
        <>
            <Header />
            <main>
                {/* [수정] 전체 section에 motion.section 및 containerVariants 적용 */}
                <motion.section 
                    className="about-section about-section-style"
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* [수정] about-content-wrapper에 itemVariants 적용 */}
                    <motion.div className="about-content-wrapper" variants={itemVariants}>
                        <img
                            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                            alt="현재 사진"
                            className="about-profile-img"
                        />
                        <h2 className="about-title">About Me</h2>
                        <p className="about-desc">
                            안녕하세요! 저는 <b>풀스택 개발자 Pnow7</b>입니다.<br />
                            사용자 경험과 효율적인 시스템 설계를 중요하게 생각하며,<br />
                            다양한 기술을 활용해 문제를 해결하는 것을 즐깁니다.
                        </p>
                        <div className="hashtag-list about-hashtags">
                            {hashtags.map(tag => (
                                <motion.span key={tag} className="hashtag" variants={itemVariants}>{tag}</motion.span>
                            ))}
                        </div>
                        <a
                            href="https://github.com/pnow7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-btn about-github-btn"
                            aria-label="GitHub 프로필 페이지로 이동"
                        >
                            <svg width="20" height="20" fill="currentColor" style={{ verticalAlign: "middle", marginRight: 6 }} viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                            GitHub
                        </a>
                    </motion.div>
                    {/* [수정] skills-tools-area에 itemVariants 적용 */}
                    <motion.div className="skills-tools-area" variants={itemVariants}>
                        <h3>Skill &amp; Tools</h3>
                        <div className="skills-tools-grid">
                            <div className="skills-col">
                                <h4>Frontend</h4>
                                <ul className="skills-list">
                                    {frontendSkills.map(skill => (
                                        <li key={skill.name}>
                                            <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="skills-col">
                                <h4>Backend</h4>
                                <ul className="skills-list">
                                    {backendSkills.map(skill => (
                                        <li key={skill.name}>
                                            <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>
            </main>
            <Footer />
        </>
    )
);

export default AboutPage;