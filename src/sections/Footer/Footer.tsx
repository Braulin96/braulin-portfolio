import "./Footer.styles.scss";

const Footer = () => {
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
