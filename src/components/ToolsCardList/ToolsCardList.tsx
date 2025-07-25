import ToolsCard from "components/ToolsCard/ToolsCard";

import "./ToolsCardList.styles.scss";

type ToolsCardListProps = {
  tools: {
    name: string;
    icon?: string;
    type?: string;
  }[];
  ariaLabel?: string;
};

const ToolsCardList = ({ tools, ariaLabel }: ToolsCardListProps) => {
  return (
    <div
      data-testid="ToolsCardList"
      className="ToolsCardList flex flex-wrap justify-center gap-6"
      role="grid"
      aria-label={
        ariaLabel || "Collection of development tools and technologies"
      }>
      {tools.map((tool, index) => (
        <ToolsCard key={index} tool={tool} />
      ))}
    </div>
  );
};

export default ToolsCardList;
