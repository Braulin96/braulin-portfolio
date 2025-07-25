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
  ariaLabel?: string;
  ariaDescribedBy?: string;
};

const Input = ({
  formData,
  handleInputChange,
  label,
  isRequired = false,
  type = "text",
  ariaLabel,
  ariaDescribedBy,
}: InputProps) => {
  const fieldName = label.toLowerCase();
  const fieldId = `input-${fieldName}`;
  const helpId = `${fieldName}-help`;

  const getPlaceholder = (): string => {
    const placeholders: Record<string, string> = {
      name: "Your name",
      email: "your.email@example.com",
      subject: "What's this about?",
      message: "Tell me about your project or inquiry...",
    };

    return placeholders[fieldName] || `Your ${label}${isRequired ? " *" : ""}`;
  };

  const getHelpText = (): string => {
    const helpTexts: Record<string, string> = {
      name: "Enter your full name so I know who I'm talking to",
      email: "I'll use this to respond to your message",
      subject: "Optional: Help me understand what this is about",
      message: "Tell me about your project, question, or how I can help",
    };

    return helpTexts[fieldName] || "";
  };

  return (
    <div data-testid="Input" className="Input">
      <label
        htmlFor={fieldId}
        className="block text-slate-300 mb-2 font-medium">
        {label}
        {isRequired && (
          <span className="text-red-400 ml-1" aria-label="required field">
            *
          </span>
        )}
      </label>

      {type === "textarea" ? (
        <textarea
          id={fieldId}
          name={fieldName}
          value={formData[fieldName as keyof typeof formData] || ""}
          onChange={handleInputChange}
          rows={5}
          className="w-full bg-slate-800 border border-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all text-white resize-none"
          placeholder={getPlaceholder()}
          required={isRequired}
          aria-label={
            ariaLabel || `${label} ${isRequired ? "(required)" : "(optional)"}`
          }
          aria-describedby={`${helpId} ${ariaDescribedBy || ""}`.trim()}
          aria-invalid="false"
        />
      ) : (
        <input
          id={fieldId}
          type={type === "email" ? "email" : "text"}
          name={fieldName}
          value={formData[fieldName as keyof typeof formData] || ""}
          onChange={handleInputChange}
          className="w-full bg-slate-800 border border-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all text-white"
          placeholder={getPlaceholder()}
          required={isRequired}
          aria-label={
            ariaLabel || `${label} ${isRequired ? "(required)" : "(optional)"}`
          }
          aria-describedby={`${helpId} ${ariaDescribedBy || ""}`.trim()}
          aria-invalid="false"
        />
      )}

      <div id={helpId} className="sr-only" aria-live="polite">
        {getHelpText()}
      </div>
    </div>
  );
};

export default Input;
