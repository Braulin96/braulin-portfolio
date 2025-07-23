import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Subtitle from "./Subtitle";

describe("Subtitle Component", () => {
  test("renders correctly", () => {
    render(<Subtitle />);

    const component = screen.getByTestId("Subtitle");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<Subtitle />);

    const component = screen.getByTestId("Subtitle");
    expect(component).toHaveClass("Subtitle");
  });

  test("renders default content", () => {
    render(<Subtitle />);

    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });
});
