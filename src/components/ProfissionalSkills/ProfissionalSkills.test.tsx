import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProfissionalSkills from "./ProfissionalSkills";

// Mock the Title component
jest.mock("components/Title/Title", () => {
  return function MockTitle({ firstText, ariaLabel, headingLevel }: any) {
    const HeadingTag = headingLevel || "h1";
    return <HeadingTag aria-label={ariaLabel}>{firstText}</HeadingTag>;
  };
});

describe("ProfissionalSkills Component", () => {
  const mockSkills = [
    "JavaScript Development",
    "React.js",
    "TypeScript",
    "Node.js",
    "CSS/SASS",
    "Git Version Control",
  ];

  const defaultProps = {
    skills: mockSkills,
  };

  test("renders correctly", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const component = screen.getByTestId("ProfissionalSkills");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const component = screen.getByTestId("ProfissionalSkills");
    expect(component).toHaveClass("ProfissionalSkills");
  });

  test("renders Professional Skills title", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    expect(screen.getByText("Professional Skills")).toBeInTheDocument();
  });

  test("renders all skills in the list", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    mockSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test("has correct container styling classes", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const component = screen.getByTestId("ProfissionalSkills");
    expect(component).toHaveClass(
      "ProfissionalSkills",
      "flex",
      "flex-col",
      "justify-center",
      "items-center",
      "h-full",
      "bg-gradient-to-br",
      "from-slate-800",
      "to-slate-900",
      "rounded-2xl",
      "p-8",
      "shadow-xl",
      "border",
      "border-primary-blue/20"
    );
  });

  test("has correct accessibility attributes", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const component = screen.getByTestId("ProfissionalSkills");
    expect(component).toHaveAttribute("role", "region");
    expect(component).toHaveAttribute(
      "aria-label",
      "Professional skills and competencies"
    );
  });

  test("applies custom aria-label when provided", () => {
    render(
      <ProfissionalSkills {...defaultProps} ariaLabel="My technical skills" />
    );

    const component = screen.getByTestId("ProfissionalSkills");
    expect(component).toHaveAttribute("aria-label", "My technical skills");
  });

  test("has correct list structure and accessibility", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveAttribute(
      "aria-label",
      "List of professional skills and competencies"
    );
    expect(list).toHaveClass(
      "ml-[20px]",
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "gap-4"
    );
  });

  test("each skill has correct list item structure", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockSkills.length);

    listItems.forEach((item, index) => {
      expect(item).toHaveClass("flex", "items-center", "mb-4");

      // Check for the bullet point
      const bullet = item.querySelector('[role="presentation"]');
      expect(bullet).toBeInTheDocument();
      expect(bullet).toHaveClass(
        "size-3",
        "bg-primary-blue",
        "rounded-full",
        "mr-4",
        "flex-shrink-0"
      );
      expect(bullet).toHaveAttribute("aria-hidden", "true");
    });
  });

  test("each skill span has correct accessibility attributes", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    mockSkills.forEach((skill) => {
      const skillElement = screen.getByText(skill);
      expect(skillElement).toHaveClass("text-slate-300");
      expect(skillElement).toHaveAttribute(
        "aria-label",
        `Professional skill: ${skill}`
      );
    });
  });

  test("title has correct accessibility attributes", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const title = screen.getByRole("heading", { level: 3 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("aria-label", "Professional skills heading");
  });

  test("works with empty skills array", () => {
    render(<ProfissionalSkills skills={[]} />);

    const component = screen.getByTestId("ProfissionalSkills");
    expect(component).toBeInTheDocument();

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  test("works with single skill", () => {
    const singleSkill = ["React.js"];
    render(<ProfissionalSkills skills={singleSkill} />);

    expect(screen.getByText("React.js")).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(1);
  });

  test("handles skills with special characters", () => {
    const specialSkills = ["CSS/SASS", "Node.js", "C#/.NET"];
    render(<ProfissionalSkills skills={specialSkills} />);

    specialSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
      const skillElement = screen.getByText(skill);
      expect(skillElement).toHaveAttribute(
        "aria-label",
        `Professional skill: ${skill}`
      );
    });
  });

  test("has correct grid layout classes", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const list = screen.getByRole("list");
    expect(list).toHaveClass("grid", "grid-cols-1", "md:grid-cols-2");
  });

  test("bullet points are properly hidden from screen readers", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const bullets = document.querySelectorAll(
      '[role="presentation"][aria-hidden="true"]'
    );
    expect(bullets).toHaveLength(mockSkills.length);
  });

  test("renders with many skills", () => {
    const manySkills = [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Vue.js",
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "Jest",
      "Cypress",
      "Webpack",
    ];

    render(<ProfissionalSkills skills={manySkills} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(manySkills.length);

    manySkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test("component is a landmark region", () => {
    render(<ProfissionalSkills {...defaultProps} />);

    const region = screen.getByRole("region");
    expect(region).toBeInTheDocument();
    expect(region).toHaveAttribute(
      "aria-label",
      "Professional skills and competencies"
    );
  });
});
