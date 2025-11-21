import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/WhyDeveloperSection.css';

const storyText = `제 전공은 코딩, 전자, 회로, 통신 등을 배우는 전자정보통신공학과 였습니다.
하지만 전자, 회로, 통신 분야는 어렵고 흥미를 느끼지 못한탓에 저와 맞지 않다고 생각했습니다.
졸업 후, 전공 과목 중 가장 재미있었던 것이 무엇인지 고민해보니 코딩이 유일했습니다.

정보처리기사와 통신기사 시험을 준비하면서 그 차이를 더 확실히 느꼈습니다.
통신 관련 내용은 너무 어렵고 맞지 않았지만, 정보처리기사 공부는 흥미로웠고 자격증도 취득할 수 있었습니다.
이 경험을 통해 소프트웨어 개발이 제가 진정으로 즐길 수 있는 분야라는 확신을 얻었습니다.

이후 국비지원 부트캠프에 참여하여 프로젝트를 수행하며 개발자가 제 길임을 더욱 확신하게 되었습니다.
저는 다양한 기술을 활용해 사용자에게 편리하고 도움이 되며, 흥미로운 기능을 만드는 개발자가 되고 싶습니다.

무엇보다 저는 코딩하는 과정 자체를 즐깁니다.
제가 꾸준히 배울 수 있는 원동력은 이 길에 대한 확신과, 코드로 무언가를 만들어내는 즐거움 덕분입니다.`;

const WhyDeveloperSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen && currentIndex < storyText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + storyText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 30); // Typing speed

            return () => clearTimeout(timeout);
        }
    }, [isOpen, currentIndex]);

    const handleBookClick = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    return (
        <div className="why-developer-section">
            <div
                className={`book-container ${isOpen ? 'open' : ''}`}
                onClick={handleBookClick}
            >
                <div className="book-cover">
                    <div className="book-spine"></div>
                    <span className="question-mark">?</span>
                    {!isOpen && <span className="instruction-text">Click to open</span>}
                </div>

                <div className="book-content">
                    <div className="story-text">
                        {displayedText}
                        {isOpen && currentIndex < storyText.length && <span className="cursor"></span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyDeveloperSection;
