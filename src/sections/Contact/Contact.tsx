import Title from "components/Title/Title";
import Subtitle from "components/Subtitle/Subtitle";
import Paragraph from "components/Paragraph/Paragraph";
import InputFormBlock from "components/InputFormBlock/InputFormBlock";
import ContactDetailsList from "components/ContactDetailsList/ContactDetailsList";
import SocialNetworkList from "components/SocialNetworkList/SocialNetworkList";
import FadeOnScroll from "utils/FadeOnScroll";

import "./Contact.styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="py-20  relative">
      <div className="container mx-auto px-4">
        <FadeOnScroll delay={100} className="text-center mb-16">
          <Subtitle
            firstText="Get In"
            secondText="Touch"
            customClass="mx-auto"
          />

          <Paragraph
            text="  Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!"
            customClass="mt-4 mx-auto !text-gray-400 !text-[16px] max-w-2xl"
          />
        </FadeOnScroll>

        <div className="flex flex-col lg:flex-row gap-12">
          <FadeOnScroll delay={500} className="lg:w-1/2">
            <InputFormBlock />
          </FadeOnScroll>

          <FadeOnScroll delay={800} className="lg:w-1/2">
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
          </FadeOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
