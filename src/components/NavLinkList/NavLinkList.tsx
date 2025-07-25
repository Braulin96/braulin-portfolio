import { useEffect, useState } from "react";

import NavLink from "components/NavLink/NavLink";
import "./NavLinkList.styles.scss";

type NavLinkListProps = {
  list: string[];
  onNavClick?: (section: string) => void;
  activeNav?: string;
  isMobile?: boolean;
};

const NavLinkList = ({
  onNavClick,
  activeNav = "home",
  list,
  isMobile = false,
}: NavLinkListProps) => {
  const [currentActiveNav, setCurrentActiveNav] = useState(activeNav);

  useEffect(() => {
    setCurrentActiveNav(activeNav);
  }, [activeNav]);

  const handleNavClick = (section: string) => {
    setCurrentActiveNav(section);

    if (onNavClick) {
      onNavClick(section);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <ul
      data-testid="NavLinkList"
      className={`NavLinkList ${
        isMobile
          ? "flex flex-col space-y-[40px] w-fit mx-auto"
          : "flex space-x-[40px]"
      }`}
      role="menubar"
      aria-label={
        isMobile ? "Mobile navigation menu" : "Desktop navigation menu"
      }>
      {list.map((item) => (
        <li key={item} role="none">
          <NavLink
            onClick={() => handleNavClick(item)}
            link={item}
            isActive={currentActiveNav === item}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavLinkList;
