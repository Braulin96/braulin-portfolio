import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactDetails from "./ContactDetails";

describe("ContactDetails Component", () => {
  const mockContact = {
    icon: "fas fa-envelope",
    title: "Email",
    info: "contact@example.com",
  };

  test("renders correctly with contact prop", () => {
    render(<ContactDetails contact={mockContact} />);

    const component = screen.getByTestId("ContactDetails");
    expect(component).toBeInTheDocument();
  });

  test("has correct CSS class", () => {
    render(<ContactDetails contact={mockContact} />);

    const component = screen.getByTestId("ContactDetails");
    expect(component).toHaveClass("ContactDetails");
  });

  test("renders contact title and info", () => {
    render(<ContactDetails contact={mockContact} />);

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("contact@example.com")).toBeInTheDocument();
  });

  test("renders icon with correct class", () => {
    const { container } = render(<ContactDetails contact={mockContact} />);

    const icon = container.querySelector("i");
    expect(icon).toHaveClass("fas fa-envelope");
  });

  test("has proper structure and styling", () => {
    render(<ContactDetails contact={mockContact} />);

    const component = screen.getByTestId("ContactDetails");
    expect(component).toHaveClass("ContactDetails", "flex", "items-start");

    // Check if title has correct styling
    const title = screen.getByText("Email");
    expect(title).toHaveClass("font-bold", "mb-1");

    // Check if info has correct styling
    const info = screen.getByText("contact@example.com");
    expect(info).toHaveClass("text-gray-400");
  });

  test("renders with different contact data", () => {
    const phoneContact = {
      icon: "fas fa-phone",
      title: "Phone",
      info: "+1 234 567 8900",
    };

    const { container } = render(<ContactDetails contact={phoneContact} />);

    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("+1 234 567 8900")).toBeInTheDocument();

    const icon = container.querySelector("i");
    expect(icon).toHaveClass("fas fa-phone");
  });

  test("handles empty strings gracefully", () => {
    const emptyContact = {
      icon: "",
      title: "",
      info: "",
    };

    render(<ContactDetails contact={emptyContact} />);

    const component = screen.getByTestId("ContactDetails");
    expect(component).toBeInTheDocument();
  });
});
