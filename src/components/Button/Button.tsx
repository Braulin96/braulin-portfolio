type ButtonProps = {
  onClick: () => void;
  text: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
};

const Button = ({
  onClick,
  text,
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "px-8 py-3 rounded-lg font-semibold transition-all text-white cursor-pointer";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:shadow-indigo-500/30",
    secondary:
      "bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/10",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
