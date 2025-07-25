import { useState, useRef, useEffect } from "react";
import AOS from "aos";

import ProjectCard from "components/ProjectCard/ProjectCard";
import Button from "components/Button/Button";
import Subtitle from "components/Subtitle/Subtitle";
import Paragraph from "components/Paragraph/Paragraph";
import FadeOnScroll from "utils/FadeOnScroll";

import { PROJECT_LIST_DATA } from "constants/ProjectListData";

import "./Projects.styles.scss";

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

  // Reinitialize AOS when showMoreProjects changes to animate new items
  useEffect(() => {
    AOS.refresh();
  }, [showMoreProjects]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 relative bg-slate-800/50 ">
      <div className="container mx-auto px-4">
        <FadeOnScroll delay={100} className="text-center mb-16">
          <Subtitle
            firstText="My"
            secondText="Projects"
            customClass="mx-auto"
          />

          <Paragraph
            text="Here are some of my recent projects showcasing my skills in React
            and modern web development."
            customClass="mt-4 mx-auto !text-gray-400 !text-[16px] max-w-2xl"
          />
        </FadeOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Initial 3 projects - always visible */}
          {PROJECT_LIST_DATA.slice(0, 3).map((project, index) => (
            <FadeOnScroll
              key={index}
              data="fade-up"
              duration={600}
              delay={200 + index * 100}
              offset={150}>
              <ProjectCard project={project} />
            </FadeOnScroll>
          ))}

          {/* Additional projects - conditionally rendered */}
          {showMoreProjects &&
            PROJECT_LIST_DATA.slice(3).map((project, index) => (
              <FadeOnScroll
                key={`extra-${index + 3}`}
                data="fade-up"
                duration={500}
                delay={index * 100}
                offset={100}
                className={`transition-all duration-300 ${
                  showMoreProjects ? "opacity-100" : "opacity-0"
                }`}>
                <ProjectCard project={project} />
              </FadeOnScroll>
            ))}
        </div>

        <FadeOnScroll offset={-100} delay={800} className="text-center mt-12">
          <Button
            onClick={handleShowMoreClick}
            variant="secondary"
            text={showMoreProjects ? "Show Less" : "Show More"}
          />
        </FadeOnScroll>
      </div>
    </section>
  );
};

export default Projects;
