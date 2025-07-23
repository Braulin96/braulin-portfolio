import { useState } from "react";
import { motion } from "framer-motion";

import TechList from "components/TechList/TechList";
import Paragraph from "components/Paragraph/Paragraph";
import Modal from "components/Modal/Modal";
import Carousel from "components/Carousel/Carousel";

import "./ProjectCard.styles.scss";
import Title from "components/Title/Title";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    technologies: string[];
    gradient: string;
    mainImage?: string;
    moreImages?: string[];
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleCloseModal = () => setIsModalOpen(false);
  const handlePlusClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="ProjectCard"
        className="ProjectCard relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30 border border-indigo-500/20 group">
        <div
          className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
          {project.mainImage && (
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-full object-cover object-center rounded-t-2xl opacity-80 group-hover:opacity-90 transition-opacity duration-300"
            />
          )}
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Carousel
          slides={project.moreImages?.map((image) => ({ url: image })) || []}
          customClasses="w-full h-[400px]"
          displayArrows={true}
          currentSlide={0}
          title={project.title}
        />
      </Modal>
    </div>
  );
};

export default ProjectCard;
