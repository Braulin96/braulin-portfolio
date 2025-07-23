import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel Component", () => {
  test("renders correctly", () => {
    render(<Carousel />);

    const component = screen.getByTestId("Carousel");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<Carousel />);

    const component = screen.getByTestId("Carousel");
    expect(component).toHaveClass("Carousel");
  });

  test("renders default content", () => {
    render(<Carousel />);

    expect(screen.getByText("Carousel")).toBeInTheDocument();
  });
});
