import Subtitle from "components/Subtitle/Subtitle";
import Paragraph from "components/Paragraph/Paragraph";
import ArticleCard from "components/ArticleCard/ArticleCard";
import FadeOnScroll from "utils/FadeOnScroll";

import { ARTICLES_DATA } from "constants/ArticlesData";

import "./Articles.styles.scss";

const Articles = () => {
  return (
    <section
      id="writing"
      className="py-20 relative"
      aria-label="Featured writing">
      <div className="container mx-auto px-4">
        <FadeOnScroll delay={100} className="text-center mb-16">
          <Subtitle
            firstText="Featured"
            secondText="writing"
            customClass="mx-auto"
            headingLevel="h2"
          />
          <Paragraph
            text="How I approach front-end problems in real products, from turning complex data into clear interfaces to designing alongside the people who use them."
            customClass="mt-8 mx-auto !text-gray-400 !text-[16px] max-w-2xl"
          />
        </FadeOnScroll>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {ARTICLES_DATA.map((article, index) => (
            <FadeOnScroll
              key={article.id}
              data="fade-up"
              duration={600}
              delay={200 + index * 100}
              offset={150}>
              <ArticleCard article={article} />
            </FadeOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
