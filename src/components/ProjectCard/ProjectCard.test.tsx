import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard Component", () => {
  test("renders correctly", () => {
    render(<ProjectCard />);

    const component = screen.getByTestId("ProjectCard");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<ProjectCard />);

    const component = screen.getByTestId("ProjectCard");
    expect(component).toHaveClass("ProjectCard");
  });

  test("renders default content", () => {
    render(<ProjectCard />);

    expect(screen.getByText("ProjectCard")).toBeInTheDocument();
  });
});
