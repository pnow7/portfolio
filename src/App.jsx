import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./pages/AboutPage";
import ProjectsSection from "./pages/ProjectsPage";
import EducationSection from "./pages/EducationPage";

function App() {
    const [copyMessage, setCopyMessage] = useState(null);
    const EMAIL_ADDRESS = "phyunjae7333@gmail.com"; // 이메일 주소를 변수로 정의

    // [추가] 이메일 주소 복사 핸들러 함수
    const handleCopyEmail = (e) => {
        // 1. <a> 태그의 기본 동작 (메일 클라이언트 열기) 방지
        e.preventDefault(); 
        
        // 2. 클립보드에 텍스트 복사
        navigator.clipboard.writeText(EMAIL_ADDRESS)
            .then(() => {
                // 3. 복사 성공 알림 메시지 설정
                setCopyMessage("이메일 주소가 복사되었습니다!");
                
                // 4. 2초 후 메시지 제거
                setTimeout(() => {
                    setCopyMessage(null);
                }, 2000);
            })
            .catch(err => {
                // 복사 실패 시
                console.error('클립보드 복사 실패:', err);
                setCopyMessage("복사 실패 (콘솔 확인)");
                setTimeout(() => {
                    setCopyMessage(null);
                }, 2000);
            });
    };

  return (
    <>
      <Header />
      <main>
        <section id="hero" className="hero-section">
          {/* [추가] 블랙홀 배경 요소 */}
          <div className="blackhole-bg"></div> 
          {/*=========================*/}
          <div className="hero-flex">
            <div className="hero-stack">
              <span className="hero-animated-movie">Full-Stack</span>
              <span className="hero-intro-text">풀스택 개발자 박현재입니다.</span>
            </div>
            <div className="hero-desc-col">
              <p className="hero-desc">'현재에 충실히 하는 신입 개발자 입니다'</p>
              <a href="#about" className="contact-btn" style={{marginTop:24}}>더 알아보기</a>
            </div>
          </div>
        </section>
        <section id="about">
          <AboutSection onlySection />
        </section>
        <section id="projects">
          <ProjectsSection onlySection />
        </section>
        <section id="education"> {/* 새로운 Education 섹션 추가 */}
          <EducationSection onlySection />
        </section>
        <section id="contact" className="contact-section">
        <h2>Contact</h2>
        {/* [수정] 이메일 주소를 아이콘과 링크로 변경 */}
          <p>
            <a 
                href={`mailto:${EMAIL_ADDRESS}`} // href는 이메일 주소로 유지하되
                className="contact-link email-link" 
                aria-label="이메일 주소 복사"
                // [수정] 클릭 시 handleCopyEmail 함수 실행
                onClick={handleCopyEmail} 
            >
                {/* 이메일(봉투) 아이콘 SVG 유지 */}
                <svg 
                    width="20" 
                    height="20" 
                    fill="currentColor" 
                    style={{ verticalAlign: "middle", marginRight: 6 }} 
                    viewBox="0 0 24 24"
                >
                    <path d="M2.003 5.884l7.85-4.856a2.002 2.002 0 012.3 0l7.85 4.856C21.43 6.138 22 6.945 22 8v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-1.055.57-1.862 1.003-2.116zM20 8v.2l-8 4.96L4 8.2V8l8 4.96L20 8z"/>
                </svg>
                {/* 이메일 주소 표시 */}
                {EMAIL_ADDRESS}
            </a>
        </p>
        {/* GitHub 링크는 기존처럼 유지 (contact-link 클래스를 사용한다고 가정) */}
        <a href="https://github.com/pnow7" target="_blank" rel="noopener noreferrer" className="contact-link">
            {/* GitHub 아이콘 SVG 추가 (AboutPage에서 사용된 아이콘 재사용) */}
            <svg 
                width="20" 
                height="20" 
                fill="currentColor" 
                style={{ verticalAlign: "middle", marginRight: 6 }} 
                viewBox="0 0 24 24"
            >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            GitHub
        </a>
        </section>
        {copyMessage && (
          <div className="copy-notification">
              {copyMessage}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;