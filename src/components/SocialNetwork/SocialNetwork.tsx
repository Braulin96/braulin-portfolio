import "./SocialNetwork.styles.scss";

type SocialNetworkProps = {
  social: {
    icon: string;
    title: string;
    link: string;
  };
};

const SocialNetwork = ({ social }: SocialNetworkProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.open(social.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <a
      data-testid="SocialNetwork"
      target="_blank"
      rel="noopener noreferrer"
      href={social.link}
      className="SocialNetwork size-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all"
      onKeyDown={handleKeyDown}
      aria-label={`Visit my ${social.title} profile (opens in new tab)`}
      tabIndex={0}>
      <img src={social.icon} alt="" className="p-[10px]" aria-hidden="true" />
    </a>
  );
};

export default SocialNetwork;
