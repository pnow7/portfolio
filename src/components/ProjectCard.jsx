import React, { useRef, useState } from "react";

const ProjectCard = ({ project, onDetailsClick }) => {

    const cardRef = useRef(null);
    
    // 카드의 3D 변환 스타일 (transform)
    const [style, setStyle] = useState({
        backgroundImage: project.cardColor,
    });
    
    // 오버레이의 빛 반사 스타일 (filter, backgroundPosition)
    const [overlayStyle, setOverlayStyle] = useState({ filter: 'opacity(0)' });

    // 마우스가 카드 위에서 움직일 때 호출
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        // 카드의 위치와 마우스 커서 위치 계산
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        
        // 틸트 회전 값 계산 
        const rotateY = (-1 / 12) * x + 10;
        const rotateX = (1 / 12) * y - 5;
        
        // 오버레이 스타일 계산
        const backgroundPosition = `${x / 5 + y / 5}%`;
        const opacity = Math.min(x / 200, 1); 
        
        // 카드 스타일 업데이트
        setStyle({
            transform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.1s',
            backgroundImage: project.cardColor,
        });
        
        // 오버레이 스타일 업데이트
        setOverlayStyle({
            backgroundPosition: backgroundPosition,
            filter: `opacity(${opacity}) brightness(1.2)`,
            transition: 'opacity 0.1s',
        });
    };

    // 마우스가 카드를 벗어날 때 호출
    const handleMouseOut = () => {
        // 원래 상태로 부드럽게 복구
        setStyle({
            transform: 'perspective(350px) rotateY(0deg) rotateX(0deg)',
            transition: 'transform 0.3s', 
            backgroundImage: project.cardColor,
        });
        setOverlayStyle({
            filter: 'opacity(0)',
            transition: 'opacity 0.3s',
        });
    };

    // 자세히 보기 기능을 전체 카드 클릭에 연결
    const handleCardClick = () => {
        if (onDetailsClick) {
            onDetailsClick(project);
        }
    }

    return (
        <div 
            className="project-card-container" 
            ref={cardRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseOut} 
            onClick={handleCardClick} 
            style={style}
        >
            {/* 오버레이 요소 (빛 반사) */}
            <div className="project-card-overlay" style={overlayStyle}></div>
            
            <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-badges">
                    {project.team && <span className="project-team-badge">{project.team}</span>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;