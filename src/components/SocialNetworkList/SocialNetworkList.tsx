import "./SocialNetworkList.styles.scss";

import SocialNetwork from "components/SocialNetwork/SocialNetwork";

import { SOCIAL_NETWORK_DATA } from "constants/SocialNetworkData";

const SocialNetworkList = () => {
  return (
    <nav
      data-testid="SocialNetworkList"
      className="SocialNetworkList flex space-x-4"
      role="navigation"
      aria-label="Social media profiles and professional networks">
      <ul className="flex space-x-4" role="list">
        {SOCIAL_NETWORK_DATA.map((social, index) => (
          <li key={index} role="listitem">
            <SocialNetwork social={social} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialNetworkList;
