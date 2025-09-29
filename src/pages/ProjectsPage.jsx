import React from "react";
import { myProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = ({ onlySection }) => (
	onlySection ? (
		<div className="main-section">
			<section className="projects-section">
				<h2>프로젝트</h2>
				<div className="projects-list">
					{myProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</section>
		</div>
	) : (
		<>
			{/* 기존 라우팅용, 현재는 사용 안함 */}
		</>
	)
);

export default ProjectsPage;
