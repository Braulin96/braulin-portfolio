import { useState, useEffect } from "react";

import Navbar from "components/Navbar/Navbar";

import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer/Footer";
import OverlayHeader from "components/OverlayHeader/OverlayHeader";

const Portfolio = () => {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setActiveNav(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-50 font-['Poppins',sans-serif]">
      <OverlayHeader />
      <Navbar activeNav={activeNav} onNavClick={scrollToSection} />

      <main id="main-content" tabIndex={-1}>
        <Hero
          onProjectsClick={() => scrollToSection("projects")}
          onContactClick={() => scrollToSection("contact")}
        />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
