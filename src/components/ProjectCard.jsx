import React from "react";

const ProjectCard = ({ project }) => (
	<div className="project-card">
		<img src={project.image} alt={project.title} className="project-img" style={{ width: "100%", borderRadius: 12 }} />
		<h3>{project.title}</h3>
		<p>{project.description}</p>
		<div className="skills">
			{project.skills.map((skill) => (
				<span className="skill-badge" key={skill}>{skill}</span>
			))}
		</div>
	</div>
);

export default ProjectCard;
