import "./NavLink.styles.scss";

type NavLinkProps = {
  onClick: () => void;
  link: string;
  isActive?: boolean;
};

const NavLink = ({ onClick, link, isActive = false }: NavLinkProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <button
      data-testid="NavLink"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`NavLink relative font-medium transition-colors duration-300 cursor-pointer ${
        isActive
          ? "text-white after:w-full"
          : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"
      } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-blue after:transition-all after:duration-300 capitalize`}
      role="menuitem"
      aria-current={isActive ? "page" : undefined}
      aria-label={`Navigate to ${link} section`}
      tabIndex={0}>
      {link}
    </button>
  );
};

export default NavLink;
