import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Paragraph from "./Paragraph";

describe("Paragraph Component", () => {
  test("renders correctly with required text prop", () => {
    render(<Paragraph text="Hello World" />);

    const component = screen.getByTestId("Paragraph");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS classes", () => {
    render(<Paragraph text="Test text" />);

    const component = screen.getByTestId("Paragraph");
    expect(component).toHaveClass("Paragraph");
    expect(component).toHaveClass("text-slate-300");
    expect(component).toHaveClass("md:text-lg");
    expect(component).toHaveClass("text-md");
  });

  test("renders text content correctly", () => {
    render(<Paragraph text="This is a test paragraph" />);

    expect(screen.getByText("This is a test paragraph")).toBeInTheDocument();
  });

  test("applies custom class when provided", () => {
    render(<Paragraph text="Test" customClass="custom-paragraph" />);

    const component = screen.getByTestId("Paragraph");
    expect(component).toHaveClass("Paragraph", "custom-paragraph");
  });

  test("applies multiple custom classes when provided", () => {
    render(
      <Paragraph text="Test" customClass="custom-paragraph another-class" />
    );

    const component = screen.getByTestId("Paragraph");
    expect(component).toHaveClass(
      "Paragraph",
      "custom-paragraph",
      "another-class"
    );
  });

  test("renders correctly without custom class", () => {
    render(<Paragraph text="Test" />);

    const component = screen.getByTestId("Paragraph");
    expect(component).toHaveClass("Paragraph");
    // Fix: Check for the actual className without "undefined"
    expect(component.className).toBe(
      "Paragraph text-slate-300 md:text-lg text-md "
    );
  });

  test("renders as paragraph element", () => {
    render(<Paragraph text="Test content" />);

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe("P");
  });

  test("handles empty text", () => {
    render(<Paragraph text="" />);

    const component = screen.getByTestId("Paragraph");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("");
  });

  test("handles long text content", () => {
    const longText =
      "This is a very long paragraph that tests how the component handles longer text content and ensures it renders correctly.";
    render(<Paragraph text={longText} />);

    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  test("works with all props together", () => {
    render(<Paragraph text="Complete test" customClass="full-paragraph" />);

    const component = screen.getByTestId("Paragraph");
    expect(component).toHaveClass("Paragraph", "full-paragraph");
    expect(component).toHaveTextContent("Complete test");
  });

  // Add tests for the new accessibility props
  test("applies aria-label when provided", () => {
    render(<Paragraph text="Test text" ariaLabel="Custom aria label" />);

    const component = screen.getByTestId("Paragraph");
    expect(component).toHaveAttribute("aria-label", "Custom aria label");
  });

  test("applies role when provided", () => {
    render(<Paragraph text="Test text" role="heading" />);

    const component = screen.getByTestId("Paragraph");
    expect(component).toHaveAttribute("role", "heading");
  });

  test("works with all accessibility props", () => {
    render(
      <Paragraph
        text="Accessible text"
        customClass="accessible-paragraph"
        ariaLabel="Accessible paragraph label"
        role="text"
      />
    );

    const component = screen.getByTestId("Paragraph");
    expect(component).toHaveClass("Paragraph", "accessible-paragraph");
    expect(component).toHaveAttribute(
      "aria-label",
      "Accessible paragraph label"
    );
    expect(component).toHaveAttribute("role", "text");
    expect(component).toHaveTextContent("Accessible text");
  });
});
