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

  test("renders with default variant", () => {
    render(<Asset />);
    const imageContainer = screen.getByTestId("Asset").children[0];
    expect(imageContainer).toHaveClass("size-[300px]");
    expect(imageContainer).toHaveClass("lg:size-[400px]");
    expect(imageContainer).toHaveClass("relative");
    expect(imageContainer).toHaveClass("overflow-hidden");
  });

  test("renders with fullRounded variant", () => {
    render(<Asset variant="fullRounded" />);
    const imageContainer = screen.getByTestId("Asset").children[0];
    expect(imageContainer).toHaveClass("rounded-2xl");
    expect(imageContainer).toHaveClass("size-[300px]");
    expect(imageContainer).toHaveClass("md:size-[350px]");
    expect(imageContainer).toHaveClass("lg:mr-[80px]");
    expect(imageContainer).toHaveClass("border-4");
  });

  test("renders with flexible variant", () => {
    render(<Asset variant="flexible" />);
    const imageContainer = screen.getByTestId("Asset").children[0];
    expect(imageContainer).toHaveClass("w-full");
    expect(imageContainer).toHaveClass("h-full");
    expect(imageContainer).toHaveClass("min-h-[300px]");
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

  test("renders image when provided", () => {
    render(<Asset image="/test-image.jpg" />);
    const image = screen.getByAltText("Profile image");
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe("IMG");
    expect(image).toHaveAttribute("src", "/test-image.jpg");
    expect(image).toHaveAttribute("alt", "Profile image");
  });

  test("renders image with correct classes", () => {
    render(<Asset image="/test-image.jpg" />);
    const image = screen.getByAltText("Profile image");
    expect(image).toHaveClass("transition-transform");
    expect(image).toHaveClass("duration-500");
    expect(image).toHaveClass("h-full");
    expect(image).toHaveClass("object-cover");
  });

  test("renders specialization badge when provided", () => {
    render(<Asset specialization="React Developer" />);
    expect(screen.getByText("React Developer")).toBeInTheDocument();
    const badge = screen.getByText("React Developer");
    expect(badge.tagName).toBe("FIGCAPTION");
    expect(badge).toHaveClass("absolute");
    expect(badge).toHaveClass("text-center");
    expect(badge).toHaveClass("bg-white");
    expect(badge).toHaveClass("text-primary-blue");
    expect(badge).toHaveClass("rounded-full");
    expect(badge).toHaveClass("font-bold");
  });

  test("does not render specialization badge when not provided", () => {
    render(<Asset />);
    const badge = screen.queryByText(/React Developer|Frontend|Backend/);
    expect(badge).not.toBeInTheDocument();
  });

  test("has correct container structure", () => {
    render(<Asset />);
    const component = screen.getByTestId("Asset");
    expect(component.tagName).toBe("FIGURE");
    expect(component).toHaveAttribute("role", "img");

    const mainContainer = component.children[0];
    expect(mainContainer).toHaveClass("relative");
    expect(mainContainer).toHaveClass("overflow-hidden");
  });

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
    expect(imageContainer).toHaveClass("rounded-2xl");
    expect(imageContainer).toHaveClass("size-[300px]");
  });

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
    expect(image).toHaveAttribute("loading", "lazy");
  });

  test("uses default alt text when not provided", () => {
    render(<Asset image="/test.jpg" />);
    const component = screen.getByTestId("Asset");
    const image = screen.getByAltText("Profile image");
    expect(component).toHaveAttribute("aria-label", "Profile image");
    expect(image).toHaveAttribute("alt", "Profile image");
  });

  test("does not render image element when image prop is not provided", () => {
    render(<Asset />);
    expect(screen.queryByAltText("Profile image")).not.toBeInTheDocument();
    const figure = screen.getByTestId("Asset");
    expect(figure).toBeInTheDocument();
    expect(figure.tagName).toBe("FIGURE");
  });

  test("has animation style for default variant", () => {
    render(<Asset variant="default" />);
    const component = screen.getByTestId("Asset");
    expect(component).toHaveStyle(
      "animation: smoothFloat 3s ease-in-out infinite"
    );
  });

  test("does not have animation for non-default variants", () => {
    render(<Asset variant="fullRounded" />);
    const component = screen.getByTestId("Asset");
    expect(component).toHaveStyle("animation: ");
  });

  test("uses ariaLabel prop when provided", () => {
    render(<Asset ariaLabel="Custom aria label" alt="Alt text" />);
    const component = screen.getByTestId("Asset");
    expect(component).toHaveAttribute("aria-label", "Custom aria label");
  });
});
