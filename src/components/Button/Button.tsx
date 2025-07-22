// src/components/Button.tsx
type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
};

const Button = ({
  onClick,
  children = "Click here",
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 rounded font-medium transition-colors duration-200";
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-300",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:bg-gray-100",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
