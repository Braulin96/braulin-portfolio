import Paragraph from "components/Paragraph/Paragraph";
import FadeOnScroll from "utils/FadeOnScroll";
import Button from "components/Button/Button";

import ToolsBlock from "components/ToolsBlock/ToolsBlock";
import Subtitle from "components/Subtitle/Subtitle";
import ProfissionalSkills from "components/ProfissionalSkills/ProfissionalSkills";

import { TOOLS_CARD_DATA } from "constants/TollsCardData";
import { PROFESSIONAL_SKILLS } from "constants/ProfessionalSkillsData";

import "./About.styles.scss";

type AboutProps = {
  onContactClick: () => void;
};

const About = ({ onContactClick }: AboutProps) => {
  return (
    <section
      id="about"
      className="relative "
      aria-label="About me - Professional background and experience">
      <div className=" mx-auto px-4 h-full">
        <div className="order-1 1280:order-2 1280:w-full md:py-40 py-20 w-full flex flex-col justify-center">
          <FadeOnScroll delay={100} className=" flex justify-center">
            <Subtitle
              firstText="About"
              secondText="Me"
              ariaLabel="About me section heading"
            />
          </FadeOnScroll>
          <FadeOnScroll delay={800}>
            <article
              role="main"
              className="flex flex-col justify-center items-center"
              aria-label="Professional summary and background information">
              <Paragraph
                text="I
                specialize in creating web and mobile applications. I stay updated with the latest web technologies
                and best practices to deliver high-quality, maintainable code."
                customClass="mb-6 !text-[16px] !text-gray-400 mt-4 max-w-2xl text-center"
                ariaLabel="Professional experience and technical specialization"
              />
            </article>
          </FadeOnScroll>

          <FadeOnScroll
            className="1280:mt-0 mt-[30px] flex flex-col gap-y-[20px]"
            delay={1200}>
            <ToolsBlock
              tools={TOOLS_CARD_DATA}
              ariaLabel="Development tools and technologies I use"
            />

            <ProfissionalSkills
              tools={PROFESSIONAL_SKILLS}
              ariaLabel="Core professional skills and competencies"
            />
          </FadeOnScroll>
          <FadeOnScroll offset={-40} delay={1400} className="mt-16 mx-auto">
            <Button
              onClick={onContactClick}
              text="Get In Touch"
              ariaLabel="Contact me for collaboration or inquiries"
              className="w-fit mx-auto"
            />
          </FadeOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
