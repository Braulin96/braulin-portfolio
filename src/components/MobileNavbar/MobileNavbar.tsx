import "./MobileNavbar.styles.scss";

const MobileNavbar = () => {
  return (
    <div data-testid="MobileNavbar" className="MobileNavbar">
      <nav
        data-testid="DesktopNavbar"
        className="fixed DesktopNavbar w-full z-50 bg-slate-800/80 backdrop-blur-sm py-4 border-b border-indigo-500/20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-[22px] font-bold">
            <span className="primary-blue">Dev</span>PortfolioTest
          </div>
          <div>Mobile Navbar</div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
