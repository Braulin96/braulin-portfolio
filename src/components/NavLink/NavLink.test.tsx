import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
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

  test("calls onClick when button is clicked", () => {
    render(<NavLink {...defaultProps} />);

    const button = screen.getByRole("button", { name: "Home" });
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("applies active styles when isActive is true", () => {
    render(<NavLink {...defaultProps} isActive={true} />);

    const button = screen.getByRole("button", { name: "Home" });
    expect(button).toHaveClass("text-white", "after:w-full");
  });

  test("applies inactive styles when isActive is false", () => {
    render(<NavLink {...defaultProps} isActive={false} />);

    const button = screen.getByRole("button", { name: "Home" });
    expect(button).toHaveClass("text-gray-300");
  });

  test("applies inactive styles by default", () => {
    render(<NavLink {...defaultProps} />);

    const button = screen.getByRole("button", { name: "Home" });
    expect(button).toHaveClass("text-gray-300");
  });
});
