import ContactDetails from "components/ContactDetails/ContactDetails";

import "./ContactDetailsList.styles.scss";

import { CONTACT_DETAILS_DATA } from "constants/ContactDetailsData";

const ContactDetailsList = () => {
  return (
    <div
      data-testid="ContactDetailsList"
      className="ContactDetailsList space-y-6">
      {CONTACT_DETAILS_DATA.map((contact, index) => (
        <ContactDetails key={index} contact={contact} />
      ))}
    </div>
  );
};

export default ContactDetailsList;
