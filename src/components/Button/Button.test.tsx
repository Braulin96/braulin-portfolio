import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button Component", () => {
  const mockClick = jest.fn();

  beforeEach(() => {
    mockClick.mockClear();
  });

  test("renders with text prop", () => {
    render(<Button onClick={mockClick} text="Click here" />);

    expect(screen.getByText("Click here")).toBeInTheDocument();
  });

  test("renders with custom text", () => {
    render(<Button onClick={mockClick} text="Submit Form" />);

    expect(screen.getByText("Submit Form")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    render(<Button onClick={mockClick} text="Test Button" />);

    const button = screen.getByText("Test Button");
    fireEvent.click(button);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test("applies primary variant classes by default", () => {
    render(<Button onClick={mockClick} text="Primary Button" />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-gradient-to-r");
    expect(button).toHaveClass("from-indigo-500");
    expect(button).toHaveClass("to-purple-600");
    expect(button).toHaveClass("text-white");
  });

  test("applies secondary variant classes", () => {
    render(
      <Button onClick={mockClick} text="Secondary Button" variant="secondary" />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-transparent");
    expect(button).toHaveClass("border-2");
    expect(button).toHaveClass("border-indigo-500");
    expect(button).toHaveClass("text-indigo-500");
  });

  test("is disabled when disabled prop is true", () => {
    render(<Button onClick={mockClick} text="Disabled Button" disabled />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50");
    expect(button).toHaveClass("cursor-not-allowed");
  });

  test("does not call onClick when disabled", () => {
    render(<Button onClick={mockClick} text="Disabled Button" disabled />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockClick).not.toHaveBeenCalled();
  });

  test("applies custom className", () => {
    render(
      <Button
        onClick={mockClick}
        text="Custom Button"
        className="custom-class"
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  test("has correct accessibility role", () => {
    render(<Button onClick={mockClick} text="Accessible Button" />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });

  // New tests for accessibility features
  test("has default aria-label from text", () => {
    render(<Button onClick={mockClick} text="Default Label" />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Default Label");
  });

  test("applies custom aria-label when provided", () => {
    render(
      <Button
        onClick={mockClick}
        text="Button Text"
        ariaLabel="Custom accessibility label"
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Custom accessibility label");
  });

  test("applies aria-describedby when provided", () => {
    render(
      <Button
        onClick={mockClick}
        text="Button Text"
        ariaDescribedBy="button-description"
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-describedby", "button-description");
  });

  test("has correct button type", () => {
    render(<Button onClick={mockClick} text="Button" type="submit" />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  test("defaults to button type", () => {
    render(<Button onClick={mockClick} text="Button" />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });

  test("has correct base classes", () => {
    render(<Button onClick={mockClick} text="Base Button" />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "px-6",
      "py-3",
      "rounded-lg",
      "font-semibold",
      "transition-all",
      "cursor-pointer"
    );
  });

  test("handles keyboard navigation - Enter key", async () => {
    render(<Button onClick={mockClick} text="Keyboard Button" />);

    const button = screen.getByRole("button");

    // Use fireEvent.keyDown to avoid triggering both click and keydown
    fireEvent.keyDown(button, { key: "Enter", code: "Enter" });

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test("handles keyboard navigation - Space key", async () => {
    render(<Button onClick={mockClick} text="Keyboard Button" />);

    const button = screen.getByRole("button");

    // Use fireEvent.keyDown to avoid triggering both click and keydown
    fireEvent.keyDown(button, { key: " ", code: "Space" });

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick on keyboard events when disabled", () => {
    render(<Button onClick={mockClick} text="Disabled Button" disabled />);

    const button = screen.getByRole("button");

    fireEvent.keyDown(button, { key: "Enter" });
    fireEvent.keyDown(button, { key: " " });

    expect(mockClick).not.toHaveBeenCalled();
  });

  test("has tabIndex 0 for keyboard navigation", () => {
    render(<Button onClick={mockClick} text="Focusable Button" />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("tabIndex", "0");
  });

  test("applies hover classes for primary variant", () => {
    render(
      <Button onClick={mockClick} text="Primary Button" variant="primary" />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("shadow-lg");
    expect(button).toHaveClass("hover:shadow-indigo-500/30");
  });

  test("applies hover classes for secondary variant", () => {
    render(
      <Button onClick={mockClick} text="Secondary Button" variant="secondary" />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("hover:bg-indigo-500/10");
  });

  test("works with all props together", () => {
    render(
      <Button
        onClick={mockClick}
        text="Complete Button"
        type="submit"
        variant="secondary"
        className="extra-class"
        ariaLabel="Complete test button"
        ariaDescribedBy="button-help"
        disabled={false}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Complete Button");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveClass("bg-transparent", "extra-class");
    expect(button).toHaveAttribute("aria-label", "Complete test button");
    expect(button).toHaveAttribute("aria-describedby", "button-help");
    expect(button).not.toBeDisabled();
  });

  test("handles multiple className values", () => {
    render(
      <Button
        onClick={mockClick}
        text="Multi Class Button"
        className="class1 class2 class3"
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("class1", "class2", "class3");
  });

  test("reset type button works correctly", () => {
    render(<Button onClick={mockClick} text="Reset Button" type="reset" />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "reset");
  });
});
