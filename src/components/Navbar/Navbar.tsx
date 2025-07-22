import { useMediaQuery } from "react-responsive";

import DesktopNavbar from "components/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "components/MobileNavbar/MobileNavbar";

import "./Navbar.styles.scss";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div data-testid="Navbar" className="Navbar">
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
};

export default Navbar;
