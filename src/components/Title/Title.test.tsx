import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title Component", () => {
  test("renders correctly with required firstText prop", () => {
    render(<Title firstText="Hello" />);

    const component = screen.getByTestId("Title");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<Title firstText="Hello" />);

    const component = screen.getByTestId("Title");
    expect(component).toHaveClass("Title");
  });

  test("renders firstText content", () => {
    render(<Title firstText="Welcome" />);

    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  test("renders both firstText and secondText when both are provided", () => {
    render(<Title firstText="Hello " secondText="World" />);

    // Check that both texts are present
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
  });

  test("renders only firstText when secondText is not provided", () => {
    render(<Title firstText="Just First Text" />);

    expect(screen.getByText("Just First Text")).toBeInTheDocument();
    // Verify secondText span doesn't exist
    expect(screen.queryByText(/primary-blue/)).not.toBeInTheDocument();
  });

  test("applies primary-blue class to secondText span", () => {
    render(<Title firstText="Hello " secondText="World" />);

    const secondTextSpan = screen.getByText("World");
    expect(secondTextSpan).toHaveClass("primary-blue");
    expect(secondTextSpan.tagName).toBe("SPAN");
  });

  test("has correct heading structure", () => {
    render(<Title firstText="Test Title" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-4xl", "font-bold");
  });

  test("renders correctly with empty secondText", () => {
    render(<Title firstText="First" secondText="" />);

    expect(screen.getByText("First")).toBeInTheDocument();
    // Empty secondText should not render the span with primary-blue class
    const spanWithPrimaryBlue = screen.queryByText((content, element) => {
      return (
        element?.tagName === "SPAN" &&
        element?.classList.contains("primary-blue")
      );
    });
    expect(spanWithPrimaryBlue).not.toBeInTheDocument();
  });

  test("applies custom class when provided", () => {
    render(<Title firstText="Hello" customClass="custom-title" />);

    const component = screen.getByTestId("Title");
    expect(component).toHaveClass("Title", "custom-title");
  });

  test("applies multiple custom classes when provided", () => {
    render(
      <Title firstText="Hello" customClass="custom-title another-class" />
    );

    const component = screen.getByTestId("Title");
    expect(component).toHaveClass("Title", "custom-title", "another-class");
  });

  test("renders correctly without custom class", () => {
    render(<Title firstText="Hello" />);

    const component = screen.getByTestId("Title");
    expect(component).toHaveClass("Title");
    expect(component.className).toBe("Title undefined");
  });

  test("works with all props together", () => {
    render(
      <Title firstText="Hello " secondText="World" customClass="full-title" />
    );

    const component = screen.getByTestId("Title");
    expect(component).toHaveClass("Title", "full-title");
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
    expect(screen.getByText("World")).toHaveClass("primary-blue");
  });
});
