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

  // Fixed: Updated to check for correct gradient classes instead of primary-blue
  test("applies gradient classes to secondText span by default", () => {
    render(<Title firstText="Hello " secondText="World" />);

    const secondTextSpan = screen.getByText("World");
    expect(secondTextSpan).toHaveClass(
      "ml-[12px]",
      "bg-gradient-to-r",
      "from-primary-blue",
      "to-secondary-purple",
      "text-transparent",
      "bg-clip-text"
    );
    expect(secondTextSpan.tagName).toBe("SPAN");
  });

  // Fixed: Test for lg size which uses primary-blue class
  test("applies primary-blue class to secondText span when size is lg", () => {
    render(<Title firstText="Hello " secondText="World" size="lg" />);

    const secondTextSpan = screen.getByText("World");
    expect(secondTextSpan).toHaveClass("ml-[12px]", "primary-blue");
    expect(secondTextSpan.tagName).toBe("SPAN");
  });

  // Fixed: Updated to check for correct default md size classes
  test("has correct heading structure", () => {
    render(<Title firstText="Test Title" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-2xl", "md:text-4xl", "font-bold");
  });

  test("renders correctly with empty secondText", () => {
    render(<Title firstText="First" secondText="" />);

    expect(screen.getByText("First")).toBeInTheDocument();
    // Empty secondText should not render the span
    const spanWithGradient = screen.queryByText((content, element) => {
      return (
        element?.tagName === "SPAN" &&
        element?.classList.contains("bg-gradient-to-r")
      );
    });
    expect(spanWithGradient).not.toBeInTheDocument();
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

  // Fixed: Updated to check for gradient classes instead of primary-blue
  test("works with all props together", () => {
    render(
      <Title firstText="Hello " secondText="World" customClass="full-title" />
    );

    const component = screen.getByTestId("Title");
    expect(component).toHaveClass("Title", "full-title");
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
    expect(screen.getByText("World")).toHaveClass("bg-gradient-to-r");
  });

  // New tests for accessibility features
  test("has correct default heading level", () => {
    render(<Title firstText="Test" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test("uses custom heading level when provided", () => {
    render(<Title firstText="Test" headingLevel="h2" />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H2");
  });

  test("applies custom aria-label when provided", () => {
    render(
      <Title firstText="Hello" secondText="World" ariaLabel="Custom label" />
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveAttribute("aria-label", "Custom label");
  });

  test("generates default aria-label from text content", () => {
    render(<Title firstText="Hello" secondText="World" />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveAttribute("aria-label", "Hello World");
  });

  test("secondText span has accessibility label", () => {
    render(<Title firstText="Hello" secondText="World" />);

    const secondTextSpan = screen.getByText("World");
    expect(secondTextSpan).toHaveAttribute(
      "aria-label",
      "emphasized text: World"
    );
  });

  // Test different sizes
  test("applies correct classes for xs size", () => {
    render(<Title firstText="Test" size="xs" />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveClass("md:text-xl", "text-lg", "font-bold");
  });

  test("applies correct classes for sm size", () => {
    render(<Title firstText="Test" size="sm" />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveClass("md:text-2xl", "text-xl", "font-bold");
  });

  test("applies correct classes for lg size", () => {
    render(<Title firstText="Test" size="lg" />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveClass("text-4xl", "md:text-6xl", "font-bold");
  });

  test("lg size uses primary-blue class for secondText", () => {
    render(<Title firstText="Hello" secondText="World" size="lg" />);

    const secondTextSpan = screen.getByText("World");
    expect(secondTextSpan).toHaveClass("primary-blue");
    expect(secondTextSpan).not.toHaveClass("bg-gradient-to-r");
  });

  test("non-lg sizes use gradient classes for secondText", () => {
    render(<Title firstText="Hello" secondText="World" size="sm" />);

    const secondTextSpan = screen.getByText("World");
    expect(secondTextSpan).toHaveClass(
      "bg-gradient-to-r",
      "from-primary-blue",
      "to-secondary-purple"
    );
    expect(secondTextSpan).not.toHaveClass("primary-blue");
  });

  test("works with different heading levels", () => {
    const { rerender } = render(<Title firstText="Test" headingLevel="h3" />);

    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();

    rerender(<Title firstText="Test" headingLevel="h5" />);
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });

  test("handles only firstText with custom aria-label", () => {
    render(<Title firstText="Hello" ariaLabel="Just hello" />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveAttribute("aria-label", "Just hello");
    expect(heading).toHaveTextContent("Hello");
  });
});
