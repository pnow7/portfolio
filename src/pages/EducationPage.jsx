// src/pages/EducationPage.jsx
import React from 'react';
import { motion } from 'framer-motion'; 
import educationData from "../data/education";
import EducationCard from "../components/EducationCard"; // [수정] 새로 만든 컴포넌트 import
import './EducationPage.css';

// ... (sectionVariants, sectionProps 정의는 그대로 유지)
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
    // 기존 cardVariants 로직은 EducationCard.jsx로 이동했으므로 삭제

    return (
        onlySection ? (
            <motion.section 
                className="education-section" 
                {...sectionProps}
            >
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    {/* [수정] EducationCard 컴포넌트를 사용하여 반복되는 로직을 대체 */}
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
            // Header와 Footer를 감싸는 전체 페이지 뷰 로직은 필요하다면 여기서 구현
            <></>
        )
    );
};

export default EducationPage;