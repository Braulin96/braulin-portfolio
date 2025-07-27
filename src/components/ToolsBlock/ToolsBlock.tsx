import SlideCarousel from "components/SlideCarousel/SlideCarousel";
import ToolsCard from "components/ToolsCard/ToolsCard";

import "./ToolsBlock.styles.scss";

type ToolsBlockProps = {
  tools: {
    name: string;
    icon?: string;
    type?: string;
  }[];
  ariaLabel?: string;
};

const ToolsBlock = ({ tools, ariaLabel }: ToolsBlockProps) => {
  return (
    <div
      data-testid="ToolsBlock"
      className="md:py-8 ToolsBlock"
      role="region"
      aria-label={ariaLabel || "Development tools and technologies"}>
      <SlideCarousel
        slides={tools}
        ariaLabel="Sliding carousel of development tools and programming technologies">
        {(tool, index) => <ToolsCard key={index} tool={tool} />}
      </SlideCarousel>
    </div>
  );
};

export default ToolsBlock;
