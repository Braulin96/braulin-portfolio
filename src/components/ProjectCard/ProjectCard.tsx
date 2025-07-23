import Title from "components/Title/Title";
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
  return (
    <div
      data-testid="ProjectCard"
      className="ProjectCard bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30 border border-indigo-500/20">
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
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-slate-800 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="primary-blue hover:secondary-purple transition-colors">
            <i className="fab fa-github mr-1"></i> Code
          </a>
          <a
            href="#"
            className="primary-blue hover:secondary-purple transition-colors">
            <i className="fas fa-external-link-alt mr-1"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
