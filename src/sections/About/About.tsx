import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import Asset from "components/Asset/Asset";
import FadeOnScroll from "utils/FadeOnScroll";

import ToolsBlock from "components/ToolsBlock/ToolsBlock";
import Subtitle from "components/Subtitle/Subtitle";
import ProfissionalSkills from "components/ProfissionalSkills/ProfissionalSkills";

import { TOOLS_CARD_DATA } from "constants/TollsCardData";
import { PROFESSIONAL_SKILLS } from "constants/ProfessionalSkillsData";

import "./About.styles.scss";

import Profile from "assets/images/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-slate-800/50"
      aria-label="About me - Professional background and experience">
      <div className="container mx-auto px-4">
        <div className="flex flex-col 1280:flex-row items-center order gap-x-[20px]">
          <FadeOnScroll
            delay={500}
            className="1280:w-1/3 mb-10 1280:mb-0 flex justify-center 1280:order-1 order-2">
            <Asset
              image={Profile}
              alt="Professional photo of Braulin, showcasing a friendly and approachable developer"
            />
          </FadeOnScroll>

          <div className="order-1 1280:order-2 1280:w-2/3 1280:pl-12 py-20 w-full  ">
            <FadeOnScroll delay={100} className="mb-16 flex justify-center">
              <Subtitle
                firstText="About"
                secondText="Me"
                ariaLabel="About me section heading"
              />
            </FadeOnScroll>
            <FadeOnScroll delay={800} className="">
              <article
                role="main"
                aria-label="Professional summary and background information">
                <Title
                  size="sm"
                  firstText="Front-End Developer & UI/UX Enthusiast"
                  customClass="mb-4"
                  ariaLabel="Professional title and specialization"
                  headingLevel="h3"
                />

                <Paragraph
                  text="With over 4 years of experience in front-end development, I
                specialize in creating web and mobile applications. I stay updated with the latest web technologies
                and best practices to deliver high-quality, maintainable code."
                  customClass="mb-6 !text-[16px] !text-gray-400"
                  ariaLabel="Professional experience and technical specialization"
                />
              </article>
            </FadeOnScroll>

            <FadeOnScroll className="1280:mt-0 mt-[30px]" delay={500}>
              <ToolsBlock
                tools={TOOLS_CARD_DATA}
                ariaLabel="Development tools and technologies I use"
              />
            </FadeOnScroll>

            <FadeOnScroll className="shrink-0 1280:mt-0 mt-[20px]" delay={800}>
              <ProfissionalSkills
                tools={PROFESSIONAL_SKILLS}
                ariaLabel="Core professional skills and competencies"
              />
            </FadeOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
