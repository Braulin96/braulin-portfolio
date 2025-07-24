import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "components/Navbar/Navbar";
import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import Button from "components/Button/Button";
import Asset from "components/Asset/Asset";
import Subtitle from "components/Subtitle/Subtitle";
import ToolsBlock from "components/ToolsBlock/ToolsBlock";
import ProjectCard from "components/ProjectCard/ProjectCard";

import { TollsCardData } from "constants/TollsCardData";
import { PROJECT_LIST_DATA } from "constants/ProjectListData";

import Profile from "assets/images/profile2.jpg";
import ProfissionalSkills from "components/ProfissionalSkills/ProfissionalSkills";

const PortfolioTest = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const sectionRef = useRef(null);

  const handleShowMoreClick = () => {
    setShowMoreProjects(!showMoreProjects);

    // Add a small delay to allow the animation to start
    setTimeout(() => {
      if (sectionRef.current) {
        if (!showMoreProjects) {
          // Expanding: scroll to bottom of section
          const sectionBottom =
            sectionRef.current.offsetTop + sectionRef.current.offsetHeight;
          window.scrollTo({
            top: sectionBottom - window.innerHeight + 60,
            behavior: "smooth",
          });
        } else {
          // Collapsing: scroll to top of section
          window.scrollTo({
            top: sectionRef.current.offsetTop - 60,
            behavior: "smooth",
          });
        }
      }
    }, 100);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveNav(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
    setActiveNav(sectionId);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const skills = {
    technical: [
      { name: "React.js", level: 95 },
      { name: "JavaScript/ES6+", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 & CSS3", level: 88 },
      { name: "Redux/State Mgmt", level: 85 },
    ],
    professional: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 88 },
      { name: "Team Collaboration", level: 87 },
      { name: "Project Management", level: 82 },
      { name: "Adaptability", level: 93 },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-50 font-['Poppins',sans-serif]">
      {/* Background Blobs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl -translate-y-48 translate-x-48 z-0"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl translate-y-48 -translate-x-48 z-0"></div>

      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-16 relative z-10">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:space-y-[12px] space-y-[8px]">
            <Title size="lg" firstText="Hi, I'm" secondText="Braulin" />
            <Title
              size="md"
              firstText="Front-End"
              secondText="React Developer"
            />
            <div className="mb-8 max-w-lg">
              <Paragraph
                text="I build modern, responsive web applications with React and
                TailwindCSS. Passionate about creating intuitive user
                experiences with clean, efficient code."
              />
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={() => scrollToSection("projects")}
                text="View Projects"
              />
              <Button
                onClick={() => scrollToSection("contact")}
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

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              My <span className="primary-blue">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ToolsBlock tools={TollsCardData} />
            <ProfissionalSkills skills={skills.professional} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRef} id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              My <span className="primary-blue">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my skills in React
              and modern web development.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout>
            {PROJECT_LIST_DATA.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                layout>
                <ProjectCard project={project} />
              </motion.div>
            ))}

            <AnimatePresence>
              {showMoreProjects &&
                PROJECT_LIST_DATA.slice(3).map((project, index) => (
                  <motion.div
                    key={`extra-${index + 3}`}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -30,
                      scale: 0.9,
                      transition: {
                        duration: 0.3,
                        ease: "easeIn",
                      },
                    }}
                    layout>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center mt-12">
            <Button
              onClick={handleShowMoreClick}
              variant="secondary"
              text={showMoreProjects ? "Show Less" : "Show More"}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Get In <span className="primary-blue">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue transition-colors"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue transition-colors"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue transition-colors"
                    placeholder="Your Message"></textarea>
                </div>

                <button
                  onClick={handleContactSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-indigo-500/30 transition-all">
                  Send Message
                </button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 h-full border border-indigo-500/20">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: "fas fa-map-marker-alt",
                      title: "Location",
                      info: "San Francisco, California",
                    },
                    {
                      icon: "fas fa-envelope",
                      title: "Email",
                      info: "hello@example.com",
                    },
                    {
                      icon: "fas fa-phone",
                      title: "Phone",
                      info: "+1 (123) 456-7890",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <i className={contact.icon}></i>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{contact.title}</h4>
                        <p className="text-gray-400">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="font-bold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {[
                      "fab fa-github",
                      "fab fa-linkedin-in",
                      "fab fa-twitter",
                      "fab fa-dribbble",
                    ].map((icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                        <i className={icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="primary-blue">Dev</span>PortfolioTest
            </div>

            <div className="text-gray-400 text-center mb-4 md:mb-0">
              &copy; 2023 Alex Johnson. All Rights Reserved.
            </div>

            <div className="flex space-x-4">
              {[
                "fab fa-github",
                "fab fa-linkedin-in",
                "fab fa-twitter",
                "fab fa-dribbble",
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:primary-blue transition-colors">
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioTest;
