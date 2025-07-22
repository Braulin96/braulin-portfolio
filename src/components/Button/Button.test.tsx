// src/components/__tests__/Button.test.tsx
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders with default text", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick} />);

    expect(screen.getByText("Click here")).toBeInTheDocument();
  });

  test("renders with custom children", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick}>Submit Form</Button>);

    expect(screen.getByText("Submit Form")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick}>Test Button</Button>);

    const button = screen.getByText("Test Button");
    fireEvent.click(button);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test("applies primary variant classes by default", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick} />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
    expect(button).toHaveClass("text-white");
  });

  test("applies secondary variant classes", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick} variant="secondary" />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-gray-200");
    expect(button).toHaveClass("text-gray-800");
  });

  test("is disabled when disabled prop is true", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick} disabled />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("does not call onClick when disabled", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick} disabled />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockClick).not.toHaveBeenCalled();
  });

  test("applies custom className", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick} className="custom-class" />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  test("renders JSX children correctly", () => {
    const mockClick = jest.fn();
    render(
      <Button onClick={mockClick}>
        <span>Icon</span> Click Me
      </Button>
    );

    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("has correct accessibility role", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick}>Accessible Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });
});
