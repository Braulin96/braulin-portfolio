import "./NavLink.styles.scss";

type NavLinkProps = {
  onClick: () => void;
  link: string;
  isActive?: boolean;
};

const NavLink = ({ onClick, link, isActive = false }: NavLinkProps) => {
  return (
    <button
      data-testid="NavLink"
      onClick={onClick}
      className={`NavLink relative font-medium transition-colors duration-300 ${
        isActive
          ? "text-white after:w-full"
          : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"
      } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-blue after:transition-all after:duration-300 capitalize`}>
      {link}
    </button>
  );
};

export default NavLink;
