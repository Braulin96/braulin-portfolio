import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import Asset from "components/Asset/Asset";
import Subtitle from "components/Subtitle/Subtitle";

import "./About.styles.scss";

import Profile from "assets/images/profile2.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex justify-center">
          <Subtitle firstText="About" secondText="Me" />
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <Asset image={Profile} />
          </div>

          <div className="md:w-2/3 md:pl-12">
            <Title
              size="sm"
              firstText="Front-End Developer & UI/UX Enthusiast"
              customClass="mb-4"
            />

            <Paragraph
              text="With over 5 years of experience in front-end development, I
              specialize in creating responsive web applications using
              React.js and modern CSS frameworks like TailwindCSS. I'm
              passionate about building intuitive user interfaces that provide
              exceptional user experiences."
              customClass="mb-6 !text-[16px]"
            />

            <Paragraph
              text="My approach combines technical expertise with creative
              problem-solving. I stay updated with the latest web technologies
              and best practices to deliver high-quality, maintainable code."
              customClass="mb-6 !text-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
