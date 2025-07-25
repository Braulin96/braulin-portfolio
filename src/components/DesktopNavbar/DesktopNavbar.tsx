import NavLinkList from "components/NavLinkList/NavLinkList";

import { NAV_LINK_DATA } from "constants/NavLinkData";

import "./DesktopNavbar.styles.scss";

type DesktopNavbarProps = {
  activeNav: string;
  onNavClick: (sectionId: string) => void;
};

const DesktopNavbar = ({ activeNav, onNavClick }: DesktopNavbarProps) => {
  return (
    <nav
      data-testid="DesktopNavbar"
      className="fixed DesktopNavbar w-full z-50 bg-slate-800/80 backdrop-blur-sm py-4 border-b border-indigo-500/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-[22px] font-bold">
          <span className="primary-blue">Dev</span>Portfolio
        </div>
        <div>
          <NavLinkList
            list={NAV_LINK_DATA}
            activeNav={activeNav}
            onNavClick={onNavClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
