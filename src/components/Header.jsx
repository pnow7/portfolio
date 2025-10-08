import React from "react";
import "../styles/Header.css";

const Header = () => (
	<header className="header">
		<nav className="nav">
			<div className="logo-area">
				<a href="#hero" className="logo-text">Pnow7 Portfolio</a>
			</div>
			<ul className="nav-links">
				<li><a href="#hero">Home</a></li>
				<li><a href="#about">About Me</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#education">Education</a></li> 
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</header>
);

export default Header;