import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import Button from "components/Button/Button";
import Asset from "components/Asset/Asset";

import "./Hero.styles.scss";

import Profile from "assets/images/profile2.jpg";

type HeroProps = {
  onProjectsClick: () => void;
  onContactClick: () => void;
};

const Hero = ({ onProjectsClick, onContactClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 md:space-y-[12px] space-y-[8px]">
          <Title size="lg" firstText="Hi, I'm" secondText="Braulin" />
          <Title size="md" firstText="Front-End" secondText="React Developer" />
          <div className="mb-8 max-w-lg">
            <Paragraph
              text="I build modern, responsive web applications with React and
              TailwindCSS. Passionate about creating intuitive user
              experiences with clean, efficient code."
            />
          </div>

          <div className="flex space-x-4">
            <Button onClick={onProjectsClick} text="View Projects" />
            <Button
              onClick={onContactClick}
              variant="secondary"
              text="Contact Me"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Asset
            image={Profile}
            variant="fullRounded"
            specialization="React Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
