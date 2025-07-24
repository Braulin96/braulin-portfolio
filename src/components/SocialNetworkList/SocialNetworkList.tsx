import "./SocialNetworkList.styles.scss";

import SocialNetwork from "components/SocialNetwork/SocialNetwork";

import { SOCIAL_NETWORK_DATA } from "constants/SocialNetworkData";

const SocialNetworkList = () => {
  return (
    <div
      data-testid="SocialNetworkList"
      className="SocialNetworkList flex space-x-4">
      {SOCIAL_NETWORK_DATA.map((social, index) => (
        <SocialNetwork key={index} social={social} />
      ))}
    </div>
  );
};

export default SocialNetworkList;
