import React from 'react';
// [추가] Framer Motion import
import { motion } from 'framer-motion'; 
import educationData from "../data/education";
import './EducationPage.css';

const EducationPage = ({ onlySection }) => {
    // [추가] Framer Motion 애니메이션 속성 정의
    const sectionVariants = {
        initial: { opacity: 0, y: 50 }, // 초기 상태: 투명하고 50px 아래에 위치
        whileInView: { opacity: 1, y: 0 }, // 뷰포트 진입 시: 불투명하고 원래 위치로 이동
    };

    const sectionProps = {
        variants: sectionVariants,
        initial: "initial",
        whileInView: "whileInView",
        viewport: { once: false, amount: 0.3 }, // 섹션의 30%가 보일 때 애니메이션 한 번 실행
        transition: { duration: 0.8, delay: 0.1 } // 0.8초 동안 부드럽게 애니메이션
    };

    // [추가] 카드별 애니메이션 지연을 위한 Variants (순차적인 등장 효과)
    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // index에 따라 0.1초씩 지연
                duration: 0.6,
            }
        })
    };

    return (
        onlySection ? (
            // [수정] section 태그를 motion.section으로 변경하고 애니메이션 속성 적용
            <motion.section 
                className="education-section"
                {...sectionProps} // 전체 섹션 등장 애니메이션
            >
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    {educationData.map((item, index) => (
                        // [수정] education-card에 motion.div 및 카드 애니메이션 적용
                        <motion.div 
                            key={index} 
                            className="education-card" 
                            style={{ backgroundImage: item.color }}
                            variants={cardVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: false, amount: 0.5 }}
                            custom={index} // index를 custom prop으로 전달
                        >
                            <div className="card-content">
                                <span className="edu-type-badge">{item.type}</span>
                                <div className="edu-title-wrapper"> {/* 제목과 아이콘을 감싸는 div 추가 */}
                                    <h3 className="edu-title">{item.institution}</h3>
                                    {item.githubLink && (
                                        <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="github-icon-link">
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
                    ))}
                </div>
            </motion.section>
        ) : (
            <></>
        )
    );
};

export default EducationPage;