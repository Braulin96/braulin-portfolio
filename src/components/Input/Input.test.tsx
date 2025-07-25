import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input Component", () => {
  const mockFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const mockHandleInputChange = jest.fn();

  const defaultProps = {
    formData: mockFormData,
    label: "Name",
    handleInputChange: mockHandleInputChange,
  };

  beforeEach(() => {
    mockHandleInputChange.mockClear();
  });

  test("renders correctly", () => {
    render(<Input {...defaultProps} />);

    const component = screen.getByTestId("Input");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<Input {...defaultProps} />);

    const component = screen.getByTestId("Input");
    expect(component).toHaveClass("Input");
  });

  test("renders label correctly", () => {
    render(<Input {...defaultProps} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Name (optional)")).toBeInTheDocument();
  });

  test("renders text input by default", () => {
    render(<Input {...defaultProps} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe("INPUT");
    expect(input).toHaveAttribute("type", "text");
  });

  test("renders email input when type is email", () => {
    render(<Input {...defaultProps} type="email" label="Email" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  test("renders textarea when type is textarea", () => {
    render(<Input {...defaultProps} type="textarea" label="Message" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea.tagName).toBe("TEXTAREA");
    expect(textarea).toHaveAttribute("rows", "5");
  });

  test("shows required indicator when isRequired is true", () => {
    render(<Input {...defaultProps} isRequired />);

    const requiredIndicator = screen.getByText("*");
    expect(requiredIndicator).toBeInTheDocument();
    expect(requiredIndicator).toHaveAttribute("aria-label", "required field");
  });

  test("does not show required indicator when isRequired is false", () => {
    render(<Input {...defaultProps} isRequired={false} />);

    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  test("has correct placeholder text", () => {
    render(<Input {...defaultProps} label="Name" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Your name");
  });

  test("has correct placeholder for email", () => {
    render(<Input {...defaultProps} label="Email" type="email" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "your.email@example.com");
  });

  test("has correct placeholder for subject", () => {
    render(<Input {...defaultProps} label="Subject" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "What's this about?");
  });

  test("has correct placeholder for message", () => {
    render(<Input {...defaultProps} label="Message" type="textarea" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute(
      "placeholder",
      "Tell me about your project or inquiry..."
    );
  });

  test("displays form data value", () => {
    const formDataWithValue = {
      name: "John Doe",
      email: "",
      subject: "",
      message: "",
    };

    render(
      <Input {...defaultProps} formData={formDataWithValue} label="Name" />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("John Doe");
  });

  test("calls handleInputChange when input value changes", async () => {
    const user = userEvent.setup();
    render(<Input {...defaultProps} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "test");

    expect(mockHandleInputChange).toHaveBeenCalled();
  });

  test("has correct accessibility attributes", () => {
    render(<Input {...defaultProps} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "input-name");
    expect(input).toHaveAttribute("name", "name");
    expect(input).toHaveAttribute("aria-label", "Name (optional)");
    expect(input).toHaveAttribute("aria-describedby", "name-help");
    expect(input).toHaveAttribute("aria-invalid", "false");
  });

  test("has correct accessibility attributes when required", () => {
    render(<Input {...defaultProps} isRequired />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-label", "Name (required)");
    expect(input).toHaveAttribute("required");
  });

  test("applies custom aria-label when provided", () => {
    render(<Input {...defaultProps} ariaLabel="Custom name input" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-label", "Custom name input");
  });

  test("applies custom aria-describedby when provided", () => {
    render(<Input {...defaultProps} ariaDescribedBy="custom-description" />);

    const input = screen.getByRole("textbox");
    expect(input.getAttribute("aria-describedby")).toContain(
      "custom-description"
    );
  });

  test("has correct label association", () => {
    render(<Input {...defaultProps} />);

    const label = screen.getByText("Name");
    const input = screen.getByRole("textbox");

    expect(label).toHaveAttribute("for", "input-name");
    expect(input).toHaveAttribute("id", "input-name");
  });

  test("has help text element", () => {
    render(<Input {...defaultProps} />);

    const helpText = document.getElementById("name-help");
    expect(helpText).toBeInTheDocument();
    expect(helpText).toHaveClass("sr-only");
    expect(helpText).toHaveAttribute("aria-live", "polite");
    expect(helpText).toHaveTextContent(
      "Enter your full name so I know who I'm talking to"
    );
  });

  test("has correct styling classes for input", () => {
    render(<Input {...defaultProps} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass(
      "w-full",
      "bg-slate-800",
      "border",
      "border-slate-500",
      "rounded-lg",
      "px-4",
      "py-3",
      "focus:outline-none",
      "focus:border-primary-blue",
      "focus:ring-2",
      "focus:ring-primary-blue/20",
      "transition-all",
      "text-white"
    );
  });

  test("has correct styling classes for textarea", () => {
    render(<Input {...defaultProps} type="textarea" label="Message" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("resize-none");
  });

  test("works with different field names", () => {
    const formData = {
      name: "",
      email: "test@example.com",
      subject: "Test Subject",
      message: "Test Message",
    };

    // Test email field
    render(
      <Input
        formData={formData}
        label="Email"
        type="email"
        handleInputChange={mockHandleInputChange}
      />
    );

    const emailInput = screen.getByRole("textbox");
    expect(emailInput).toHaveValue("test@example.com");
    expect(emailInput).toHaveAttribute("id", "input-email");
  });

  test("handles empty form data gracefully", () => {
    const emptyFormData = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    render(
      <Input
        formData={emptyFormData}
        label="Name"
        handleInputChange={mockHandleInputChange}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
  });

  test("generates correct field ID for different labels", () => {
    render(<Input {...defaultProps} label="Email Address" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "input-email address");
  });

  test("has correct help text for different fields", () => {
    // Test email help text
    render(<Input {...defaultProps} label="Email" />);

    const emailHelpText = document.getElementById("email-help");
    expect(emailHelpText).toHaveTextContent(
      "I'll use this to respond to your message"
    );
  });

  test("textarea has correct attributes", () => {
    render(
      <Input {...defaultProps} type="textarea" label="Message" isRequired />
    );

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("rows", "5");
    expect(textarea).toHaveAttribute("required");
    expect(textarea).toHaveClass("resize-none");
  });
});
