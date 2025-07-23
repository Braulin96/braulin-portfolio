import { useState } from "react";
import { motion } from "framer-motion";

import TechList from "components/TechList/TechList";
import Paragraph from "components/Paragraph/Paragraph";

import "./ProjectCard.styles.scss";

type ProjectCardProps = {
  children?: React.ReactNode;
  project: {
    title: string;
    description: string;
    technologies: string[];
    gradient: string;
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handlePlusClick = () => {
    console.log("Plus button clicked for project:", project.title);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="ProjectCard"
      className="ProjectCard relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30 border border-indigo-500/20">
      <div
        className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Paragraph
            text={project.title}
            customClass="!text-white !text-[20px] font-bold"
          />
        </div>
        <Paragraph
          text={project.description}
          customClass="!text-[16px] !text-gray-400 mb-4"
        />

        <div className="mb-6">
          <TechList techList={project.technologies} />
        </div>
        {isHovered && (
          <motion.button
            initial={{ y: "70%", opacity: 0 }}
            animate={{
              y: isHovered ? "0%" : "70%",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={handlePlusClick}
            className="text-slate-300 absolute bottom-[12px] right-[12px] size-[44px] text-2xl rounded-full bg-primary-blue/50 transition-colors cursor-pointer">
            +
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
