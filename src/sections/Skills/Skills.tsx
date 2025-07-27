import ToolsBlock from "components/ToolsBlock/ToolsBlock";
import ProfissionalSkills from "components/ProfissionalSkills/ProfissionalSkills";
import Subtitle from "components/Subtitle/Subtitle";
import FadeOnScroll from "utils/FadeOnScroll";

import { TOOLS_CARD_DATA } from "constants/TollsCardData";
import { PROFESSIONAL_SKILLS } from "constants/ProfessionalSkillsData";

import "./Skills.styles.scss";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 relative"
      aria-label="Technical skills and professional expertise">
      <div className="container mx-auto px-4">
        <FadeOnScroll delay={100} className="text-center mb-16">
          <Subtitle
            firstText="My"
            secondText="Skills"
            customClass="mx-auto"
            ariaLabel="My skills section heading"
            headingLevel="h2"
          />
        </FadeOnScroll>

        <div
          className="flex lg:flex-row flex-col gap-12"
          role="group"
          aria-label="Technical skills and professional competencies">
          <FadeOnScroll className="" delay={500}>
            <ToolsBlock
              tools={TOOLS_CARD_DATA}
              ariaLabel="Development tools and technologies I use"
            />
          </FadeOnScroll>

          <FadeOnScroll className="shrink-0" delay={800}>
            <ProfissionalSkills
              tools={PROFESSIONAL_SKILLS}
              ariaLabel="Core professional skills and competencies"
            />
          </FadeOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Skills;
