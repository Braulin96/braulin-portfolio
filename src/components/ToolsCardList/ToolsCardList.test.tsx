import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ToolsCardList from "./ToolsCardList";

describe("ToolsCardList Component", () => {
  test("renders correctly", () => {
    render(<ToolsCardList />);

    const component = screen.getByTestId("ToolsCardList");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<ToolsCardList />);

    const component = screen.getByTestId("ToolsCardList");
    expect(component).toHaveClass("ToolsCardList");
  });

  test("renders default content", () => {
    render(<ToolsCardList />);

    expect(screen.getByText("ToolsCardList")).toBeInTheDocument();
  });
});
