import "./SocialNetwork.styles.scss";

type SocialNetworkProps = {
  social: {
    icon: string;
    title: string;
    link: string;
  };
};

const SocialNetwork = ({ social }: SocialNetworkProps) => {
  return (
    <a
      data-testid="SocialNetwork"
      target="_blank"
      href={social.link}
      className="SocialNetwork size-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
      <img src={social.icon} alt={social.title} className="p-[10px]" />
    </a>
  );
};

export default SocialNetwork;
