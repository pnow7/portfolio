
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./pages/AboutPage";
import ProjectsSection from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="hero-section">
          <div className="hero-flex">
            <div className="hero-stack">
              <span className="hero-animated-movie">Full-Stack</span>
              <span className="hero-intro-text">풀스택 개발자 박현재입니다.</span>
            </div>
            <div className="hero-desc-col">
              <p className="hero-desc">'현재에 충실히 하는<br />신입 개발자 입니다'</p>
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
        <section id="contact" className="contact-section">
          <h2>Contact</h2>
          <p>이메일: <a href="mailto:pnow7.dev@gmail.com">pnow7.dev@gmail.com</a></p>
          <a href="https://github.com/pnow7" target="_blank" rel="noopener noreferrer" className="github-btn">GitHub 바로가기</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;