import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ToolsCard from "./ToolsCard";

describe("ToolsCard Component", () => {
  const mockTool = {
    name: "React",
    icon: "/icons/react.svg",
  };

  test("renders correctly with required tool prop", () => {
    render(<ToolsCard tool={mockTool} />);

    const component = screen.getByTestId("ToolsCard");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS classes", () => {
    render(<ToolsCard tool={mockTool} />);

    const component = screen.getByTestId("ToolsCard");
    expect(component).toHaveClass("ToolsCard");
    expect(component).toHaveClass("size-24");
    expect(component).toHaveClass("bg-gradient-to-br");
    expect(component).toHaveClass("from-slate-800");
    expect(component).toHaveClass("to-slate-900");
    expect(component).toHaveClass("rounded-2xl");
  });

  test("renders tool name correctly", () => {
    render(<ToolsCard tool={mockTool} />);

    expect(screen.getByText("React")).toBeInTheDocument();
  });

  test("renders tool icon correctly", () => {
    render(<ToolsCard tool={mockTool} />);

    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "/icons/react.svg");
    expect(icon).toHaveAttribute("alt", "React");
  });

  test("has correct border and hover classes", () => {
    render(<ToolsCard tool={mockTool} />);

    const component = screen.getByTestId("ToolsCard");
    expect(component).toHaveClass("border");
    expect(component).toHaveClass("border-primary-blue/20");
    expect(component).toHaveClass("hover:border-primary-blue/40");
    expect(component).toHaveClass("transition-all");
  });

  test("has correct layout classes", () => {
    render(<ToolsCard tool={mockTool} />);

    const component = screen.getByTestId("ToolsCard");
    expect(component).toHaveClass("flex");
    expect(component).toHaveClass("flex-col");
    expect(component).toHaveClass("items-center");
    expect(component).toHaveClass("justify-center");
    expect(component).toHaveClass("p-4");
  });

  test("icon has correct styling classes", () => {
    render(<ToolsCard tool={mockTool} />);

    const icon = screen.getByRole("img");
    expect(icon).toHaveClass("mb-2");
  });

  test("tool name has correct text styling", () => {
    render(<ToolsCard tool={mockTool} />);

    const toolName = screen.getByText("React");
    expect(toolName.tagName).toBe("SPAN");
    expect(toolName).toHaveClass("text-sm");
  });

  test("renders with different tool data", () => {
    const differentTool = {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
    };

    render(<ToolsCard tool={differentTool} />);

    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", "/icons/typescript.svg");
    expect(icon).toHaveAttribute("alt", "TypeScript");
  });

  test("handles tool names with special characters", () => {
    const specialTool = {
      name: "Node.js",
      icon: "/icons/nodejs.svg",
    };

    render(<ToolsCard tool={specialTool} />);

    expect(screen.getByText("Node.js")).toBeInTheDocument();
    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("alt", "Node.js");
  });

  test("handles long tool names", () => {
    const longNameTool = {
      name: "JavaScript ES6+",
      icon: "/icons/javascript.svg",
    };

    render(<ToolsCard tool={longNameTool} />);

    expect(screen.getByText("JavaScript ES6+")).toBeInTheDocument();
  });
});
