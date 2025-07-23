import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ToolsBlock from "./ToolsBlock";

describe("ToolsBlock Component", () => {
  test("renders correctly", () => {
    render(<ToolsBlock />);

    const component = screen.getByTestId("ToolsBlock");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<ToolsBlock />);

    const component = screen.getByTestId("ToolsBlock");
    expect(component).toHaveClass("ToolsBlock");
  });

  test("renders default content", () => {
    render(<ToolsBlock />);

    expect(screen.getByText("ToolsBlock")).toBeInTheDocument();
  });
});
