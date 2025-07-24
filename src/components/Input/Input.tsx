import "./Input.styles.scss";

type InputProps = {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  label: string;
  isRequired?: boolean;
  type?: "text" | "email" | "textarea";
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Input = ({
  formData,
  handleInputChange,
  label,
  isRequired = false,
  type = "text",
}: InputProps) => {
  const getPlaceholder = (): string => {
    const fieldName = label.toLowerCase();

    const placeholders: Record<string, string> = {
      name: "Your name",
      email: "your.email@example.com",
      subject: "What's this about?",
      message: "Tell me about your project or inquiry...",
    };

    return placeholders[fieldName] || `Your ${label}${isRequired ? " *" : ""}`;
  };

  return (
    <div data-testid="Input" className="Input">
      <label className="block text-slate-300 mb-2">
        {label}
        {isRequired && " *"}
      </label>

      {type === "textarea" ? (
        <textarea
          name={label.toLowerCase()}
          value={formData[label.toLowerCase() as keyof typeof formData] || ""}
          onChange={handleInputChange}
          rows={5}
          className="w-full bg-slate-800 border border-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue transition-colors text-white resize-none"
          placeholder={getPlaceholder()}
          required={isRequired}
        />
      ) : (
        <input
          type={type === "email" ? "email" : "text"}
          name={label.toLowerCase()}
          value={formData[label.toLowerCase() as keyof typeof formData] || ""}
          onChange={handleInputChange}
          className="w-full bg-slate-800 border border-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue transition-colors text-white"
          placeholder={getPlaceholder()}
          required={isRequired}
        />
      )}
    </div>
  );
};

export default Input;
