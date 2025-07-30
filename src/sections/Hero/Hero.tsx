import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import Button from "components/Button/Button";
import Asset from "components/Asset/Asset";
import FadeOnScroll from "utils/FadeOnScroll";
import Code from "assets/images/code.svg";

import { TECH_STACK_DATA } from "constants/TechStack";

import "./Hero.styles.scss";

import Profile from "assets/images/linkedinProfile2.png";

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
        <FadeOnScroll
          data="fade-up"
          delay={100}
          className="md:w-1/2 mb-12 md:mb-0 md:space-y-[12px] space-y-[8px]">
          <div role="banner" aria-label="Personal introduction">
            <Title size="lg" firstText="Hi, I'm Braulin" />
            <Title
              size="lg"
              firstText="Front-End"
              secondText="React Developer"
            />
          </div>
          <div
            className="mb-8 max-w-[650px]"
            role="complementary"
            aria-label="Professional summary">
            <Paragraph text="Mainly React. Always user-focused. Never just one way." />
          </div>
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
              onClick={onContactClick}
              variant="secondary"
              text="Contact Me"
              ariaLabel="Get in touch with me"
            />
          </div>
          <div className="flex items-center gap-4 mt-10">
            <div className="flex -space-x-2">
              {TECH_STACK_DATA.map((tech) => (
                <img
                  key={tech.id}
                  src={tech.src}
                  className={`size-7 rounded-full border-2 border-slate-700 ${
                    tech.customClass || ""
                  }`}
                  alt={tech.alt}
                  title={tech.title}
                />
              ))}
            </div>
          </div>
        </FadeOnScroll>

        <FadeOnScroll
          data="fade-up"
          delay={800}
          className="w-full md:w-1/2 flex lg:justify-end justify-center">
          <Asset
            image={Profile}
            customClass="!rounded-full !overflow-hidden"
            variant="default"
            // specialization="Built with Vite + React + TypeScript and TailwindCSS"
            alt="Braulin - Front-End React Developer"
          />
        </FadeOnScroll>
      </div>
    </section>
  );
};

export default Hero;
