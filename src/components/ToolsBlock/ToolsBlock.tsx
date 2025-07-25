import ToolsCardList from "components/ToolsCardList/ToolsCardList";
import Title from "components/Title/Title";

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
      <Title
        firstText="Tools & Technologies"
        customClass="mb-6 text-center"
        size="sm"
        headingLevel="h3"
        ariaLabel="Tools and technologies heading"
      />
      <ToolsCardList
        tools={tools}
        ariaLabel="Grid of development tools and programming technologies"
      />
    </div>
  );
};

export default ToolsBlock;
