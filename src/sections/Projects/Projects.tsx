import { useState, useRef, useEffect } from "react";
import AOS from "aos";

import ProjectCard from "components/ProjectCard/ProjectCard";
import Button from "components/Button/Button";
import Subtitle from "components/Subtitle/Subtitle";
import Paragraph from "components/Paragraph/Paragraph";
import FadeOnScroll from "utils/FadeOnScroll";
import { useProjects } from "../../datocms/hooks/useProjects";
import { transformDatoCMSProject } from "../../datocms/helper/transformProject";
import { LoadingSpinner } from "components/LoadingSpinner/Loading";

import Plus from "assets/images/plus.svg";
import Minus from "assets/images/minus.svg";

import "./Projects.styles.scss";

const Projects = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { projects: datocmsProjects, loading } = useProjects();
  const projects = datocmsProjects.map(transformDatoCMSProject);

  const handleShowMoreClick = () => {
    setShowMoreProjects(!showMoreProjects);

    setTimeout(() => {
      if (sectionRef.current) {
        if (!showMoreProjects) {
          // Expanding: scroll down 450px from current position
          window.scrollTo({
            top: window.scrollY + 450,
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

  const visibleProjectsCount = showMoreProjects ? projects.length : 3;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 relative bg-slate-800/50"
      aria-label="Portfolio projects showcase">
      <div className="container mx-auto px-4">
        <FadeOnScroll delay={100} className="text-center mb-16">
          <Subtitle
            firstText="What I"
            secondText="have built"
            customClass="mx-auto"
            ariaLabel="My projects section heading"
            headingLevel="h2"
          />

          <Paragraph
            text="Every project is a step in my growth and a reflection of how I approach problems. From UI challenges to state management and API integration, these are real-world applications where I brought design and logic together."
            customClass="mt-8 mx-auto !text-gray-400 !text-[16px] max-w-2xl"
            ariaLabel="Projects section description"
          />
        </FadeOnScroll>

        {loading ? (
          <FadeOnScroll delay={500} className="flex justify-center">
            <LoadingSpinner />
          </FadeOnScroll>
        ) : (
          <div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              role="grid"
              aria-label={`Portfolio projects grid showing ${visibleProjectsCount} of ${projects.length} projects`}>
              {/* Initial 3 projects - always visible */}
              {projects.slice(0, 3).map((project, index) => (
                <FadeOnScroll
                  key={index}
                  data="fade-up"
                  duration={600}
                  delay={200 + index * 100}
                  offset={150}>
                  <ProjectCard
                    project={project}
                    projectIndex={index + 1}
                    totalProjects={datocmsProjects.length}
                  />
                </FadeOnScroll>
              ))}

              {/* Additional projects - conditionally rendered */}
              {showMoreProjects &&
                projects.slice(3).map((project, index) => (
                  <FadeOnScroll
                    key={`extra-${index + 3}`}
                    data="fade-up"
                    duration={500}
                    delay={index * 100}
                    offset={100}
                    className={`transition-all duration-300 ${
                      showMoreProjects ? "opacity-100" : "opacity-0"
                    }`}>
                    <ProjectCard
                      project={project}
                      projectIndex={index + 4}
                      totalProjects={datocmsProjects.length}
                    />
                  </FadeOnScroll>
                ))}
            </div>

            <FadeOnScroll
              offset={-100}
              delay={800}
              className="text-center mt-12">
              <Button
                onClick={handleShowMoreClick}
                className="mx-auto"
                variant="secondary"
                text={showMoreProjects ? "Show Less" : "Show More"}
                icon={showMoreProjects ? Minus : Plus}
                ariaLabel={
                  showMoreProjects
                    ? `Show less projects. Currently showing ${projects.length} projects`
                    : `Show more projects. Currently showing 3 of ${projects.length} projects`
                }
                ariaDescribedBy="projects-grid"
              />
            </FadeOnScroll>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
