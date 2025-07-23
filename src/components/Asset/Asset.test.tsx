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

    const imageContainer = screen
      .getByTestId("Asset")
      .querySelector("div > div");
    expect(imageContainer).toHaveClass("rounded-lg");
    expect(imageContainer).toHaveClass("transform");
    expect(imageContainer).toHaveClass("rotate-3");
  });

  test("renders with fullRounded variant", () => {
    render(<Asset variant="fullRounded" />);

    const imageContainer = screen
      .getByTestId("Asset")
      .querySelector("div > div");
    expect(imageContainer).toHaveClass("rounded-full");
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

  test("renders image when provided", () => {
    render(<Asset image="/test-image.jpg" />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test-image.jpg");
  });

  test("renders image with hover and transition classes", () => {
    render(<Asset image="/test-image.jpg" />);

    const image = screen.getByRole("img");
    expect(image).toHaveClass("group-hover:scale-105");
    expect(image).toHaveClass("transition-transform");
    expect(image).toHaveClass("duration-500");
  });

  test("renders specialization badge when provided", () => {
    render(<Asset specialization="React Developer" />);

    expect(screen.getByText("React Developer")).toBeInTheDocument();
    const badge = screen.getByText("React Developer");
    expect(badge).toHaveClass("bg-primary-blue");
    expect(badge).toHaveClass("text-white");
    expect(badge).toHaveClass("rounded-full");
  });

  test("does not render specialization badge when not provided", () => {
    render(<Asset />);

    const badge = screen.queryByText(/React Developer|Frontend|Backend/);
    expect(badge).not.toBeInTheDocument();
  });

  test("has correct container structure", () => {
    render(<Asset />);

    const component = screen.getByTestId("Asset");
    expect(component.children).toHaveLength(1); // Only the main container div

    const mainContainer = component.children[0];
    expect(mainContainer).toHaveClass("size-[300px]");
    expect(mainContainer).toHaveClass("md:size-[350px]");
    expect(mainContainer).toHaveClass("border-4");
    expect(mainContainer).toHaveClass("border-primary-blue/20");
  });

  test("has background overlay", () => {
    render(<Asset />);

    const overlay = screen.getByTestId("Asset").querySelector(".bg-black\\/30");
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("absolute");
    expect(overlay).toHaveClass("inset-0");
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

  test("works with all props together", () => {
    render(
      <Asset
        image="/test.jpg"
        variant="fullRounded"
        specialization="Full Stack Developer"
        customClass="complete-asset"
      />
    );

    const component = screen.getByTestId("Asset");
    expect(component).toHaveClass("Asset", "complete-asset");

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/test.jpg");

    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();

    const imageContainer = component.querySelector("div > div");
    expect(imageContainer).toHaveClass("rounded-full");
  });
});
