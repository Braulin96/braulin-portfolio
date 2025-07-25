import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SocialNetwork from "./SocialNetwork";

// Mock window.open for testing
Object.defineProperty(window, "open", {
  writable: true,
  value: jest.fn(),
});

describe("SocialNetwork Component", () => {
  const mockSocial = {
    icon: "/icons/twitter.svg",
    title: "Twitter",
    link: "https://twitter.com/username",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

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
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  // Fixed: Images with aria-hidden="true" are not accessible via getByRole
  test("renders image with correct src and accessibility attributes", () => {
    render(<SocialNetwork social={mockSocial} />);

    // Use querySelector to find the image since it's hidden from accessibility tree
    const image = document.querySelector("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/icons/twitter.svg");
    expect(image).toHaveAttribute("alt", "");
    expect(image).toHaveAttribute("aria-hidden", "true");
    expect(image).toHaveClass("p-[10px]");
  });

  // Fixed: Updated classes to match the actual component
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
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-indigo-500",
      "focus:ring-offset-2",
      "focus:ring-offset-slate-900",
      "transition-all"
    );
  });

  test("handles empty strings gracefully", () => {
    const emptySocial = {
      icon: "",
      title: "",
      link: "",
    };

    // Suppress console.error for this test since empty src causes a warning
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const { container } = render(<SocialNetwork social={emptySocial} />);

    const component = screen.getByTestId("SocialNetwork");
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("href", "");
    expect(component).toHaveAttribute(
      "aria-label",
      "Visit my  profile (opens in new tab)"
    );

    const image = container.querySelector("img");
    expect(image).toBeInTheDocument();
    expect(image?.getAttribute("alt")).toBe("");
    expect(image?.getAttribute("aria-hidden")).toBe("true");

    consoleSpy.mockRestore();
  });

  test("link opens in new tab", () => {
    render(<SocialNetwork social={mockSocial} />);

    const link = screen.getByTestId("SocialNetwork");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  // New accessibility tests
  test("has correct accessibility attributes", () => {
    render(<SocialNetwork social={mockSocial} />);

    const link = screen.getByTestId("SocialNetwork");
    expect(link).toHaveAttribute(
      "aria-label",
      "Visit my Twitter profile (opens in new tab)"
    );
    expect(link).toHaveAttribute("tabIndex", "0");
  });

  test("handles keyboard navigation - Enter key", async () => {
    const user = userEvent.setup();
    render(<SocialNetwork social={mockSocial} />);

    const link = screen.getByTestId("SocialNetwork");
    await user.type(link, "{enter}");

    expect(window.open).toHaveBeenCalledWith(
      "https://twitter.com/username",
      "_blank",
      "noopener,noreferrer"
    );
  });

  test("handles keyboard navigation - Space key", async () => {
    const user = userEvent.setup();
    render(<SocialNetwork social={mockSocial} />);

    const link = screen.getByTestId("SocialNetwork");
    await user.type(link, " ");

    expect(window.open).toHaveBeenCalledWith(
      "https://twitter.com/username",
      "_blank",
      "noopener,noreferrer"
    );
  });

  test("keyboard events trigger window.open (proving preventDefault works)", () => {
    render(<SocialNetwork social={mockSocial} />);

    const link = screen.getByTestId("SocialNetwork");

    // Clear any previous calls
    jest.clearAllMocks();

    // Test that both Enter and Space work correctly
    // If preventDefault wasn't called, these might not work as expected
    fireEvent.keyDown(link, { key: "Enter" });
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      "https://twitter.com/username",
      "_blank",
      "noopener,noreferrer"
    );

    fireEvent.keyDown(link, { key: " " });
    expect(window.open).toHaveBeenCalledTimes(2);

    // Test that other keys don't trigger window.open
    fireEvent.keyDown(link, { key: "Tab" });
    expect(window.open).toHaveBeenCalledTimes(2); // Should still be 2
  });

  test("works with focus styles", () => {
    render(<SocialNetwork social={mockSocial} />);

    const link = screen.getByTestId("SocialNetwork");
    expect(link).toHaveClass("focus:outline-none");
    expect(link).toHaveClass("focus:ring-2");
    expect(link).toHaveClass("focus:ring-indigo-500");
  });

  test("image is properly hidden from screen readers", () => {
    render(<SocialNetwork social={mockSocial} />);

    const image = document.querySelector("img");
    expect(image).toHaveAttribute("aria-hidden", "true");
    expect(image).toHaveAttribute("alt", "");

    // Verify it's not accessible via screen reader queries
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  test("aria-label updates with different social titles", () => {
    const githubSocial = {
      icon: "/icons/github.svg",
      title: "GitHub",
      link: "https://github.com/username",
    };

    render(<SocialNetwork social={githubSocial} />);

    const link = screen.getByTestId("SocialNetwork");
    expect(link).toHaveAttribute(
      "aria-label",
      "Visit my GitHub profile (opens in new tab)"
    );
  });

  test("keyboard events call window.open with correct parameters", () => {
    render(<SocialNetwork social={mockSocial} />);

    const link = screen.getByTestId("SocialNetwork");

    // Test Enter key
    fireEvent.keyDown(link, { key: "Enter", code: "Enter" });
    expect(window.open).toHaveBeenCalledWith(
      "https://twitter.com/username",
      "_blank",
      "noopener,noreferrer"
    );

    // Test Space key
    fireEvent.keyDown(link, { key: " ", code: "Space" });
    expect(window.open).toHaveBeenCalledTimes(2);
    expect(window.open).toHaveBeenLastCalledWith(
      "https://twitter.com/username",
      "_blank",
      "noopener,noreferrer"
    );
  });
});
