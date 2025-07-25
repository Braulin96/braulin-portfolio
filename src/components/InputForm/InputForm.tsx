import Button from "components/Button/Button";
import Input from "components/Input/Input";

import "./InputForm.styles.scss";

type InputFormProps = {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleContactSubmit: () => void;
  isLoading?: boolean;
};

const InputForm = ({
  formData,
  handleInputChange,
  handleContactSubmit,
  isLoading = false,
}: InputFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleContactSubmit();
  };

  return (
    <form
      data-testid="InputForm"
      className="InputForm space-y-6 w-full"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form with name, email, subject and message fields">
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <legend className="sr-only">Personal Information</legend>
        <Input
          isRequired
          label="Name"
          type="text"
          formData={formData}
          handleInputChange={handleInputChange}
          ariaLabel="Enter your full name"
          ariaDescribedBy="name-help"
        />
        <Input
          isRequired
          label="Email"
          type="email"
          formData={formData}
          handleInputChange={handleInputChange}
          ariaLabel="Enter your email address"
          ariaDescribedBy="email-help"
        />
      </fieldset>

      <Input
        label="Subject"
        type="text"
        formData={formData}
        handleInputChange={handleInputChange}
        ariaLabel="Enter the subject of your message (optional)"
        ariaDescribedBy="subject-help"
      />

      <Input
        isRequired
        label="Message"
        type="textarea"
        formData={formData}
        handleInputChange={handleInputChange}
        ariaLabel="Enter your message or inquiry"
        ariaDescribedBy="message-help"
      />

      <Button
        disabled={isLoading}
        variant="secondary"
        onClick={handleContactSubmit}
        text={isLoading ? "Sending..." : "Send Message"}
        ariaLabel={
          isLoading
            ? "Sending your message, please wait"
            : "Send your message to Braulin"
        }
        type="submit"
      />
    </form>
  );
};

export default InputForm;
