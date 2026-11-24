import Paragraph from "components/Paragraph/Paragraph";
import TechList from "components/TechList/TechList";

import type { Article } from "constants/ArticlesData";

import "./ArticleCard.styles.scss";

type ArticleCardProps = {
  article: Article;
};

const formatDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article data-testid="ArticleCard" className="ArticleCard">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read "${article.title}" on ${article.publisher} (opens in a new tab)`}
        className="group flex flex-col md:flex-row bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-indigo-500/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
        <div className="relative md:w-[45%] h-56 md:h-auto md:min-h-[320px] shrink-0 overflow-hidden">
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-[#1A2437]/40 group-hover:bg-[#1A2437]/10 transition-colors duration-500"
            aria-hidden="true"
          />
          <span className="absolute top-4 left-4 rounded-full bg-[#1A2437]/90 border border-white/15 px-3 py-1 text-xs font-medium text-white">
            Published by {article.publisher}
          </span>
        </div>

        <div className="flex flex-col p-6 md:p-8 md:w-[55%]">
          <p className="flex flex-wrap items-center gap-x-2 text-sm text-gray-400 mb-3">
            <span className="text-primary-blue font-medium">
              {article.publisher}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </p>

          <h3 className="text-white text-xl md:text-2xl font-bold leading-snug mb-4">
            {article.title}
          </h3>

          <Paragraph
            text={article.excerpt}
            numberOfLines={4}
            customClass="!text-[16px] !text-gray-400 mb-6"
          />

          <TechList techList={article.tags} ariaLabel="Article topics" />

          <span className="mt-auto inline-flex items-center gap-2 font-medium text-white">
            Read the article
            <svg
              viewBox="0 0 24 24"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.25}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </span>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;
