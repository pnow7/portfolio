import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => (
	<>
		<Header />
		<main className="main-section">
			<section className="intro-section">
				<img
					src="/vite.svg"
					alt="Profile"
					className="profile-img intro-profile-img"
				/>
				<h1>안녕하세요, 신입 풀스택 개발자 박현재입니다.</h1>
				<p>웹 프론트엔드와 백엔드 모두에 능숙한 개발자입니다.<br />
				최신 기술과 사용자 경험을 중시하며, 다양한 프로젝트 경험을 보유하고 있습니다.</p>
				<a href="#contact" className="contact-btn">연락하기</a>
			</section>
		</main>
		<Footer />
	</>
);

export default HomePage;