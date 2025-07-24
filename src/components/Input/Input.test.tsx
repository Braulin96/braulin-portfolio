import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  test("renders correctly", () => {
    render(<Input />);

    const component = screen.getByTestId("Input");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<Input />);

    const component = screen.getByTestId("Input");
    expect(component).toHaveClass("Input");
  });

  test("renders default content", () => {
    render(<Input />);

    expect(screen.getByText("Input")).toBeInTheDocument();
  });
});
