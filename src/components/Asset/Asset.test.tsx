import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Asset from "./Asset";

describe("Asset Component", () => {
  test("renders correctly", () => {
    render(<Asset />);

    const component = screen.getByTestId("Asset");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS classes", () => {
    render(<Asset />);

    const component = screen.getByTestId("Asset");
    expect(component).toHaveClass("Asset");
    expect(component).toHaveClass("group");
    expect(component).toHaveClass("relative");
  });

  // Fixed: Updated selectors for new structure
  test("renders with default variant", () => {
    render(<Asset />);

    // Find the first div child inside the figure (the main container)
    const imageContainer = screen.getByTestId("Asset").children[0];
    expect(imageContainer).toHaveClass("rounded-lg");
    expect(imageContainer).toHaveClass("transform");
    expect(imageContainer).toHaveClass("rotate-3");
    expect(imageContainer).toHaveClass("size-[220px]");
    expect(imageContainer).toHaveClass("md:size-[250px]");
  });

  test("renders with fullRounded variant", () => {
    render(<Asset variant="fullRounded" />);

    const imageContainer = screen.getByTestId("Asset").children[0];
    expect(imageContainer).toHaveClass("rounded-full");
    expect(imageContainer).toHaveClass("size-[300px]");
    expect(imageContainer).toHaveClass("md:size-[350px]");
    expect(imageContainer).not.toHaveClass("transform");
    expect(imageContainer).not.toHaveClass("rotate-3");
  });

  test("applies custom class when provided", () => {
    render(<Asset customClass="custom-asset" />);

    const component = screen.getByTestId("Asset");
    expect(component).toHaveClass("Asset", "custom-asset");
  });

  test("applies multiple custom classes when provided", () => {
    render(<Asset customClass="custom-asset another-class" />);

    const component = screen.getByTestId("Asset");
    expect(component).toHaveClass("Asset", "custom-asset", "another-class");
  });

  // Fixed: Use more specific selector to target the actual img element, not the figure
  test("renders image when provided", () => {
    render(<Asset image="/test-image.jpg" />);

    const image = screen.getByAltText("Profile image");
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe("IMG");
    expect(image).toHaveAttribute("src", "/test-image.jpg");
    expect(image).toHaveAttribute("alt", "Profile image");
  });

  test("renders image with hover and transition classes", () => {
    render(<Asset image="/test-image.jpg" />);

    const image = screen.getByAltText("Profile image");
    expect(image.tagName).toBe("IMG");
    expect(image).toHaveClass("group-hover:scale-105");
    expect(image).toHaveClass("transition-transform");
    expect(image).toHaveClass("duration-500");
  });

  // Fixed: Specialization is now in figcaption with different styling
  test("renders specialization badge when provided", () => {
    render(<Asset specialization="React Developer" />);

    expect(screen.getByText("React Developer")).toBeInTheDocument();
    const badge = screen.getByText("React Developer");
    expect(badge).toHaveClass("bg-primary-blue/80");
    expect(badge).toHaveClass("text-[#121B2D]");
    expect(badge).toHaveClass("rounded-lg");
    expect(badge).toHaveClass("font-bold");
  });

  test("does not render specialization badge when not provided", () => {
    render(<Asset />);

    const badge = screen.queryByText(/React Developer|Frontend|Backend/);
    expect(badge).not.toBeInTheDocument();
  });

  // Fixed: Updated to match new structure and default variant sizing
  test("has correct container structure", () => {
    render(<Asset />);

    const component = screen.getByTestId("Asset");
    expect(component.tagName).toBe("FIGURE"); // Now uses figure element
    expect(component).toHaveAttribute("role", "img");

    const mainContainer = component.children[0];
    expect(mainContainer).toHaveClass("size-[220px]"); // Default variant sizing
    expect(mainContainer).toHaveClass("md:size-[250px]");
    expect(mainContainer).toHaveClass("border-4");
    expect(mainContainer).toHaveClass("border-primary-blue/10");
  });

  test("has background overlay", () => {
    render(<Asset />);

    const overlay = screen
      .getByTestId("Asset")
      .querySelector('[aria-hidden="true"]');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("absolute");
    expect(overlay).toHaveClass("inset-0");
    expect(overlay).toHaveClass("bg-black/30");
    expect(overlay).toHaveClass("pointer-events-none");
  });

  test("inner container has correct styling", () => {
    render(<Asset />);

    const innerContainer = screen
      .getByTestId("Asset")
      .querySelector(".bg-slate-200");
    expect(innerContainer).toBeInTheDocument();
    expect(innerContainer).toHaveClass("w-full");
    expect(innerContainer).toHaveClass("h-full");
    expect(innerContainer).toHaveClass("border-2");
    expect(innerContainer).toHaveClass("border-dashed");
    expect(innerContainer).toHaveClass("rounded-full");
    expect(innerContainer).toHaveClass("text-slate-500");
  });

  // Fixed: Updated to match new component structure
  test("works with all props together", () => {
    render(
      <Asset
        image="/test.jpg"
        variant="fullRounded"
        specialization="Full Stack Developer"
        customClass="complete-asset"
        alt="Custom alt text"
      />
    );

    const component = screen.getByTestId("Asset");
    expect(component).toHaveClass("Asset", "complete-asset");
    expect(component).toHaveAttribute("aria-label", "Custom alt text");

    const image = screen.getByAltText("Custom alt text");
    expect(image.tagName).toBe("IMG");
    expect(image).toHaveAttribute("src", "/test.jpg");
    expect(image).toHaveAttribute("alt", "Custom alt text");

    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();

    const imageContainer = component.children[0];
    expect(imageContainer).toHaveClass("rounded-full");
    expect(imageContainer).toHaveClass("size-[300px]");
  });

  // New tests for accessibility features
  test("has correct accessibility attributes", () => {
    render(<Asset alt="Custom profile image" />);

    const component = screen.getByTestId("Asset");
    expect(component).toHaveAttribute("role", "img");
    expect(component).toHaveAttribute("aria-label", "Custom profile image");
  });

  test("specialization has correct accessibility label", () => {
    render(<Asset specialization="React Developer" />);

    const specialization = screen.getByText("React Developer");
    expect(specialization.tagName).toBe("FIGCAPTION");
    expect(specialization).toHaveAttribute(
      "aria-label",
      "Technology stack: React Developer"
    );
  });

  test("image has loading='lazy' attribute", () => {
    render(<Asset image="/test.jpg" />);

    const image = screen.getByAltText("Profile image");
    expect(image.tagName).toBe("IMG");
    expect(image).toHaveAttribute("loading", "lazy");
  });

  test("overlay has aria-hidden attribute", () => {
    render(<Asset />);

    const overlay = screen
      .getByTestId("Asset")
      .querySelector('[aria-hidden="true"]');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveAttribute("aria-hidden", "true");
  });

  test("uses default alt text when not provided", () => {
    render(<Asset image="/test.jpg" />);

    const component = screen.getByTestId("Asset");
    const image = screen.getByAltText("Profile image");

    expect(component).toHaveAttribute("aria-label", "Profile image");
    expect(image.tagName).toBe("IMG");
    expect(image).toHaveAttribute("alt", "Profile image");
  });

  test("does not render image element when image prop is not provided", () => {
    render(<Asset />);

    // Should not find any img element when no image is provided
    expect(screen.queryByAltText("Profile image")).not.toBeInTheDocument();

    // But the figure should still exist
    const figure = screen.getByTestId("Asset");
    expect(figure).toBeInTheDocument();
    expect(figure.tagName).toBe("FIGURE");
  });
});
