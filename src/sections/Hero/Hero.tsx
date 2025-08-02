import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import Button from "components/Button/Button";
import Asset from "components/Asset/Asset";
import FadeOnScroll from "utils/FadeOnScroll";
import Code from "assets/images/code.svg";

import { TECH_STACK_DATA } from "constants/TechStack";
import { STATS_DATA } from "constants/StatsData";

import "./Hero.styles.scss";

import Profile from "assets/images/linkedinProfile2.png";
import Send from "assets/images/send.svg";

type HeroProps = {
  onProjectsClick: () => void;
  onContactClick: () => void;
};

const Hero = ({ onProjectsClick, onContactClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="md:min-h-[850px] flex items-center py-20 relative bg-slate-800/50 "
      aria-label="Hero section - Introduction and main call to action">
      <div className="container justify-between mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 md:space-y-[12px] space-y-[8px]">
          <FadeOnScroll data="fade-up" delay={100} duration={600} offset={100}>
            <div role="banner" aria-label="Personal introduction">
              <Title size="lg" firstText="Hi, I'm Braulin" />
              <Title
                size="lg"
                firstText="Front-End"
                secondText="React Developer"
              />
            </div>
          </FadeOnScroll>

          <FadeOnScroll data="fade-up" delay={300} duration={600} offset={150}>
            <div
              className="mb-8 max-w-[650px]"
              role="complementary"
              aria-label="Professional summary">
              <Paragraph text="I create exceptional digital experiences through clean, efficient React applications. From concept to reality, I focus on performance, accessibility, and user delight." />
            </div>
          </FadeOnScroll>

          <FadeOnScroll
            data="fade-up"
            delay={1200}
            duration={600}
            offset={50}
            className="flex flex-wrap gap-8 mb-8">
            {STATS_DATA.map((stat) => (
              <div key={stat.id} className="text-center">
                <Paragraph
                  text={stat.value}
                  customClass={`!text-2xl !font-bold ${stat.colorClass} !mb-1`}
                />
                <Paragraph
                  text={stat.label}
                  customClass="!text-sm !text-gray-400"
                />
              </div>
            ))}
          </FadeOnScroll>

          <FadeOnScroll data="fade-up" delay={500} duration={600} offset={100}>
            <div
              className="flex space-x-4"
              role="group"
              aria-label="Main action buttons">
              <Button
                onClick={onProjectsClick}
                text="View Projects"
                ariaLabel="View my portfolio projects"
                icon={Code}
              />
              <Button
                icon={Send}
                onClick={onContactClick}
                variant="secondary"
                text="Contact Me"
                ariaLabel="Get in touch with me"
              />
            </div>
          </FadeOnScroll>
        </div>

        <div className="w-full md:w-fit justify-end">
          <FadeOnScroll
            data="fade-up"
            delay={800}
            duration={700}
            offset={100}
            className="flex lg:justify-end justify-center">
            <Asset
              image={Profile}
              customClass="!rounded-full !overflow-hidden"
              variant="default"
              alt="Braulin - Front-End React Developer"
            />
          </FadeOnScroll>

          <FadeOnScroll data="fade-up" delay={700} duration={600} offset={100}>
            <div className="flex items-center justify-end gap-1 ml-auto  ">
              <div className="flex -space-x-2">
                {TECH_STACK_DATA.map((tech) => (
                  <img
                    key={tech.id}
                    src={tech.src}
                    className={`size-8 rounded-full border-2 border-slate-700 ${
                      tech.customClass || ""
                    }`}
                    alt={tech.alt}
                    title={tech.title}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-400">+more</div>
            </div>
          </FadeOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;
