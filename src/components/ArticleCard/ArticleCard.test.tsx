import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ArticleCard from "./ArticleCard";
import type { Article } from "constants/ArticlesData";

const article: Article = {
  id: "test-article",
  title: "Designing a clearer interface",
  excerpt: "How complex data became a simple UI.",
  publisher: "SME Water",
  date: "2026-10-20",
  readingTime: "9 min read",
  url: "https://example.com/article",
  image: "image.jpg",
  imageAlt: "Screenshot of the interface",
  tags: ["UI/UX Design", "Data Visualisation"],
};

describe("ArticleCard Component", () => {
  test("renders the title, publisher and tags", () => {
    render(<ArticleCard article={article} />);

    expect(
      screen.getByRole("heading", { name: article.title })
    ).toBeInTheDocument();
    expect(screen.getByText("UI/UX Design")).toBeInTheDocument();
    expect(screen.getByText("Data Visualisation")).toBeInTheDocument();
  });

  test("links to the article in a new tab safely", () => {
    render(<ArticleCard article={article} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", article.url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("shows a formatted publish date", () => {
    render(<ArticleCard article={article} />);

    const time = screen.getByText("20 Oct 2026");
    expect(time).toHaveAttribute("dateTime", "2026-10-20");
  });

  test("renders the cover image with alt text", () => {
    render(<ArticleCard article={article} />);

    expect(screen.getByAltText(article.imageAlt)).toBeInTheDocument();
  });
});
