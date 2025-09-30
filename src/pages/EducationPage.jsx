import React from 'react';
import educationData from "../data/education";
import './EducationPage.css';

const EducationPage = ({ onlySection }) => {
    return (
        onlySection ? (
            <section className="education-section">
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    {educationData.map((item, index) => (
                        <div key={index} className="education-card" style={{ backgroundImage: item.color }}>
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
                        </div>
                    ))}
                </div>
            </section>
        ) : (
            <></>
        )
    );
};

export default EducationPage;