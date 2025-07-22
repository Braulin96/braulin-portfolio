import { useState } from "react";
import { motion } from "framer-motion";

import NavLinkList from "components/NavLinkList/NavLinkList";

import { NAV_LINK_DATA } from "constants/NavLinkData";

import Close from "assets/Icons/Close";
import Menu from "assets/Icons/Menu";

import "./MobileNavbar.styles.scss";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setIsMenuOpen(false);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div data-testid="MobileNavbar" className="MobileNavbar">
      <nav className="fixed w-full z-50 bg-slate-800/80 backdrop-blur-sm py-4 border-b border-indigo-500/20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-[22px] font-bold">
            <span className="primary-blue">Dev</span>PortfolioTest
          </div>
          <button
            className="text-white focus:outline-none z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu">
            {isMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={{ x: "200%", opacity: 0 }}
        animate={{
          x: isMenuOpen ? "0%" : "200%",
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-full bg-slate-900 text-white z-40 flex flex-col px-6 py-20 backdrop-blur-sm justify-center">
        <NavLinkList
          list={NAV_LINK_DATA}
          onNavClick={handleNavClick}
          activeNav="home"
          isMobile
        />
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
