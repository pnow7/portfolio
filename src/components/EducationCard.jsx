// src/components/EducationCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

// 개별 카드 애니메이션 Variants (순차적인 등장 효과)
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

// EducationPage.jsx에서 map으로 넘겨받는 하나의 education 객체를 prop으로 받습니다.
const EducationCard = ({ item, index }) => {
    // education.js의 color 속성을 배경으로 사용합니다.
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
            viewport={{ once: false, amount: 0.5 }} // 카드의 50%가 보일 때 애니메이션 실행
            custom={index} // 순차적 애니메이션을 위한 index 전달
        >
            <div className="card-content">
                <span className="edu-type-badge">{item.type}</span>
                <div className="edu-title-wrapper">
                    <h3 className="edu-title">{item.institution}</h3>
                    {item.githubLink && (
                        <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="github-icon-link" aria-label="교육 관련 GitHub 저장소">
                            {/* GitHub 아이콘 SVG 대신 간결한 이미지 사용 */}
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