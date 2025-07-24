import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import InputFormBlock from "components/InputFormBlock/InputFormBlock";
import ContactDetailsList from "components/ContactDetailsList/ContactDetailsList";
import SocialNetworkList from "components/SocialNetworkList/SocialNetworkList";

import "./Contact.styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Get In <span className="primary-blue">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <InputFormBlock />
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 h-full border border-indigo-500/20">
              <Title
                firstText="Contact Information"
                customClass="mb-6"
                size="xs"
              />
              <ContactDetailsList />
              <div className="mt-12">
                <Paragraph
                  text="Follow Me"
                  customClass="!font-bold !text-white  mb-4"
                />
                <SocialNetworkList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
