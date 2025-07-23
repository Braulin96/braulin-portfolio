import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TechList from "./TechList";

describe("TechList Component", () => {
  const mockTechList = ["React", "TypeScript", "Node.js", "Tailwind CSS"];

  test("renders correctly with required techList prop", () => {
    render(<TechList techList={mockTechList} />);

    const component = screen.getByTestId("TechList");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS classes", () => {
    render(<TechList techList={mockTechList} />);

    const component = screen.getByTestId("TechList");
    expect(component).toHaveClass("TechList");
    expect(component).toHaveClass("flex");
    expect(component).toHaveClass("flex-wrap");
    expect(component).toHaveClass("gap-2");
    expect(component).toHaveClass("mb-6");
  });

  test("renders all tech items correctly", () => {
    render(<TechList techList={mockTechList} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
  });

  test("renders correct number of tech items", () => {
    render(<TechList techList={mockTechList} />);

    const techItems = screen.getAllByText(
      /React|TypeScript|Node\.js|Tailwind CSS/
    );
    expect(techItems).toHaveLength(4);
  });

  test("each tech item has correct styling classes", () => {
    render(<TechList techList={["React"]} />);

    const techItem = screen.getByText("React");
    expect(techItem.tagName).toBe("SPAN");
    expect(techItem).toHaveClass("bg-slate-800");
    expect(techItem).toHaveClass("px-3");
    expect(techItem).toHaveClass("py-1");
    expect(techItem).toHaveClass("rounded-full");
    expect(techItem).toHaveClass("text-sm");
  });

  test("renders with empty tech list", () => {
    render(<TechList techList={[]} />);

    const component = screen.getByTestId("TechList");
    expect(component).toBeInTheDocument();
    expect(component.children).toHaveLength(0);
  });

  test("renders with single tech item", () => {
    render(<TechList techList={["JavaScript"]} />);

    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    const techItems = screen.getAllByText("JavaScript");
    expect(techItems).toHaveLength(1);
  });

  test("renders with special characters in tech names", () => {
    const specialTechList = ["React.js", "Node.js", "CSS3", "HTML5"];
    render(<TechList techList={specialTechList} />);

    expect(screen.getByText("React.js")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("CSS3")).toBeInTheDocument();
    expect(screen.getByText("HTML5")).toBeInTheDocument();
  });

  test("renders with long tech list", () => {
    const longTechList = [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "Tailwind CSS",
      "SCSS",
    ];
    render(<TechList techList={longTechList} />);

    const techItems = screen.getAllByText(
      /React|TypeScript|JavaScript|Node\.js|Express|MongoDB|PostgreSQL|Docker|AWS|Git|Tailwind CSS|SCSS/
    );
    expect(techItems).toHaveLength(12);
  });

  test("handles tech names with spaces", () => {
    const techWithSpaces = ["Tailwind CSS", "React Native", "Next.js"];
    render(<TechList techList={techWithSpaces} />);

    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
    expect(screen.getByText("React Native")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });
});
