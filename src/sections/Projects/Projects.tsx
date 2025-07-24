import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProjectCard from "components/ProjectCard/ProjectCard";
import Button from "components/Button/Button";

import "./Projects.styles.scss";

import { PROJECT_LIST_DATA } from "constants/ProjectListData";

const Projects = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const sectionRef = useRef(null);

  const handleShowMoreClick = () => {
    setShowMoreProjects(!showMoreProjects);

    setTimeout(() => {
      if (sectionRef.current) {
        if (!showMoreProjects) {
          // Expanding: scroll to bottom of section
          const sectionBottom =
            sectionRef.current.offsetTop + sectionRef.current.offsetHeight;
          window.scrollTo({
            top: sectionBottom - window.innerHeight + 60,
            behavior: "smooth",
          });
        } else {
          // Collapsing: scroll to top of section
          window.scrollTo({
            top: sectionRef.current.offsetTop - 60,
            behavior: "smooth",
          });
        }
      }
    }, 100);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            My <span className="primary-blue">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in React
            and modern web development.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout>
          {PROJECT_LIST_DATA.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}

          <AnimatePresence>
            {showMoreProjects &&
              PROJECT_LIST_DATA.slice(3).map((project, index) => (
                <motion.div
                  key={`extra-${index + 3}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                    scale: 0.9,
                    transition: {
                      duration: 0.3,
                      ease: "easeIn",
                    },
                  }}
                  layout>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <Button
            onClick={handleShowMoreClick}
            variant="secondary"
            text={showMoreProjects ? "Show Less" : "Show More"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
