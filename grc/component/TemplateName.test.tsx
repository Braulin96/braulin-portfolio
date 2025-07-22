import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TemplateName from "./TemplateName";

describe("TemplateName Component", () => {
  test("renders correctly", () => {
    render(<TemplateName />);

    const component = screen.getByTestId("TemplateName");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<TemplateName />);

    const component = screen.getByTestId("TemplateName");
    expect(component).toHaveClass("TemplateName");
  });

  test("renders default content", () => {
    render(<TemplateName />);

    expect(screen.getByText("TemplateName")).toBeInTheDocument();
  });
});
