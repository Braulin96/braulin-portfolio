import ToolsBlock from "components/ToolsBlock/ToolsBlock";
import ProfissionalSkills from "components/ProfissionalSkills/ProfissionalSkills";
import Subtitle from "components/Subtitle/Subtitle";
import FadeOnScroll from "utils/FadeOnScroll";

import { TOOLS_CARD_DATA } from "constants/TollsCardData";
import { PROFESSIONAL_SKILLS_DATA } from "constants/ProfessionalSkillsData";

import "./Skills.styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800/50 relative">
      <div className="container mx-auto px-4">
        <FadeOnScroll delay={100} className="text-center mb-16">
          <Subtitle firstText="My" secondText="Skills" customClass="mx-auto" />
        </FadeOnScroll>
        <div className="flex lg:flex-row flex-col gap-12">
          <FadeOnScroll className="" delay={500}>
            <ToolsBlock tools={TOOLS_CARD_DATA} />
          </FadeOnScroll>
          <FadeOnScroll className="shrink-0" delay={800}>
            <ProfissionalSkills skills={PROFESSIONAL_SKILLS_DATA} />
          </FadeOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Skills;
