import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectCard from "./ProjectCard";

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

// Mock Modal component
jest.mock("components/Modal/Modal", () => {
  return function MockModal({ isOpen, children, ariaLabel }: any) {
    return isOpen ? <div data-testid="modal" aria-label={ariaLabel}>{children}</div> : null;
  };
});

// Mock Carousel component
jest.mock("components/Carousel/Carousel", () => {
  return function MockCarousel({ title, ariaLabel }: any) {
    return <div data-testid="carousel" aria-label={ariaLabel}>Carousel for {title}</div>;
  };
});

// Mock TechList component
jest.mock("components/TechList/TechList", () => {
  return function MockTechList({ techList, ariaLabel }: any) {
    return (
      <div data-testid="tech-list" aria-label={ariaLabel}>
        {techList.map((tech: string, index: number) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    );
  };
});

// Mock Paragraph component
jest.mock("components/Paragraph/Paragraph", () => {
  return function MockParagraph({ text, ariaLabel }: any) {
    return <p aria-label={ariaLabel}>{text}</p>;
  };
});

const mockProject = {
  title: "Test Project",
  description: "This is a test project description",
  technologies: ["React", "TypeScript", "TailwindCSS"],
  gradient: "bg-gradient-to-r from-blue-500 to-purple-600",
  mainImage: "test-image.jpg",
  moreImages: ["image1.jpg", "image2.jpg", "image3.jpg"],
};

describe("ProjectCard Component", () => {
  test("renders correctly with required props", () => {
    render(<ProjectCard project={mockProject} />);

    const component = screen.getByTestId("ProjectCard");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<ProjectCard project={mockProject} />);

    const component = screen.getByTestId("ProjectCard");
    expect(component).toHaveClass("ProjectCard");
  });

  test("renders project content correctly", () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("This is a test project description")).toBeInTheDocument();
  });

  test("renders project image with correct alt text", () => {
    render(<ProjectCard project={mockProject} />);

    const image = screen.getByAltText("Screenshot of Test Project project showing the main interface");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  test("renders technologies list", () => {
    render(<ProjectCard project={mockProject} />);

    const techList = screen.getByTestId("tech-list");
    expect(techList).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("TailwindCSS")).toBeInTheDocument();
  });

  test("shows plus button on hover", async () => {
    const user = userEvent.setup();
    render(<ProjectCard project={mockProject} />);

    const card = screen.getByTestId("ProjectCard");
    
    // Initially, plus button should not be visible
    expect(screen.queryByLabelText(/View more images/)).not.toBeInTheDocument();

    // Hover over the card
    await user.hover(card);

    // Plus button should appear
    await waitFor(() => {
      expect(screen.getByLabelText(`View more images of ${mockProject.title} project`)).toBeInTheDocument();
    });
  });

  test("opens modal when plus button is clicked", async () => {
    const user = userEvent.setup();
    render(<ProjectCard project={mockProject} />);

    const card = screen.getByTestId("ProjectCard");
    
    // Hover to show plus button
    await user.hover(card);

    // Wait for plus button to appear and click it
    await waitFor(() => {
      const plusButton = screen.getByLabelText(`View more images of ${mockProject.title} project`);
      return user.click(plusButton);
    });

    // Modal should be open
    await waitFor(() => {
      expect(screen.getByTestId("modal")).toBeInTheDocument();
      expect(screen.getByTestId("carousel")).toBeInTheDocument();
    });
  });

  test("opens modal when plus button is activated with keyboard", async () => {
    const user = userEvent.setup();
    render(<ProjectCard project={mockProject} />);

    const card = screen.getByTestId("ProjectCard");
    
    // Hover to show plus button
    await user.hover(card);

    // Wait for plus button and press Enter
    await waitFor(async () => {
      const plusButton = screen.getByLabelText(`View more images of ${mockProject.title} project`);
      await user.type(plusButton, "{enter}");
    });

    // Modal should be open
    await waitFor(() => {
      expect(screen.getByTestId("modal")).toBeInTheDocument();
    });
  });

  test("renders with project index and total projects", () => {
    render(
      <ProjectCard 
        project={mockProject} 
        projectIndex={1} 
        totalProjects={5} 
      />
    );

    const article = screen.getByRole("gridcell");
    expect(article).toHaveAttribute("aria-label", "Test Project project card Project 1 of 5");
  });

  test("renders without project index when not provided", () => {
    render(<ProjectCard project={mockProject} />);

    const article = screen.getByRole("gridcell");
    expect(article).toHaveAttribute("aria-label", "Test Project project card ");
  });

  test("has proper accessibility attributes", () => {
    render(<ProjectCard project={mockProject} />);

    // Check article has gridcell role
    const article = screen.getByRole("gridcell");
    expect(article).toBeInTheDocument();

    // Check image container has proper role and aria-label
    const imageContainer = screen.getByLabelText("Test Project project preview image");
    expect(imageContainer).toHaveAttribute("role", "img");

    // Check technologies group
    const techGroup = screen.getByLabelText("Technologies used in this project");
    expect(techGroup).toHaveAttribute("role", "group");
  });

  test("handles project without main image", () => {
    const projectWithoutImage = {
      ...mockProject,
      mainImage: undefined,
    };

    render(<ProjectCard project={projectWithoutImage} />);

    const component = screen.getByTestId("ProjectCard");
    expect(component).toBeInTheDocument();
    
    // Should not render img element
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  test("handles project without more images", () => {
    const projectWithoutMoreImages = {
      ...mockProject,
      moreImages: undefined,
    };

    render(<ProjectCard project={projectWithoutMoreImages} />);

    const card = screen.getByTestId("ProjectCard");
    expect(card).toBeInTheDocument();
    
    // Component should still render without errors
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  test("modal has correct accessibility attributes", async () => {
    const user = userEvent.setup();
    render(<ProjectCard project={mockProject} />);

    const card = screen.getByTestId("ProjectCard");
    await user.hover(card);

    await waitFor(async () => {
      const plusButton = screen.getByLabelText(`View more images of ${mockProject.title} project`);
      await user.click(plusButton);
    });

    await waitFor(() => {
      const modal = screen.getByTestId("modal");
      expect(modal).toHaveAttribute("aria-label", `${mockProject.title} project image gallery`);
      
      const carousel = screen.getByTestId("carousel");
      expect(carousel).toHaveAttribute("aria-label", `Image carousel for ${mockProject.title} project`);
    });
  });
});