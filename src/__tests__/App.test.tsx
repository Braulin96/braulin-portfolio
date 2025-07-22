// src/__tests__/App.test.tsx
import { render, screen } from "@testing-library/react";
import App from "../App"; // Fixed path, removed .tsx

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
