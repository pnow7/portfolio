import React from "react";
import { motion } from "framer-motion";
import "../styles/SkillList.css";

const SkillList = ({ title, skills }) => (
	<div className="skill-category">
		<h4>{title}</h4>
		<div className="skills-grid-list">
			{skills.map((skill, index) => (
				<motion.div
					key={skill.name}
					className="skill-item"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: index * 0.05 }}
					whileHover={{ scale: 1.1, boxShadow: "0 0 15px var(--accent-color)" }}
				>
					<img
						src={skill.icon}
						alt={skill.name}
						className="skill-icon"
					/>
					<span className="skill-name">{skill.name}</span>
				</motion.div>
			))}
		</div>
	</div>
);

export default SkillList;
