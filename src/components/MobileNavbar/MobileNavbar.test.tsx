import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MobileNavbar from "./MobileNavbar";

describe("MobileNavbar Component", () => {
  test("renders correctly", () => {
    render(<MobileNavbar />);

    const component = screen.getByTestId("MobileNavbar");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<MobileNavbar />);

    const component = screen.getByTestId("MobileNavbar");
    expect(component).toHaveClass("MobileNavbar");
  });

  test("renders default content", () => {
    render(<MobileNavbar />);

    expect(screen.getByText("MobileNavbar")).toBeInTheDocument();
  });
});
