import NavLinkList from "components/NavLinkList/NavLinkList";

import { NAV_LINK_DATA } from "constants/NavLinkData";

import "./DesktopNavbar.styles.scss";

const DesktopNavbar = () => {
  return (
    <nav
      data-testid="DesktopNavbar"
      className="fixed DesktopNavbar w-full z-50 bg-slate-800/80 backdrop-blur-sm py-4 border-b border-indigo-500/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-[22px] font-bold">
          <span className="primary-blue">Dev</span>PortfolioTest
        </div>
        <div>
          <NavLinkList list={NAV_LINK_DATA} />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
