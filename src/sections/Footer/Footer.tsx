import GoUp from "assets/images/go_up.svg";

import "./Footer.styles.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-10 border-t border-gray-800 relative ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <span className="primary-blue">Dev</span>PortfolioTest
          </div>

          <div className="text-gray-400 text-center mb-4 md:mb-0">
            &copy; 2023 Alex Johnson. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="cursor-pointer group px-[4px] py-[12px] bg-slate-900 rounded-full shadow-lg hover:shadow-xl">
            <img
              src={GoUp}
              width="30"
              height="30"
              alt="Go to top"
              className="transition-transform group-hover:scale-110 group-hover:translate-y-[-4px] duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
