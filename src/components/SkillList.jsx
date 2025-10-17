import React from "react";
import { motion } from "framer-motion";
import "../styles/SkillList.css";

const SkillList = ({ title, skills, itemVariants }) => (
	<div className="skills-col">
	
		<h4>{title}</h4>

		<motion.ul
			className="skills-list"
			initial="hidden"
			animate="visible"
		>
			{skills.map((skill) => (
				<motion.li
					key={skill.name}
					variants={itemVariants}
					whileTap={{ scale: 0.95, zIndex: 999 }}
				>
					<img
						src={skill.icon}
						alt={`${skill.name} 아이콘`}
						title={skill.name} 
						className="skill-icon-img"
					/>
				</motion.li>
			))}
		</motion.ul>
	</div>
);

export default SkillList;
