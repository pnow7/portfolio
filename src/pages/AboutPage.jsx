import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const hashtags = [
	"#성장지향", "#문제해결", "#책임감", "#협업", "#꾸준함", "#긍정적", "#도전", "#유연함"
];

const frontendSkills = [
	{ name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
	{ name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
	{ name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
	{ name: "JSP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
	{ name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
];

const backendSkills = [
	{ name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
	{ name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
	{ name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
	{ name: "Spring", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
	{ name: "Oracle", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" },
	{ name: "SQL Developer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" },
];

const AboutPage = ({ onlySection }) => (
	onlySection ? (
		<div className="main-section">
			<section className="about-section" style={{ textAlign: "center" }}>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<img
						src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
						alt="3D Character"
						style={{ width: 120, borderRadius: "50%", marginBottom: 16, boxShadow: "0 4px 24px rgba(124,58,237,0.15)" }}
					/>
					<h2 style={{ marginBottom: 8 }}>About Me</h2>
					<p style={{ fontSize: "1.1rem", marginBottom: 12 }}>
						안녕하세요! 저는 <b>풀스택 개발자 Pnow7</b>입니다.<br />
						사용자 경험과 효율적인 시스템 설계를 중요하게 생각하며,<br />
						다양한 기술을 활용해 문제를 해결하는 것을 즐깁니다.
					</p>
					<div className="hashtag-list" style={{ marginBottom: 18, justifyContent: "center" }}>
						{hashtags.map(tag => (
							<span key={tag} className="hashtag">{tag}</span>
						))}
					</div>
					<a
						href="https://github.com/pnow7"
						target="_blank"
						rel="noopener noreferrer"
						className="github-btn"
						style={{ marginBottom: 24 }}
					>
						<svg width="20" height="20" fill="currentColor" style={{ verticalAlign: "middle", marginRight: 6 }} viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
						GitHub
					</a>
				</div>
				<div className="skills-tools-area" style={{ textAlign: "center" }}>
					<h3>Skill &amp; Tools</h3>
					<div className="skills-tools-grid">
						<div className="skills-col">
							<h4>Frontend</h4>
							<ul className="skills-list">
								{frontendSkills.map(skill => (
									<li key={skill.name}>
										<img src={skill.icon} alt={skill.name} style={{ width: 40, height: 40 }} />
									</li>
								))}
							</ul>
						</div>
						<div className="skills-col">
							<h4>Backend</h4>
							<ul className="skills-list">
								{backendSkills.map(skill => (
									<li key={skill.name}>
										<img src={skill.icon} alt={skill.name} style={{ width: 40, height: 40 }} />
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	) : (
		<>
			<Header />
			<main className="main-section">
				<section className="about-section" style={{ textAlign: "center" }}>
					<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<img
							src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
							alt="3D Character"
							style={{ width: 120, borderRadius: "50%", marginBottom: 16, boxShadow: "0 4px 24px rgba(124,58,237,0.15)" }}
						/>
						<h2 style={{ marginBottom: 8 }}>About Me</h2>
						<p style={{ fontSize: "1.1rem", marginBottom: 12 }}>
							안녕하세요! 저는 <b>풀스택 개발자 Pnow7</b>입니다.<br />
							사용자 경험과 효율적인 시스템 설계를 중요하게 생각하며,<br />
							다양한 기술을 활용해 문제를 해결하는 것을 즐깁니다.
						</p>
						<div className="hashtag-list" style={{ marginBottom: 18, justifyContent: "center" }}>
							{hashtags.map(tag => (
								<span key={tag} className="hashtag">{tag}</span>
							))}
						</div>
						<a
							href="https://github.com/pnow7"
							target="_blank"
							rel="noopener noreferrer"
							className="github-btn"
							style={{ marginBottom: 24 }}
						>
							<svg width="20" height="20" fill="currentColor" style={{ verticalAlign: "middle", marginRight: 6 }} viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
						GitHub
					</a>
					</div>
					<div className="skills-tools-area" style={{ textAlign: "center" }}>
						<h3>Skill &amp; Tools</h3>
						<div className="skills-tools-grid">
							<div className="skills-col">
								<h4>Frontend</h4>
								<ul className="skills-list">
									{frontendSkills.map(skill => (
										<li key={skill.name}>
											<img src={skill.icon} alt={skill.name} style={{ width: 40, height: 40 }} />
										</li>
									))}
								</ul>
							</div>
							<div className="skills-col">
								<h4>Backend</h4>
								<ul className="skills-list">
									{backendSkills.map(skill => (
										<li key={skill.name}>
											<img src={skill.icon} alt={skill.name} style={{ width: 40, height: 40 }} />
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
);

export default AboutPage;