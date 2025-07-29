import { getCurrentYear } from "utils/getCurrentYear";

import GoUp from "assets/images/go_up.svg";

import "./Footer.styles.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  };

  const currentYear = getCurrentYear();

  return (
    <footer
      className="py-10 border-t border-gray-800 bg-slate-800/50 relative"
      role="contentinfo"
      aria-label="Website footer with copyright and navigation">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className="text-2xl font-bold mb-4 md:mb-0 text-gray-400"
            role="banner"
            aria-label="DevPortfolio brand logo">
            Braulin Pires
          </div>

          <div
            className="text-gray-400 text-center mb-4 md:mb-0"
            role="text"
            aria-label={`Copyright ${currentYear} Braulin Pires. All rights reserved`}>
            &copy; {currentYear} Braulin Pires. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            onKeyDown={handleKeyDown}
            className="cursor-pointer group px-[4px] py-[12px] bg-slate-900 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all"
            aria-label="Scroll to top of page"
            title="Go to top"
            tabIndex={0}>
            <img
              src={GoUp}
              width="30"
              height="30"
              alt=""
              className="transition-transform group-hover:scale-110 group-hover:translate-y-[-4px] duration-300"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
