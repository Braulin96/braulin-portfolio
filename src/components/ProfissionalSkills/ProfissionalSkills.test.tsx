import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProfissionalSkills from "./ProfissionalSkills";

describe("ProfissionalSkills Component", () => {
  test("renders correctly", () => {
    render(<ProfissionalSkills />);

    const component = screen.getByTestId("ProfissionalSkills");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<ProfissionalSkills />);

    const component = screen.getByTestId("ProfissionalSkills");
    expect(component).toHaveClass("ProfissionalSkills");
  });

  test("renders default content", () => {
    render(<ProfissionalSkills />);

    expect(screen.getByText("ProfissionalSkills")).toBeInTheDocument();
  });
});
