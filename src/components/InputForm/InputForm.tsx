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
  return (
    <div data-testid="InputForm" className="InputForm space-y-6  w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          isRequired
          label="Name"
          type="text"
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <Input
          isRequired
          label="Email"
          type="email"
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </div>

      <Input
        label="Subject"
        type="text"
        formData={formData}
        handleInputChange={handleInputChange}
      />

      <Input
        isRequired
        label="Message"
        type="textarea"
        formData={formData}
        handleInputChange={handleInputChange}
      />

      <Button
        disabled={isLoading}
        variant="secondary"
        onClick={handleContactSubmit}
        text={isLoading ? "Sending..." : "Send Message"}
      />
    </div>
  );
};

export default InputForm;
