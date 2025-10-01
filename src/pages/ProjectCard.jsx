import React from 'react';
// [추가] Framer Motion import
import { motion } from 'framer-motion'; 

// 카드를 motion.div로 감싸서 애니메이션 기능을 부여합니다.
const ProjectCard = ({ project, onDetailsClick, index }) => { 
    // project.cardColor를 배경 이미지로 사용합니다.
    const cardStyle = {
        backgroundImage: project.cardColor,
    };
    
    // [추가] 카드별 애니메이션 (순차적 등장)
    const cardVariants = {
        initial: { opacity: 0, y: 30 },
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
        // [수정] div 태그를 motion.div로 변경하고 애니메이션 속성 적용
        <motion.div 
            className="project-card" 
            style={cardStyle}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }} // 카드의 50%가 보일 때 애니메이션 실행
            custom={index} // ProjectsPage에서 전달받은 index를 custom prop으로 전달
        >
            {/* 카드 본문 (마우스 오버 시 가려짐) */}
            <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-badges">
                    {project.team && <span className="project-team-badge">{project.team}</span>}
                </div>
            </div>

            {/* 마우스 오버 시 나타나는 오버레이 */}
            <div className="card-overlay">
                <h3 className="overlay-title">{project.title}</h3>
                <button className="details-btn" onClick={() => onDetailsClick(project)}>
                    자세히 보기
                </button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;