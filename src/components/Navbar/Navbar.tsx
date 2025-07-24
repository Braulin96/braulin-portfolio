import { useMediaQuery } from "react-responsive";

import DesktopNavbar from "components/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "components/MobileNavbar/MobileNavbar";

import "./Navbar.styles.scss";

type NavbarProps = {
  activeNav: string;
  onNavClick: (sectionId: string) => void;
};

const Navbar = ({ activeNav, onNavClick }: NavbarProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div data-testid="Navbar" className="Navbar">
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <DesktopNavbar activeNav={activeNav} onNavClick={onNavClick} />
      )}
    </div>
  );
};

export default Navbar;
