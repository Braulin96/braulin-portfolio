import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import Asset from "components/Asset/Asset";
import Subtitle from "components/Subtitle/Subtitle";
import FadeOnScroll from "utils/FadeOnScroll";

import "./About.styles.scss";

import Profile from "assets/images/profile2.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-800/50 ">
      <div className="container mx-auto px-4">
        <FadeOnScroll delay={100} className="mb-16 flex justify-center">
          <Subtitle firstText="About" secondText="Me" />
        </FadeOnScroll>

        <div className="flex flex-col md:flex-row items-center order gap-x-[20px]">
          <FadeOnScroll
            delay={500}
            className="md:w-1/3 mb-10 md:mb-0 md:mt-0 mt-10 flex justify-center md:order-1 order-2">
            <Asset image={Profile} />
          </FadeOnScroll>

          <FadeOnScroll
            delay={800}
            className="md:w-2/3 md:pl-12 order-1 md:order-2">
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
              customClass="mb-6 !text-[16px] !text-gray-400"
            />

            <Paragraph
              text="My approach combines technical expertise with creative
              problem-solving. I stay updated with the latest web technologies
              and best practices to deliver high-quality, maintainable code."
              customClass="mb-6 !text-[16px] !text-gray-400"
            />
          </FadeOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
