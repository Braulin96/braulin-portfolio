import { useState, useEffect } from "react";

import Navbar from "components/Navbar/Navbar";
import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import Button from "components/Button/Button";
import Asset from "components/Asset/Asset";

import Profile from "assets/images/profile2.jpg";

const PortfolioTest = () => {
  const [activeNav, setActiveNav] = useState("home");

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

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights.",
      technologies: ["React", "Redux", "TailwindCSS", "Chart.js"],
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, and deadline tracking.",
      technologies: ["React", "Context API", "React DnD", "Firebase"],
      gradient: "from-purple-600 to-purple-700",
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather application that provides current conditions, 7-day forecasts, and location-based weather alerts with a clean, intuitive interface.",
      technologies: ["React", "OpenWeather API", "Geolocation", "Chart.js"],
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  const tools = [
    { icon: "fab fa-react", name: "React", color: "text-blue-500" },
    { icon: "fab fa-js", name: "JavaScript", color: "text-yellow-400" },
    { icon: "fab fa-css3-alt", name: "CSS3", color: "text-blue-500" },
    { icon: "fab fa-html5", name: "HTML5", color: "text-orange-500" },
    { icon: "fab fa-git-alt", name: "Git", color: "text-red-500" },
    { icon: "fab fa-figma", name: "Figma", color: "text-purple-500" },
    { icon: "fab fa-npm", name: "NPM", color: "text-red-500" },
    { icon: "fab fa-sass", name: "SASS", color: "text-pink-500" },
  ];

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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              About <span className="primary-blue">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-indigo-500/20 transform rotate-3">
                  <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center text-gray-500">
                    <i className="fas fa-user text-8xl"></i>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-indigo-500 px-4 py-1 rounded-full font-bold text-sm">
                  <i className="fab fa-react mr-1"></i> React Specialist
                </div>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">
                Front-End Developer & UI/UX Enthusiast
              </h3>
              <p className="text-gray-300 mb-6">
                With over 5 years of experience in front-end development, I
                specialize in creating responsive web applications using
                React.js and modern CSS frameworks like TailwindCSS. I'm
                passionate about building intuitive user interfaces that provide
                exceptional user experiences.
              </p>
              <p className="text-gray-300 mb-6">
                My approach combines technical expertise with creative
                problem-solving. I stay updated with the latest web technologies
                and best practices to deliver high-quality, maintainable code.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  {
                    icon: "fas fa-code",
                    title: "Front-End",
                    desc: "React, JavaScript, HTML5, CSS3",
                  },
                  {
                    icon: "fas fa-paint-brush",
                    title: "UI/UX Design",
                    desc: "Figma, Responsive Design",
                  },
                  {
                    icon: "fas fa-mobile-alt",
                    title: "Mobile First",
                    desc: "Responsive Development",
                  },
                  {
                    icon: "fas fa-tools",
                    title: "Tools",
                    desc: "Git, Webpack, Vite",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
            {/* Technical Skills */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-indigo-500/20">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <i className="fas fa-laptop-code mr-3 primary-blue"></i>{" "}
                Technical Skills
              </h3>

              <div className="space-y-6">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-indigo-500/20 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-indigo-500/20">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <i className="fas fa-user-tie mr-3 primary-blue"></i>{" "}
                Professional Skills
              </h3>

              <div className="space-y-6">
                {skills.professional.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-indigo-500/20 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-4 border border-indigo-500/20 hover:border-indigo-500/40 transition-all">
                  <i className={`${tool.icon} text-4xl ${tool.color} mb-2`}></i>
                  <span className="text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30 border border-indigo-500/20">
                <div
                  className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="bg-indigo-500/10 primary-blue text-sm px-3 py-1 rounded-full">
                      React
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="primary-blue hover:secondary-purple transition-colors">
                      <i className="fab fa-github mr-1"></i> Code
                    </a>
                    <a
                      href="#"
                      className="primary-blue hover:secondary-purple transition-colors">
                      <i className="fas fa-external-link-alt mr-1"></i> Live
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-indigo-500 rounded-lg font-semibold text-white hover:bg-indigo-500/10 transition-all">
              View All Projects
            </button>
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
