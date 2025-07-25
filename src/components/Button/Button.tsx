type ButtonProps = {
  onClick: () => void;
  text: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
};

const Button = ({
  onClick,
  text,
  variant = "primary",
  disabled = false,
  className = "",
  ariaLabel,
  ariaDescribedBy,
}: ButtonProps) => {
  const baseClasses =
    "px-8 py-3 rounded-lg font-semibold transition-all text-white cursor-pointer";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:shadow-indigo-500/30 ",
    secondary:
      "bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/10",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!disabled) {
        onClick();
      }
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={buttonClasses}
      aria-label={ariaLabel || text}
      aria-describedby={ariaDescribedBy}
      tabIndex={0}>
      {text}
    </button>
  );
};

export default Button;
