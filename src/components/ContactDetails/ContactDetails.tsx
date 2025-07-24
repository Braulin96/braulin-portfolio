import "./ContactDetails.styles.scss";

type ContactDetailsProps = {
  contact: {
    icon: string;
    title: string;
    info: string;
  };
};

const ContactDetails = ({ contact }: ContactDetailsProps) => {
  return (
    <div
      data-testid="ContactDetails"
      className="ContactDetails flex items-start">
      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
        <i className={contact.icon}></i>
        <img src={contact.icon} alt={contact.title} className="" />
      </div>
      <div>
        <h4 className="font-bold mb-1">{contact.title}</h4>
        <p className="text-gray-400">{contact.info}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
