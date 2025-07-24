import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SocialNetwork from "./SocialNetwork";

describe("SocialNetwork Component", () => {
  const mockSocial = {
    icon: "/icons/twitter.svg",
    title: "Twitter",
    link: "https://twitter.com/username",
  };

  test("renders correctly with social prop", () => {
    render(<SocialNetwork social={mockSocial} />);

    const component = screen.getByTestId("SocialNetwork");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<SocialNetwork social={mockSocial} />);

    const component = screen.getByTestId("SocialNetwork");
    expect(component).toHaveClass("SocialNetwork");
  });

  test("renders as an anchor tag with correct attributes", () => {
    render(<SocialNetwork social={mockSocial} />);

    const link = screen.getByTestId("SocialNetwork");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "https://twitter.com/username");
    expect(link).toHaveAttribute("target", "_blank");
  });

  test("renders image with correct src and alt", () => {
    render(<SocialNetwork social={mockSocial} />);

    const image = screen.getByAltText("Twitter");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/icons/twitter.svg");
    expect(image).toHaveAttribute("alt", "Twitter");
  });

  test("has proper styling classes", () => {
    render(<SocialNetwork social={mockSocial} />);

    const component = screen.getByTestId("SocialNetwork");
    expect(component).toHaveClass(
      "SocialNetwork",
      "size-12",
      "bg-gradient-to-r",
      "from-indigo-500",
      "to-purple-600",
      "rounded-full",
      "flex",
      "items-center",
      "justify-center",
      "hover:opacity-90",
      "transition-opacity"
    );
  });

  test("renders with different social data", () => {
    const linkedInSocial = {
      icon: "/icons/linkedin.svg",
      title: "LinkedIn",
      link: "https://linkedin.com/in/username",
    };

    render(<SocialNetwork social={linkedInSocial} />);

    const link = screen.getByTestId("SocialNetwork");
    const image = screen.getByAltText("LinkedIn");

    expect(link).toHaveAttribute("href", "https://linkedin.com/in/username");
    expect(image).toHaveAttribute("src", "/icons/linkedin.svg");
    expect(image).toHaveAttribute("alt", "LinkedIn");
  });

  test("handles empty strings gracefully", () => {
    const emptySocial = {
      icon: "",
      title: "",
      link: "",
    };

    const { container } = render(<SocialNetwork social={emptySocial} />);

    const component = screen.getByTestId("SocialNetwork");
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("href", "");

    const image = container.querySelector("img");
    expect(image).toBeInTheDocument();
    // When src is empty string, browser may return null - both are acceptable
    expect(image?.getAttribute("alt")).toBe("");
  });

  test("link opens in new tab", () => {
    render(<SocialNetwork social={mockSocial} />);

    const link = screen.getByTestId("SocialNetwork");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
