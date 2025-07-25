import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavLink from "./NavLink";

describe("NavLink Component", () => {
  const mockOnClick = jest.fn();
  const defaultProps = {
    onClick: mockOnClick,
    link: "Home",
  };

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test("renders correctly", () => {
    render(<NavLink {...defaultProps} />);

    const component = screen.getByTestId("NavLink");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<NavLink {...defaultProps} />);

    const component = screen.getByTestId("NavLink");
    expect(component).toHaveClass("NavLink");
  });

  test("renders link text correctly", () => {
    render(<NavLink {...defaultProps} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  // Fixed: Use menuitem role since that's what the component actually has
  test("calls onClick when button is clicked", () => {
    render(<NavLink {...defaultProps} />);

    const menuitem = screen.getByRole("menuitem", {
      name: "Navigate to Home section",
    });
    fireEvent.click(menuitem);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  // Fixed: Use menuitem role and check for proper class structure
  test("applies active styles when isActive is true", () => {
    render(<NavLink {...defaultProps} isActive={true} />);

    const menuitem = screen.getByRole("menuitem", {
      name: "Navigate to Home section",
    });
    expect(menuitem).toHaveClass("text-white");
    expect(menuitem.className).toContain("after:w-full");
  });

  test("applies inactive styles when isActive is false", () => {
    render(<NavLink {...defaultProps} isActive={false} />);

    const menuitem = screen.getByRole("menuitem", {
      name: "Navigate to Home section",
    });
    expect(menuitem).toHaveClass("text-gray-300");
    expect(menuitem.className).toContain("after:w-0");
  });

  test("applies inactive styles by default", () => {
    render(<NavLink {...defaultProps} />);

    const menuitem = screen.getByRole("menuitem", {
      name: "Navigate to Home section",
    });
    expect(menuitem).toHaveClass("text-gray-300");
    expect(menuitem.className).toContain("after:w-0");
  });

  // Additional accessibility tests
  test("has correct accessibility attributes", () => {
    render(<NavLink {...defaultProps} isActive={true} />);

    const menuitem = screen.getByRole("menuitem");
    expect(menuitem).toHaveAttribute("role", "menuitem");
    expect(menuitem).toHaveAttribute("aria-current", "page");
    expect(menuitem).toHaveAttribute("aria-label", "Navigate to Home section");
    expect(menuitem).toHaveAttribute("tabIndex", "0");
  });

  test("has correct accessibility attributes when inactive", () => {
    render(<NavLink {...defaultProps} isActive={false} />);

    const menuitem = screen.getByRole("menuitem");
    expect(menuitem).toHaveAttribute("role", "menuitem");
    expect(menuitem).not.toHaveAttribute("aria-current");
    expect(menuitem).toHaveAttribute("aria-label", "Navigate to Home section");
  });

  test("handles keyboard navigation - Enter key", async () => {
    const user = userEvent.setup();
    render(<NavLink {...defaultProps} />);

    const menuitem = screen.getByRole("menuitem");

    // Use fireEvent.keyDown to avoid triggering both click and keydown
    fireEvent.keyDown(menuitem, { key: "Enter", code: "Enter" });

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("handles keyboard navigation - Space key", async () => {
    const user = userEvent.setup();
    render(<NavLink {...defaultProps} />);

    const menuitem = screen.getByRole("menuitem");

    // Use fireEvent.keyDown to avoid triggering both click and keydown
    fireEvent.keyDown(menuitem, { key: " ", code: "Space" });

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("has correct base CSS classes", () => {
    render(<NavLink {...defaultProps} />);

    const menuitem = screen.getByRole("menuitem");
    expect(menuitem).toHaveClass(
      "NavLink",
      "relative",
      "font-medium",
      "transition-colors",
      "duration-300",
      "cursor-pointer",
      "capitalize"
    );
  });

  test("capitalizes link text with CSS", () => {
    render(<NavLink {...defaultProps} link="about" />);

    const menuitem = screen.getByRole("menuitem");
    expect(menuitem).toHaveClass("capitalize");
    expect(menuitem).toHaveTextContent("about");
  });

  test("works with different link names", () => {
    render(<NavLink onClick={mockOnClick} link="projects" isActive={false} />);

    const menuitem = screen.getByRole("menuitem", {
      name: "Navigate to projects section",
    });
    expect(menuitem).toBeInTheDocument();
    expect(menuitem).toHaveTextContent("projects");
  });

  test("has hover and after pseudo-element classes", () => {
    render(<NavLink {...defaultProps} />);

    const menuitem = screen.getByRole("menuitem");
    expect(menuitem.className).toContain("hover:text-white");
    expect(menuitem.className).toContain("hover:after:w-full");
    expect(menuitem.className).toContain("after:content-['']");
    expect(menuitem.className).toContain("after:absolute");
    expect(menuitem.className).toContain("after:bottom-0");
    expect(menuitem.className).toContain("after:left-0");
    expect(menuitem.className).toContain("after:h-0.5");
    expect(menuitem.className).toContain("after:bg-primary-blue");
    expect(menuitem.className).toContain("after:transition-all");
    expect(menuitem.className).toContain("after:duration-300");
  });

  // Additional test to ensure it's actually a button element
  test("is rendered as a button element", () => {
    render(<NavLink {...defaultProps} />);

    const menuitem = screen.getByRole("menuitem");
    expect(menuitem.tagName).toBe("BUTTON");
  });

  // Test using testId as alternative selector
  test("can be found by testId", () => {
    render(<NavLink {...defaultProps} />);

    const component = screen.getByTestId("NavLink");
    expect(component).toHaveAttribute("role", "menuitem");
    expect(component.tagName).toBe("BUTTON");
  });
});
