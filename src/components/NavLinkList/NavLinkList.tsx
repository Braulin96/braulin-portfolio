import { useState } from "react";

import NavLink from "components/NavLink/NavLink";

import "./NavLinkList.styles.scss";

type NavLinkListProps = {
  list: string[];
  onNavClick?: (section: string) => void;
  activeNav?: string;
};

const NavLinkList = ({
  onNavClick,
  activeNav = "home",
  list,
}: NavLinkListProps) => {
  const [currentActiveNav, setCurrentActiveNav] = useState(activeNav);

  const handleNavClick = (section: string) => {
    setCurrentActiveNav(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Call parent callback if provided
    if (onNavClick) {
      onNavClick(section);
    }
  };

  return (
    <div data-testid="NavLinkList" className="NavLinkList flex space-x-[40px]">
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
