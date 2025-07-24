import ToolsBlock from "components/ToolsBlock/ToolsBlock";
import ProfissionalSkills from "components/ProfissionalSkills/ProfissionalSkills";
import Subtitle from "components/Subtitle/Subtitle";
import FadeOnScroll from "utils/FadeOnScroll";

import { TollsCardData } from "constants/TollsCardData";

import "./Skills.styles.scss";

const Skills = () => {
  const professionalSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 88 },
    { name: "Team Collaboration", level: 87 },
    { name: "Project Management", level: 82 },
    { name: "Adaptability", level: 93 },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50 relative">
      <div className="container mx-auto px-4">
        <FadeOnScroll delay={100} className="text-center mb-16">
          <Subtitle firstText="My" secondText="Skills" customClass="mx-auto" />
        </FadeOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeOnScroll delay={500}>
            <ToolsBlock tools={TollsCardData} />
          </FadeOnScroll>
          <FadeOnScroll delay={800}>
            <ProfissionalSkills skills={professionalSkills} />
          </FadeOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Skills;
