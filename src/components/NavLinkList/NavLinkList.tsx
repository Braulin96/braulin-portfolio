import { useState } from "react";

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

  const handleNavClick = (section: string) => {
    setCurrentActiveNav(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (onNavClick) {
      onNavClick(section);
    }
  };

  return (
    <div
      data-testid="NavLinkList"
      className={`NavLinkList ${
        isMobile
          ? "flex flex-col space-y-[40px] w-fit mx-auto"
          : "flex space-x-[40px]"
      }`}>
      {list.map((item) => (
        <NavLink
          key={item}
          onClick={() => handleNavClick(item)}
          link={item}
          isActive={currentActiveNav === item}
        />
      ))}
    </div>
  );
};
export default NavLinkList;
