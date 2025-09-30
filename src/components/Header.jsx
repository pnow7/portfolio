import React from "react";

const Header = () => (
	<header className="header">
		<nav className="nav">
			<div className="logo-area">
				<a href="#hero" className="logo-text">Pnow7 Portfolio</a>
			</div>
			<ul className="nav-links">
				<li><a href="#hero">홈</a></li>
				<li><a href="#about">소개</a></li>
				<li><a href="#projects">프로젝트</a></li>
				<li><a href="#education">학력 및 교육</a></li> 
				<li><a href="#contact">연락처</a></li>
			</ul>
		</nav>
	</header>
);

export default Header;