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
    <section
      id="contact"
      className="py-20 relative"
      aria-label="Contact information and message form">
      <div className="container mx-auto px-4">
        <FadeOnScroll delay={100} className="text-center md:mb-16 mb-8">
          <Subtitle
            firstText="Let’s Build "
            secondText="Something Together"
            customClass="mx-auto"
            ariaLabel="Get in touch section heading"
            headingLevel="h2"
          />

          <Paragraph
            text="Whether you have a project in mind, want to brainstorm, or just want to connect — I’d love to hear from you. Let’s talk about how we can bring ideas to life together."
            customClass="mt-8 mx-auto !text-gray-400 !text-[16px] max-w-2xl"
            ariaLabel="Contact section description and invitation to reach out"
          />
        </FadeOnScroll>

        <div
          className="flex flex-col lg:flex-row gap-12 "
          role="group"
          aria-label="Contact form and contact information">
          <FadeOnScroll
            delay={500}
            className="lg:w-1/2"
            aria-label="Contact form section">
            <InputFormBlock />
          </FadeOnScroll>

          <FadeOnScroll
            delay={800}
            className="lg:w-1/2"
            aria-label="Contact information and social media">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 h-full border border-indigo-500/20">
              <Title
                firstText="Contact Information"
                customClass="mb-6"
                size="xs"
                headingLevel="h3"
                ariaLabel="Contact information heading"
              />
              <ContactDetailsList />

              <div className="mt-12">
                <Paragraph
                  text="Follow Me"
                  customClass="!font-bold !text-white mb-4"
                  ariaLabel="Social media links heading"
                  role="heading"
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
