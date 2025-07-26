import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Subtitle from "./Subtitle";

describe("Subtitle Component", () => {
  const defaultProps = {
    firstText: "Test",
  };

  test("renders correctly with required firstText prop", () => {
    render(<Subtitle {...defaultProps} />);
    const component = screen.getByTestId("Subtitle");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<Subtitle {...defaultProps} />);
    const component = screen.getByTestId("Subtitle");
    expect(component).toHaveClass("Subtitle");
  });

  test("renders firstText content", () => {
    render(<Subtitle firstText="About" />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  test("renders both firstText and secondText when both are provided", () => {
    render(<Subtitle firstText="About" secondText="Me" />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Me")).toBeInTheDocument();
  });

  test("renders only firstText when secondText is not provided", () => {
    render(<Subtitle firstText="About" />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.queryByText("Me")).not.toBeInTheDocument();
  });

  test("applies primary-blue class to secondText span", () => {
    render(<Subtitle firstText="About" secondText="Me" />);
    const secondTextSpan = screen.getByText("Me");
    expect(secondTextSpan).toHaveClass("text-primary-blue", "ml-2");
    expect(secondTextSpan.tagName).toBe("SPAN");
  });

  test("has correct default heading structure", () => {
    render(<Subtitle firstText="Test Subtitle" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-3xl", "font-bold", "mb-4");
  });

  test("uses custom heading level when provided", () => {
    render(<Subtitle firstText="Test" headingLevel="h3" />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H3");
  });

  test("has correct container styling classes", () => {
    render(<Subtitle {...defaultProps} />);
    const component = screen.getByTestId("Subtitle");
    expect(component).toHaveClass("Subtitle", "w-fit");
  });

  test("applies custom class when provided", () => {
    render(<Subtitle firstText="Test" customClass="custom-subtitle" />);
    const component = screen.getByTestId("Subtitle");
    expect(component).toHaveClass("Subtitle", "w-fit", "custom-subtitle");
  });

  test("applies multiple custom classes when provided", () => {
    render(
      <Subtitle firstText="Test" customClass="custom-subtitle another-class" />
    );
    const component = screen.getByTestId("Subtitle");
    expect(component).toHaveClass(
      "Subtitle",
      "w-fit",
      "custom-subtitle",
      "another-class"
    );
  });

  test("renders decorative line element", () => {
    render(<Subtitle {...defaultProps} />);
    const decorativeLine = document.querySelector(
      '[role="presentation"]'
    ) as HTMLElement;
    expect(decorativeLine).toBeInTheDocument();
    expect(decorativeLine).toHaveClass(
      "w-20",
      "h-1",
      "bg-gradient-to-r",
      "from-indigo-500",
      "to-purple-600",
      "mx-auto"
    );
    expect(decorativeLine).toHaveAttribute("aria-hidden", "true");
  });

  test("has correct default aria-label from text content", () => {
    render(<Subtitle firstText="About" secondText="Me" />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveAttribute("aria-label", "About Me");
  });

  test("applies custom aria-label when provided", () => {
    render(
      <Subtitle firstText="About" secondText="Me" ariaLabel="Custom label" />
    );
    const heading = screen.getByRole("heading");
    expect(heading).toHaveAttribute("aria-label", "Custom label");
  });

  test("generates correct aria-label with only firstText", () => {
    render(<Subtitle firstText="Projects" />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveAttribute("aria-label", "Projects");
  });

  test("secondText span has accessibility label", () => {
    render(<Subtitle firstText="My" secondText="Skills" />);
    const secondTextSpan = screen.getByText("Skills");
    expect(secondTextSpan).toHaveAttribute(
      "aria-label",
      "highlighted text: Skills"
    );
  });

  test("works with different heading levels", () => {
    const { rerender } = render(
      <Subtitle firstText="Test" headingLevel="h1" />
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();

    rerender(<Subtitle firstText="Test" headingLevel="h4" />);
    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();

    rerender(<Subtitle firstText="Test" headingLevel="h6" />);
    expect(screen.getByRole("heading", { level: 6 })).toBeInTheDocument();
  });

  test("handles empty secondText gracefully", () => {
    render(<Subtitle firstText="About" secondText="" />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.queryByText("text-primary-blue")).not.toBeInTheDocument();
  });

  test("works with all props together", () => {
    render(
      <Subtitle
        firstText="My"
        secondText="Projects"
        customClass="complete-subtitle"
        ariaLabel="My projects section"
        headingLevel="h3"
      />
    );
    const component = screen.getByTestId("Subtitle");
    const heading = screen.getByRole("heading", { level: 3 });
    const secondTextSpan = screen.getByText("Projects");

    expect(component).toHaveClass("Subtitle", "w-fit", "complete-subtitle");
    expect(heading).toHaveAttribute("aria-label", "My projects section");
    expect(heading.tagName).toBe("H3");
    expect(secondTextSpan).toHaveClass("text-primary-blue", "ml-2");
  });

  test("decorative line is properly hidden from screen readers", () => {
    render(<Subtitle {...defaultProps} />);
    const decorativeLine = document.querySelector(
      '[aria-hidden="true"]'
    ) as HTMLElement;
    expect(decorativeLine).toBeInTheDocument();
    expect(decorativeLine).toHaveAttribute("role", "presentation");
  });

  test("heading has correct styling regardless of level", () => {
    render(<Subtitle firstText="Test" headingLevel="h5" />);
    const heading = screen.getByRole("heading", { level: 5 });
    expect(heading).toHaveClass("text-3xl", "font-bold", "mb-4");
  });

  test("secondText styling is consistent", () => {
    render(<Subtitle firstText="Test" secondText="Subtitle" />);
    const secondTextSpan = screen.getByText("Subtitle");
    expect(secondTextSpan).toHaveClass("text-primary-blue", "ml-2");
    expect(secondTextSpan).toHaveAttribute(
      "aria-label",
      "highlighted text: Subtitle"
    );
  });

  test("handles special characters in text", () => {
    render(<Subtitle firstText="Contact" secondText="& Info" />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("& Info")).toBeInTheDocument();

    const heading = screen.getByRole("heading");
    expect(heading).toHaveAttribute("aria-label", "Contact & Info");
  });

  test("container has proper layout classes", () => {
    render(<Subtitle {...defaultProps} />);
    const component = screen.getByTestId("Subtitle");
    expect(component).toHaveClass("w-fit");
  });

  test("all elements are present in correct structure", () => {
    render(<Subtitle firstText="About" secondText="Us" />);
    const component = screen.getByTestId("Subtitle");
    const heading = screen.getByRole("heading");
    const decorativeLine = document.querySelector(
      '[role="presentation"]'
    ) as HTMLElement;

    expect(component).toContainElement(heading);
    expect(component).toContainElement(decorativeLine);
    expect(heading).toHaveTextContent("About");
    expect(heading).toHaveTextContent("Us");
  });
});
